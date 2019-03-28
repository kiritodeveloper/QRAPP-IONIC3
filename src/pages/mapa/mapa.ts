import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import {root} from "rxjs/util/root";
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  lat: number;
  lng: number;

  constructor(public navParams: NavParams,
              private viewController: ViewController) {
    // this.lat = 51.678418;
    // this.lng = 7.809007;

    //Obtenemos la lat y lng que viene desde google maps dinamicamente
    let coordsArray = this.navParams.get('coords').split(","); // Separamos la lat y la lng
    this.lat = Number(coordsArray[0].replace("geo:","")); // en la posicion 0 la lat se antepone la palabra "geo:" que la tenemos que quitar para que quede el valor numerico
    this.lng = Number(coordsArray[1]); // Obtenemos la lng de la posicion 1 del coordsArray
    console.log(this.lat, this.lng);
    //NOTA: el plugin de mapas necesita un valor numerico si o si por eso convertimos con "Number" la lat y la lng
  }

  cerrar_Modal(){ // Para cerrar el modal necesitamos el viewcontroller porque no lo estamos abriendo con el navcontroller
    this.viewController.dismiss();
  }

}
