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

$('header[data-title="tvfy"]'); //selecioan un header ocn dicho atributo y valor
//primero acdeder al elemnto con id  y despues refinar
$('#app-header').find('h1');//refinando busqueda
$('#app.header').has('h1');//todos los header que tengan(has)
$('p').filter('.text')//filtrando por clase text
$('p').not('.text')//todos los pque no tengan clase text
//encadenameinto de filtros
$('p')
	.filter('.text')
	.has('a')
	.first()
//segundo
.eq(1)//selecioannda segundo elemento
//si ya se ieten hecha la seleccion es mas conveniente usar esa que tenemos
//si se desea acutalizar se deber ahcer la misa seleccion
ps= ps.add(p)//añadir elementos dentro de otros que ya estan preseleccionados
document.body.appendChild(p)//añadir un elelmnto como hijo
//creando elemtno con jqueyr
var a = $('<a>', { //especificando tipo de etiqueta a crear
	href: 'htt..........',//hred de etiqueta a
	traget: '_blank',//target eitqueta a
	html: 'ir a platzi' //html cotendio dentor de a
})
$('#app-body').append(a);//añadienod a a elemento con id app-body
//manipular atribuso html jquery objtec
a.attr('href')//getter consiguiend attr de un elemento
a.attr('href', 'www.google.com') //setter modifica o pone attr dentro de atributo
//encademaneindo de metodos
a
	.attr('href','www.googe.com')
	.attr('html','ir a google')
//enviado objetos
a.
	attr({
		href: 'http......',
		html: 'ir a google'
	})
//Setters attr pasamos valores
	//operan sobre todos los elementos de la seleccion
//getter seleccion multipe
	//opera sobre el primer elemnto no mas
//añadieno claes
$('h1').addClass('danger');//añadir una clase a un elemnto
$('h1').removeClass('danger');//quietando clase a un elemlnto
$('h1').toggleClass('danger')//si tiene se la queita, no la tiene la añade
//imporntate: cuando se ahce 2 selecciones sobre el mismo elemento conviene haccer la seleccion con anterioridad
//antepoder $ a jqeury objets
var $h1 = $('h1'); 
var $h1b = $('h1');
$h1===$h1b //no son iguales
$h1[0]==$h1b[0] //son giuales por qu ahce referencia al objeto del DOM
//manipular css
$('h1').css({
	'font-size': '70px'
})
//manipulacion del dom
$('p').append($('<p>', {html : 'me acaban de crear'}))//intorduciendo un elemnto creaod dentro de otro

//clousure
var name = 'Sacha';

function aleta(){
	alert('Hola'+name);
}
 alerta();

 //Serializar 
 //es como hacer una gran cadena pra enviar mas facil los datos
 //Prototype(funcioens o atributos)
 //obteneindo ejempo a
 <ul id="menu">
 	<li>
 		<a href="......">
 	</li>
 </ul>
//seleccionando href de a
 $('#menu')
 	.find('a')
 	.eq(0)
 	.atrr('href');
//diferente
$('#menu li a').eq(0).attr('href');
