import { Component, OnInit } from '@angular/core';
import CotacaoDolar from 'src/app/model/cotacao-dolar.interface';
import { ConsultaDolarService } from 'src/app/service/consulta-dolar-service/consulta-dolar-service.service';
import DataCotacao from 'src/app/service/consulta-dolar-service/interface/data-cotacao.interface';

@Component({
  selector: 'app-cotacao-component',
  templateUrl: './cotacao-component.component.html',
  styleUrls: ['./cotacao-component.component.sass']
})
export class CotacaoComponentComponent implements OnInit {

  public cotacaoDolar: CotacaoDolar;
  public ultimoDiaCotacao: String = 'DD';
  public ultimoMesCotacao: String = 'MM';
  public ultimoAnoCotacao: String = 'AAAA';
  public error: boolean = false;
  public isLoading: boolean = false;

  constructor(private consultaDolarService: ConsultaDolarService) { }

  ngOnInit(): void {
    this.consultaDolarService.getConsultasDolar
      .subscribe((value: CotacaoDolar) => {
        this.cotacaoDolar = value;
      }
    );
    this.consultaDolarService.getUltimaDataCotacao
      .subscribe((value: DataCotacao) => {
        this.ultimoDiaCotacao = value.dia;
        this.ultimoMesCotacao = value.mes;
        this.ultimoAnoCotacao = value.ano;
      });
  }

}
