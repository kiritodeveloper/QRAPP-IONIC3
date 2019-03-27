import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model';

@Injectable()
export class HistorialProvider {

  private _historial:ScanData[] = [];

  constructor() {

  }

  agregar_Historial(texto:string){ // regresamos la información de codigo QR
    let data = new ScanData(texto);
    this._historial.unshift(data); // Agregamos la informacion de la data al arreglo de PRIMERO con el unshift
    console.log(this._historial);
  }

  cargar_Historial(){
    return this._historial;
  }

}
