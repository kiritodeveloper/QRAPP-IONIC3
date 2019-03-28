# Aplicación de QR

Aplicación realizada en Ionic 3, recuerden instalar los paquetes de node `npm install`

# NOTAS

App de lector de QR para:
* Abrir desde un QR un navegador WEB
* Abrir desde un QR un mapa con "x" ubicación
* Abrir desde un QR una tarjeta de contacto y guardarla en el telefono
* Abrir desde un QR el correo para enviar los datos.

Puede hacer debug desde el navegador sin que esta colapse por los plugin de cordova esto gracias al platform

Para probarlos en el dispositivo

`ionic platform add ios`

`ionic platform add Android`

Luego:

`ionic build ios`

`ionic build android`

Luego abran xcode o android studio con el proyecto adentro de la carpeta platform y lo prueban en su dispositivo
esto con el fin de que puedan ver los mensajes de depuración en consola.
