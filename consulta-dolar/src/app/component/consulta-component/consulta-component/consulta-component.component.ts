import { Component, OnInit } from '@angular/core';
import { ConsultaDolarService } from 'src/app/service/consulta-dolar-service/consulta-dolar-service.service';

@Component({
  selector: 'app-consulta-component',
  templateUrl: './consulta-component.component.html',
  styleUrls: ['./consulta-component.component.sass']
})
export class ConsultaComponentComponent implements OnInit {

  public dataCotacao: String;

  constructor(private dolarService: ConsultaDolarService) { }

  ngOnInit(): void {
    let date = new Date();
    let month = (date.getUTCMonth() + 1).toString();
    let day = date.getUTCDate().toString();
    let year = date.getFullYear().toString();

    this.dataCotacao = `'${this.formatNumber(month)}-${this.formatNumber(day)}-${year}'`

    this.dolarService.consultaDolarDia(this.dataCotacao);
  }

  private formatNumber(num: String) {
    return num.length === 1 ? '0' + num : num;
  }
}
