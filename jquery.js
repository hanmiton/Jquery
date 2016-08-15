$ //es lo mismo que llmar a jqueyr
window.onload = function(){ //funcion que se ejecuta cuando se carag todo el DOM
//desventaja que puede demorarse mucho tiempo
}
//jquery es mucho mas conveniente usar la siguierne opcion a onload
$(document).ready(funcion(){//funcion que carga cuano el docuemtneo se a cargado mejor q onload
	alert('ready')// funcion que manda una alerta al browser
})
$().ready(function(){})//lo mismo que hacer con documetn
$(function(){})//lo mismo lo ejecuta cuando el documetno esta ready
//cuadno usamos con prototype
$.noConflict();
jQuery(document).ready(function($){
	$ //jQuery
})
$ //prototype fuera de jquery
///////
//Selectores jquery
document.getElementById('app-header')//selecionar element ocn vanilla javascipt
$('#app-header h1')//selecciona el h1 dentro de elemento id app-header
$('h1') //selecciona toods los h1
$('h1.title') //h1 con la clase title
$('h1 + h2') //todos los h2 hermanos de h1
/////seleccionar dentor de un contexto
var header = $('header'); //seleccion el elmento header
var title = $('h1', header); //seleccion h1 dentro de header(contexto) funcin('elemento', ctx)
//se devuelve difernte con javascript q con jquery
//javascript devuele un obejto del DOM
//JQUERY devuelve un JqueryObject
var header = $('header'); //seleccion el elmento header
var title = $('h1', header[0]); //seleccionar el primer  h1 dentro de header[0](contexto) funcin('elemento', ctx)
//pasando elemento de DOM a jquery
var header = document.getElementById('app-header');
var $header = $(header); //pasamdno elmento del DOMO A jquery object
//selectionana multiples
var headings = $('h1, h2');//selecioonand tanto h1 o h2
//enviando array
var sleccion = $([documetn, header]);
$(':input')//pseudoselectores (seleccionando input dentro de form <input>, <textarea>)
$(':selected')//seleccion ar todo los elemento suq ehaya sido selleccionados
$(':enabled') //selecciona todo los elmentos habilitados
$(':disabled') //elementos desabilitados
$(':text') //los de tipo text
$(':checkbox')//seleccionar todo los raido butoton
//JqueryObject
//El DOM y sus elementos(atritutos)
//un Jquery Object no es un array
//jquery
//compatibilidad
var target = document.getElementById("target");
$(target).html('<td>hello<b>world</b>!</td>'); añadienod html dentro de un elemnto lalamnod target
//conveniencia
//vanilla javascript
var target = document.getElementById('target');
var newElement = document.createElement('div'); //creando un lelemento ocn ajvacript
target.parentNode.insertBefore(newElement,target.nextSibling); //ponerlo dentro dle target
//jquery
var target = document.getElementById('target');
var newElement = document.createElement('div'); //creando un lelemento ocn ajvacript
$(target).after(newElement);//incluye el elemtno como un hermano


