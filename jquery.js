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
//events y callbacks
//funciones son objetos
//callbacks
	//son funciones vamos a passar por parametro
	//funciones que reciben como parametros otra funcion (en algun mometno se va utilizar)
	//funciones anonimas que no tienen nombre
function suam(num1,num2){
	return num1+num2;
}
function resta(num1,num2){
	return num1-num2;
}
function division(num1,num2){
	return num1/num2;
}
function multiplicacion(num1,num2){
	return num1*num2;
}
//cuenta seria la fucnino que se envia como parametro a calculadroa que puede ser cualqueira de las anteriores
function calculadora(cuenta,num1,num2){
	return cuenta(num1,num2);
}
//callbacks asincronicos
	//en algun momento se va terminar ejecutando
	//se peude pasar funciones con parametos pra cambiar la funcionalidad de dicha funcion
//eventos
//vanilla javascirpt
	var button = document.getElementById('myButton');
	button.addEventListener('click', function(event){
		alert('Me hicieron click!');
	})
	//event viene con:
		//que elemento se dio click y mas
//jqeury lo msio con addEventListenre
$('butotn').click(function(){
	alert('me hicieorn click');
})
$('button').on('click', function(){
	alert('me hicieiron click');
})
///
$('.product button.like').click(function(ev){//seleccion botones con like dentro de product
	$(this)//remina siendo cada uno de los botones seleccionados
		.closest('.product')//buscar jerarquia mas arriba
		.addClass('liked') //le añade la clse like
});

$('input').on("click change", function(){//multiples eventos click o cambiar texto
	console.log("me hicieorn click o me camiaron el texto")
})
//los jqueryobject solo ese momento
//bind cuando se le da un evento a una funcion
$('p').on({
	'click': function(){console.log("me hicieorn click");},
	'mouseover': function(){console.log("me pasaron el mose pro encima");}
})
//browser Events
.resize()
.scroll()
//documento loading
.ready()
//Event handker attachment
//bind o unbind
.off()//sacar evento 
.on()//añadir envento
//Event Objet
	//llega por parametro con jquery es ocmoun a otdo los browser
//form events
	.blur()
	.change()
	.focus()
	.select()
	.submit()
//keyboard events
	.focusin()
	.focusout()
	.keydown()
	.keypress()
	.keyup()
//cuanod queremos sacar eventos de una funciton callback que esa bindianda
$('p').off('click');//sacando click event de los p
//ejemplo
var foo = function(){console.log('foo');};
var bar = function (){console.log('bar');};

$('p').on('click',foo).on('click',bar);
$('p').off('click',bar);
//jquery namespaces
	//separa event handlers con otro event ahndler defina usuairo
//event form jquery
	$('form').on('submit',function(event){
		event.preventDefault();//prevenir que el form haga post
		console.log(event);
		var action $(this).attr('action');
		//hacer el request
		$.ajax(action,{.........})
	})	;
//propagacin de eventos
$('#list').on('click', 'a', function(event){
	event.preventDefault();
	console.log($(this).text()); 
//trigger
$('#myButton').trigger('click');
$('#myButton').click()
})
//dos fomras de hacer submit
//boton o tecla enter

$('#app-body')//selecciona elemento con id app-body
	.find('form')//se filtra y busca form
	.submit(function (ev){ //evento submmit con callback funcion anonima
		ev.preventDefault(); //evita haga post no se recarga la pagina
		console.log('se hizo submit')
})

//explicacion de this
$(function(){
	$('#app-body')
		.find('form')
		.submit(function(ev){
			ev.preventDefault();
			console.log(this); //this viene a ser el form seleccion form del DOM
			$(this)//se transforma this dom en jqueryobject
			$(this).find('input[type='text']'); //sobre jquery object se puede realizar las operaciones de filtrado
			.val(); //devuelve el palor del input
		})
		console.log(this);//this viene a ser el domenot qu ea cargado jquery objeto dom
})
console.log(this); //this viene siendo windows	

//requesst tipo Ajax
$.ajax({
	url: 'http://api.tvmaze.com/shows',//url dentro dle objeto o puede ir como priemr prametnor de la funcion
	success: function(data,textstatus, xhr){//succes ucando la peticion a sido exitosa (data,status,xhr)
		console.log(data);//impriendo la data en consola
		data.forEach(function(show){//forEach funcino que todo arreglo tiene y permite ejecutar una funcion por cada eelemento
			var article = template //asigango string a una var cambiando tempalte string
			 .replace(':name:',show.name) //replace funcion que teien todo string dentro de javascript
			 .replace(':img:',show.image.medium)
			 .replace(':summary',show.summary)
			 .replace(':img alt:',show.name + "Logo");
			$('#app-body')
				.find('.tv-shows')
				.append($(article))	//insertando jqueyrobjetc a tvshows

		})
	}

}) //funciones puedne teneer metoso y porpiedades
//request de tipo get por default
var template = '<artticle>:name:</article>' //string tamble con variable name

//mejrondao codigo
$.ajax({
	url: 'http://api.tvmaze.com/shows',//url dentro dle objeto o puede ir como priemr prametnor de la funcion
	success: function(data,textstatus, xhr){//succes ucando la peticion a sido exitosa (data,status,xhr)
		console.log(data);//impriendo la data en consola
		var $tvShowsContainer = $('#app-body').find('.tv-shows');
		$tvShowsContainer.find('.loader').remove();//removiendo un elmento de un jqeuryobject
		data.forEach(function(show){//forEach funcino que todo arreglo tiene y permite ejecutar una funcion por cada eelemento
			var article = template
			 .replace(':name:',show.name)
			 .replace(':img:',show.image.medium)
			 .replace(':summary',show.summary)
			 .replace(':img alt:',show.name + "Logo");
			var $article= $(article); //transfomando a jqueyrobjetc
			$article.hide();//ocultando elementos ocn jqueyr
			$tvShowsContainer.append($(article))	

		})
	}

})

//peticion por id
$(function(){
	$('#app-body')
		.find('form')
		.submit(function(ev){
			ev.preventDefault();
			var busqueda = $(this)
				.find('input[type="text"]')
				.val();
			$.ajax({
				url: '............'
				data:{ q: busqueda},//enviando parametros peticion get
				success: function(res,textstatus,xhr){
					%tvShowsContainer.find('tv.show').remove();//removidno tood los metodos
					res.map(function(el){//funcion map permite devolver otro arreglo pero modificado con la function callback
						return el.show;
					}).forEach(function(show){//toma la respuesta y realiza uan funcion por cada una 
						rendershows()
					}//function que tiene los array modifica un arrayy la ejecota por cada elemento
				}
			})
		})
		console.log(this);//this viene a ser el domenot qu ea cargado jquery objeto dom
})
console.log(this); //this viene siendo windows	

//promise	
	//solucinando callback hell anidacion de callbacks
	//tiene 3 estasod
		//pendiend
		//finalizado
		//error
	//encadenar co metodo then encadenar 
$.ajax('http://api.tvmaze.com/shows')
.then(function(shows){//en vez de succes usamod then
	$tvShowsContainer.find('.loader').remove();
	renderShows(shows);
})

//localStrorage se grava en strings

localStrorage.shows = JSON.stingigy(shows); //llamamos s local estroega y transofrmamos json a string
renderShows(JSON.parse(localStrorage.shows); //pasando de strgin a json 
//como ahcer una peticon ajax dentro de otra ajax
$.ajax('http://api.tvmaze.com/shows')
	.then(function(shows){
		$.ajax('http://api.tvmaze.com/shows/'+ shows[0].id)
	})

show.image ? show.image.medium : ''//if de una sola linea
(Condicion) ? true : false <--- Eso se llama Operador Ternario.

//Ajax
	//Se puede implementar con jquery
	//Fecth para poder realziar peticiones ajax
	//superagent implementra request
//polyfill
	//cuanod el browser no tiene dicha funcionalidad la agrega

//Animaciones
	fadain('fast') 200 milisegundos
	fadein('slow') 600 milisegunndos
	fadeout()
	fadein(1000) dato en milisegundos
//metodo burbuejo
//si hace click en un hijo se ahce burbujero para añdir unclase a un padre
	$tvShowsContainer.on('click', 'button.like',function(){
		var $this = $(this);
		//primera manera de animacion
		$this.animate({ 
			'fontSize': '30px'
		}, 'fast');
		//segunda forma de animar
		$this.closest('.tv-show').toogleClass('liked');//funcion que busca al padre que cumpla ocn dicha condicion
//añadiendo dependencias de fornend ocn npm 
//verionado de proyectos
^MAJOR.MINOR.PATCH
//major: cuando se hacen cambios incompatibles
//agregamos funcinalidad a la funcionalidad pero sigue tood siendo compatible
//para arreglar bugs
//^ultima version compatible con el major
npm install --save jquery
//browserify
	//permite requerir modulos dentro de nuestro proyecto (dev)
	//devuelve un bundle
npm install --save-dev browserify
//añadieonod script
//package json
	"scripts": {
		"build-js": "browserify index.js app.js"//corriend comaondo de browserify
	}
var $ = require('jquery');//cuando se usa browserify
//Ecscirpt2015 es lo que especifica el nucelo dle lenguaje
//Babel transpilador de 2015 a es2005 corre en todos los browser
npm install --save-dev babelify babel-preset-es20105
//es2015
import $ form 'jquery';
//mkdir -p public (crea la carpeta y si ya esxite la deja)
//cp index.css public/app.css && cp index.html public/index.html
//Db.store es un archivo que genera mac y toca ignorar
//realizacion deimport
//simpre poner index.js ya que es el archivo que se requeire por defercto
import $ from 'jquery'
//exportar una funcionalidad del modulo
export function getShows(fn){ //recibiendo funcion por parametro fn
	$.ajax('http://api.tvmaze.com/shows',{
		success: function(shows, textStatus,xhr){
			fn(shows);
		}
	})
}

export function  searchShows(busqeuda,fn){
	$.ajax('http://api.tvmze.com/search/shows',{
		data: busqueda,
		success: function(res,textstatus,xhr){
			fn(res)
		}
	})
}

//usando page.js
import page from 'page';
//midleware funciones clalback que se encadena y van entre la solicitud y la recepcion del request
import {getShows} from 'src/tvmaze-api-client';
page('/', function(ctx, next){

})

page()//con esto activamos page y empieza a escuchar
n
//uso de tempalte string
page(`/search?q=${busqueda}`)//${podmeos sali de stirng y porner variables}

//usando qs
	//qs.parse(ctx.querystring)
www.uxpin.com //link para parender y libros gratis
//url para el uso de bable
//LEER IMPORTANTE

//comparacion jquery vs vanilla javascirpt
https://platzi.com/clases/javascript-jquery/concepto/complementos-del-curso4947/guida-completa-sobre-ecmascript-6/material/