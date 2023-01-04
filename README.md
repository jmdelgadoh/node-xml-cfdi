# @munyaal/cfdi

Esta es una librería para crear y sellar archivos xml para un CFDi 4.0

## Características

- Construcción fácil del comprobante a través de objetos tomando de base la documentación del [Anexo 20](http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm)
- Generación de cadena original
- Sellado del comprobante haciendo uso los archivos .csd y .key del emisor
- Guardar los documentos en el directorio de preferencia

## Requisitos

Esta librería está pensada para ser usada en un entorno back end, dicho entorno debe contar con lo siguiente.

- Instalación de OpenSSL 3.0.7
  - [Instrucciones para Windows 10/11](https://www.youtube.com/watch?v=cBa87N_BZ4s)
  - [Instrucciones para Ubuntu 20/22](https://learnubuntu.com/install-openssl/)
  - [Instrucciones para macOS 20/22](https://ports.macports.org/port/openssl/) (no probado)
  - Es importante comprobar su instalación
- Descarga y almacena los archivos xslt
  - [Descargar](https://www.mediafire.com/file/cwc1yvnpnfv6eq6/xslt.zip/file)
- Debes contar con los siguientes archivos del emisor
  - Certificado CSD (.csd)
  - Llave de seguridad (.key)
  - Contraseña
  - [Documentación](https://www.gob.mx/sat/acciones-y-programas/certificado-de-sello-digital)

## Instalación

```
npm i @munyaal/cfdi
```

## Uso

El uso de esta librería se podría resumir en los siguientes pasos.

- Configuración del servicio
- Creación del comprobante
- Sellar y generar xml

### Configuración del servicio

Pendientes . . .

### Creación del comprobante

Pendientes . . .

### Sellar y generar xml

Pendientes . . .
