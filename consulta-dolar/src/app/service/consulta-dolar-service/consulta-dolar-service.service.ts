import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, retry } from 'rxjs/operators'

import CotacaoDolar from 'src/app/model/cotacao-dolar.interface';
import DataCotacao from './interface/data-cotacao.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultaDolarService {

  private readonly BASE_URL: String = 'localhost:8080/';

  private $consultaDolarSubject: BehaviorSubject<CotacaoDolar> = new BehaviorSubject<CotacaoDolar>({
    dataCotacao: '',
    cotacaoCompra: 0,
    cotacaoVenda: 0,
    dataHoraCotacao: ''
  });

  private dataCotacao: DataCotacao = {
    dia: '',
    mes: '',
    ano: ''
  }

  private $dataCotacaoSubject: BehaviorSubject<DataCotacao> = new BehaviorSubject<DataCotacao>(this.dataCotacao);

  constructor(private httpClient: HttpClient) { }

  get getConsultasDolar(): Observable<CotacaoDolar> {
    return this.$consultaDolarSubject.asObservable();
  }

  get getUltimaDataCotacao(): Observable<DataCotacao> {
    return this.$dataCotacaoSubject.asObservable();
  }

  private get cotacaoDia(): String {
    return `'${this.formatNumber(this.dataCotacao.mes)}-${this.formatNumber(this.dataCotacao.dia)}-${this.dataCotacao.ano}'`;
  }

  private formatNumber(num: String) {
    return num.length === 1 ? '0' + num : num;
  }

  public consultaDolarDia(dia: String, mes: String, ano: String): void {
    this.dataCotacao.dia = dia;
    this.dataCotacao.mes = mes;
    this.dataCotacao.ano = ano;

    this.httpClient
      .get<CotacaoDolar>(`${this.BASE_URL}consultaDolarDia?cotacaoDia=${this.cotacaoDia}`)
      .pipe(
        distinctUntilChanged(),
        retry(3)
      )
      .subscribe(
        (result: CotacaoDolar) => {
          this.$consultaDolarSubject.next(result);
          this.$dataCotacaoSubject.next(this.dataCotacao);
        },
        (err: HttpErrorResponse) => {
          console.error(err);
          this.$consultaDolarSubject.error(err);
        }
      );
  }

}
