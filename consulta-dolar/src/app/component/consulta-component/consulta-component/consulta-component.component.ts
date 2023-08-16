import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ConsultaDolarService } from 'src/app/service/consulta-dolar-service/consulta-dolar-service.service';

@Component({
  selector: 'app-consulta-component',
  templateUrl: './consulta-component.component.html',
  styleUrls: ['./consulta-component.component.sass']
})
export class ConsultaComponentComponent implements OnInit {

  public diaCotacao: String;
  public mesCotacao: String;
  public anoCotacao: String;
  
  public minDate: Date;
  public maxDate: Date;
  public startDate: Date;

  constructor(private dolarService: ConsultaDolarService) { }

  public currentDate = new FormControl(new Date());

  ngOnInit(): void {
    let date = new Date();
    this.mesCotacao = (date.getUTCMonth() + 1).toString();
    this.diaCotacao = date.getUTCDate().toString();
    this.anoCotacao = date.getFullYear().toString();

    this.minDate = new Date(date.getFullYear() - 30, 0, 1);
    this.maxDate = date;
    this.startDate = date;

    this.realizaConsulta();
  }

  public novaConsulta() {
    this.diaCotacao = this.currentDate.value.getUTCDate().toString();
    this.mesCotacao = (this.currentDate.value.getUTCMonth() + 1).toString();
    this.anoCotacao = this.currentDate.value.getFullYear().toString();

    this.realizaConsulta();
  }

  private realizaConsulta() {
    this.dolarService.consultaDolarDia(this.diaCotacao, this.mesCotacao, this.anoCotacao);
  }

}
