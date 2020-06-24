import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PainelComponent } from './painel/painel.component';
import { FotoComponent } from './foto/foto.component';
import { SobreComponent } from './sobre/sobre.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    PainelComponent,
    FotoComponent,
    SobreComponent,
    ExperienciaComponent,
    FormacaoComponent,
    ObjetivoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
