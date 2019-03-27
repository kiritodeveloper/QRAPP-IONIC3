import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController, Platform } from 'ionic-angular';
// Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// Servicios
import { HistorialProvider } from '../../providers/historial/historial';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform :Platform,
              private _historialProvider:HistorialProvider) {

  }

  scan(){
    console.log("realizando scan");
    if (!this.platform.is('cordova')){
      this._historialProvider.agregar_Historial("http://google.com");
      return;
    }
    this.barcodeScanner.scan().then(barcodeData => {
      // Si lo hace todo bien
      console.log('result', barcodeData.text);
      console.log('result', barcodeData.format);
      console.log('result', barcodeData.cancelled);

      // @ts-ignore
      if (barcodeData.cancelled == 0 && barcodeData.text != null){
        this._historialProvider.agregar_Historial(barcodeData.text);
      }

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
