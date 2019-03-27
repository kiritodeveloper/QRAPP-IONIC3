import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              public toastCtrl: ToastController) {

  }

  scan(){
    console.log("realizando scan");
    this.barcodeScanner.scan().then(barcodeData => {
      // Si lo hace todo bien
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.error('Error', err);
      this.mostrarError('error: ' + err);
    });
  }

  mostrarError(mensaje:string){
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
