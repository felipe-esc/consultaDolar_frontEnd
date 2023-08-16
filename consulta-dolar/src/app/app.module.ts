import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsultaComponentComponent } from './component/consulta-component/consulta-component/consulta-component.component';
import { CotacaoComponentComponent } from './component/cotacao-component/cotacao-component/cotacao-component.component';
import { MainPageComponent } from './components/main-page-component/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponentComponent,
    CotacaoComponentComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
