import { Component, OnInit } from '@angular/core';
import CotacaoDolar from 'src/app/model/cotacao-dolar.interface';
import { ConsultaDolarService } from 'src/app/service/consulta-dolar-service/consulta-dolar-service.service';

@Component({
  selector: 'app-cotacao-component',
  templateUrl: './cotacao-component.component.html',
  styleUrls: ['./cotacao-component.component.sass']
})
export class CotacaoComponentComponent implements OnInit {

  public cotacaoDolar: CotacaoDolar;

  constructor(private consultaDolarService: ConsultaDolarService) { }

  ngOnInit(): void {
    this.consultaDolarService.getConsultasDolar
      .subscribe((value: CotacaoDolar) => {
        this.cotacaoDolar = value;
      }
    );
  }

}
