import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController, Platform } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform :Platform) {

  }

  scan(){
    console.log("realizando scan");
    if (!this.platform.is('cordova')){

      return
    }
    this.barcodeScanner.scan().then(barcodeData => {
      // Si lo hace todo bien
      console.log('result', barcodeData.text);
      console.log('result', barcodeData.format);
      console.log('result', barcodeData.cancelled);
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
