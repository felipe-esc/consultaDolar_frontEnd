import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ConsultaComponentComponent } from './component/consulta-component/consulta-component/consulta-component.component';
import { CotacaoComponentComponent } from './component/cotacao-component/cotacao-component/cotacao-component.component';
import { MainPageComponent } from './component/main-page-component/main-page/main-page.component';
import { ConsultaDolarService } from './service/consulta-dolar-service/consulta-dolar-service.service';
import { DataExibicaoPipePipe } from './pipe/data-exibicao-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponentComponent,
    CotacaoComponentComponent,
    MainPageComponent,
    DataExibicaoPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDatepickerModule,
    MatButtonModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    ConsultaDolarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
