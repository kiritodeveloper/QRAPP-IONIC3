import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';
import { ScanData } from '../../models/scan-data.model';

@IonicPage()
@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial: ScanData[] = [];

  constructor(private _historialProvider:HistorialProvider) {
  }

  ionViewDidLoad() {
    this.historial = this._historialProvider.cargar_Historial();
  }

  abrir_Scan(index:number){ // abrimos cualquier cosa que le demos click en el
    this._historialProvider.abrir_Scan(index);
  }

}
