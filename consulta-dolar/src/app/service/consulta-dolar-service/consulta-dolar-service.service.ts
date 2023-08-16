import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, retry } from 'rxjs/operators'

import CotacaoDolar from 'src/app/model/cotacao-dolar.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultaDolarService {

  private readonly BASE_URL: String = 'localhost:8080/';

  private $consultaDolarSubject: BehaviorSubject<CotacaoDolar> = new BehaviorSubject<CotacaoDolar>({});

  constructor(private httpClient: HttpClient) { }

  get getConsultasDolar(): Observable<CotacaoDolar> {
    return this.$consultaDolarSubject.asObservable();
  }

  public consultaDolarDia(cotacaoDia: String): void {
    this.httpClient
      .get<CotacaoDolar>(`${this.BASE_URL}consultaDolarDia?cotacaoDia=${cotacaoDia}`)
      .pipe(
        distinctUntilChanged(),
        retry(3)
      )
      .subscribe(
        (result: CotacaoDolar) => this.$consultaDolarSubject.next(result),
        (err: HttpErrorResponse) => {
          console.error(err);
          this.$consultaDolarSubject.error(err);
        }
      );
  }

}
