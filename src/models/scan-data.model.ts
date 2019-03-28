export class ScanData {
  info:string; // Esto sera todo lo que se lea del codigo QR - El resultado del SCAN
  tipo:string; // El tipo de QR, o es un mapa, tarjeta de persona etc.

  constructor(texto:string){
    this.tipo = 'No definido';
    this.info = texto;
    if (texto.startsWith('http')) { // Si lo estamos trabajando en el navegador web del computador.
      this.tipo = 'http';
    }
  }
}
