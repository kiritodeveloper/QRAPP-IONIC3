export class ScanData {
  info:string; // Esto sera todo lo que se lea del codigo QR
  tipo:string; // El tipo de QR, o es un mapa, tarjeta de persona etc.

  constructor(texto:string){
    this.tipo = 'No definido';
    this.info = texto;
    if (texto.startsWith('http')) {
      this.tipo = 'http';
    }
  }
}
