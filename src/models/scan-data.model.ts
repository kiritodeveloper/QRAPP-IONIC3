export class ScanData {
  info:string; // Esto sera todo lo que se lea del codigo QR
  tipo:string // El tipo de QR, o es un mapa, tarjeta de persona etc.

  constructor(tipoArchivo:string){
    this.tipo = tipoArchivo;
  }
}
