import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController } from 'ionic-angular';
import { MapaPage } from '../../pages/index.paginas'


@Injectable()
export class HistorialProvider {
  //Definimos un arreglo vacio de variables de tipo ScanData
  private _historial:ScanData[] = [];

  constructor(private iab: InAppBrowser,
              private modalController: ModalController) {

  }

  // Funcion para agregar elementos al arreglo _historial:ScanData[]
  agregar_Historial(texto:string){ // regresamos la información de codigo QR
    let data = new ScanData(texto); // Hacemos una instancia al modelo scan-data igualando la información del QR a la variable data
    this._historial.unshift(data); // Agregamos la informacion de la data al arreglo de PRIMERO con el unshift
    console.log(this._historial);
    // Despues que escaneamos disparamos la funcion
    this.abrir_Scan(0); // Mandamos el 0 porque insertamos los registros de primero con el unshift y seria el objeto escaneado

  }

  // Abrir el scan
  abrir_Scan(index:number){ // Recibimos el index es decir la posicion del arrgelo del elemento que yo quiero abrir
    let scanData = this._historial[index]; // Obtenemos una posicion del arreglo historial a la variable scanData que contendra la info y el tipo
    console.log(scanData);

    switch (scanData.tipo) { // Que tipo es el objeto escaneado
      
      case 'http': //Si es una pagina HTTP
        this.iab.create(scanData.info, "_system"); //Mandamos la URL que la tenemos en el info de scanData
        break;
      case 'mapa': // 'mapa' esta definido en el scan-data.model.ts
        this.modalController.create(MapaPage, {coords: scanData.info}).present(); //Abriremos un modal cuando sea un mapa, mandamos como parametros las coordenadas del mapa (coords)
        break;
      default:
        console.log('tipo no soportado');
    }
  }

  // Lo unico que va hacer cargar el historial de los valores que tenga el objeto "_historial:ScanData[]"
  cargar_Historial(){
    return this._historial;
  }

}
