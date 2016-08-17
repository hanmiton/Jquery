//jquery2
.done(function(results){//cuando una funcino asincrona se a completado 
	var characteres= results.data.result[0].charaters.items;	
	debugger
})
//promises
	//estados
		//pending (pendiente
		//resoved 
		//rejected
//promeise neuvo estandar con jquery
Promise.resolve($.get(url))
.then(function(results){
	var characters = results.data.results[0].characters.timtes
	Promise.resolve.($.get(characters[0].resourceURI))
})
.then(function(){
	debugger
})
.catch(function(err){
	console.error(err)
})

//arreglo de poromesas
Promise.all([])//promesa que espera que se resulva todas las pormesas que se encutnra dentor d eun arreglo
.filter//funcion qeu gurada en otor arreglo todos lo que son true(cumple ocndiciones
! convirete ne lo contraio
!! convierte en lo mismo peor en true or false (null undifined
)
)
//stylus
//usando ellipsis de nig para truncar
 overflow(ellipsis)//oculta el texto que no da en l a caja
 //latenica /tienpo q se tarda en devolvwr un dato
  //memoria ram lom as rapido (cache mas rapido)
  //discos rigidos
  //discos externos
  //red 	
  //localstorage datos q no cambiaran
  //lodash funcines q facilitan trabajr ocn javascript

  //evnetos
  //son funciones que se llaman cuando pasa algos
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
--Merjodan do la performance d ejquery
<!DOCTYPE html>
<ul id"lenguajes">
</ul>
//se tran te de interactuar lo menos posbile con el DOM
//perfomrance 
var lenguajes = [
	"php",
	"c#",
	"c",
	"c++",
	"javascript",
	"ruby",
	"python"
]
//se interactua mucho con el DOM
$.each(lenguajes, function(i,item){//realiza una funcion por cada elemento de lengujes
	var newListItem = "<li>" + item + "</li>" //crando elemento de tipo item
	newListItem.appendTo('#lenguajes');//añadiendo cada li a lelemento lenguejs
}
//slectore jquery son los mismo selectores que css
var abuelo = $('#abuelo');
var padre = abuelo.find('.padre'); 
var hijos = padre.find('p.hijo');
alert(hijos.html());//solo se imprime el primer elemento por q es un getter con eseptcion 
hijos.eq(2).addClass('favorito');//seleccionan elemento 3 y añadienod clase favorito

//uso de tipso desde npm
	//carte pequño que sale cuanod se hace hover sober algun elemento
data-tipso="lo que se ve de tipso"//dentro de html
npm install --save tipso
	$('.title-tipso').tipso();
//
maneoj con browserify parcelify
//optimizando uso de jquery 
//parcelify plugin de browserify para manejar los estilos
//dependencias de desarrollo
-p //para uso de plugind scrpits 
//dentro de packagem manager
"styles":[
	"./node_modules/tiposo/src/tipso.css"
]


Babel.js es un transpiler que permite convertir código de ECMAScript 6 a código compatible con la mayoría de navegadores modernos.
sudo npm i -g babel
babel archivo.js -o build.js
babel-node archivo.js
---Usandolo con Browserify
 Babelify
 [sudo] npm i -D browserify babelify
 browserify -t babelify -i src/main.jsx -o build/main.js
 ---gulp 
  gulp-babel
  var gulp  = require('gulp');
var babel = require('gulp-babel');

gulp.task('js', function () {
  gulp.src('/src/es6/*.js')
    .pipe(babel())
    .pipe(gulp.dest('/build/js/'));
});
Usandolo con Nodemon
	nodemon --exec babel-node -- server.js
Usandolo con Mocha
	mocha --compilers js:babel/register
--caracteristicas de es06
let en vez de var
const en lugar de let o var. 
Template strings
	 strings con variables
	 ${ y } o operaciones

Strings multilínea
	
let mensaje = `Hola Don Pepito
Hola Don Jose`;
console.log(mensaje);

Números en Octal
	console.log(0o35);

Números en Binario
	console.log(0b1001);
Objeto Math
	acosh().
	asinh().
	atanh().
	cbrt().
	clz32().
	cosh().
	exp1m().
	fround().
	hypot().
	imul().
	log10().
Métodos de Arrays

Array.from(array, mapFn)

Este nuevo método del objeto Array permite crear un array copiando otro array o un NodeList.Es posible utilizarlos actualmente mediante polyfills.

let arr1 = [1,2,3];
let arr2 = Array.from(arr1, v => --v; );
arr2.push(3);
console.log(arr1);
console.log(arr2);

Otros métodos
Además de .from() se agregaron los siguientes métodos:

.of(): crea un nuevo array con un número variado de elementos
.fill(): llena un array con un nuevo valor en cada elemento
.find(): busca un elemento dentro de un array y devuelve el valor
.findIndex(): similar a .find() pero devuelve el índice
.entries(): devuelve una instancia del objeto Iterator que contiene cada índice y valor del array
.keys(): similar a .entries() pero el Iterator solo muestra los índices
.copyWithin(): copia los elementos de un array en las posiciones indicadas

Asignación de propiedades
	let nombre  = 'Jose';
	let persona = {
	  nombre,
	  honorifico: 'Don'
	};
	console.log(persona);
Asignación de métodos
	let pepito = {
		  saludar(persona) {
		    return `Hola ${persona.honorifico} ${persona.nombre}`;
		  }
		}
		console.log(pepito.saludar({ nombre:'Jose', honorifico:'Don' }));
Asignación por descomposición
// objetos
let persona = {
  nombre: 'Jose',
  honorifico: 'Don'
};

let { nombre, honorifico: titulo } = persona;
console.log(nombre);
console.log(titulo);

// arrays
let fecha    = [24, 4, 2015];
let [d, , y] = fecha;
console.log(d);
console.log(y);

Parámetros por defecto
function saludar (nombre, honorifico = 'Don') {
  return `Hola ${honorifico} ${nombre}`;
}
console.log(saludar('Pepito', 'Don'));
console.log(saludar('Jose'));
Arrow functions
let sumarUno = x => x + 1;
console.log(sumarUno(23));
--varios parametros
let sumar = (x, y = 1) => x + y;
console.log(sumar(1264, 751));
console.log(sumar(3));
--sin parametros
let saludar = () => 'Hola Don Pepito'
console.log(saludar());
--con cuerpo
let saludar = persona => {
  let { nombre, honorifico } = persona;
  let mensaje = `Hola ${honorifico} ${nombre}`;
  return mensaje;
}
console.log(saludar({ nombre: 'Pepito', honorifico: 'Don' }));

Promesas
function obtenerDatos () {
  return new Promise((resolve, reject) => {
    let n = Math.floor(Math.random() * 2) + 1;

    setTimeout(() => {
      if (n === 1) resolve('Datos obtenidos');
      else reject(new Error('Hubo un error al obtener los datos'))
    }, 500);
  });
}

obtenerDatos()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });


Generadores
function* fibonacci() {
  let anterior = 0, actual = 1;
  while(true) {
    let temp = anterior;
    anterior = actual;
    actual  += temp;
    yield actual;
  }
}

let fibo = fibonacci();

for (let i = 0; i < 5; i++) {
  console.log(fibo.next());
}
terators y for...of
Iterators

Los Iterators son un tipo de objeto que nos permite iterarlos usando el método .next() (los generadores son instancias de Iterator).


let arr  = ['foo','bar','baz'];

let eArr = arr.entries();

console.log(eArr.next());
console.log(eArr.next());
console.log(eArr.next());
console.log(eArr.next());
//guia pra es06
https://platzi.com/clases/javascript-jquery/concepto/complementos-del-curso4947/guida-completa-sobre-ecmascript-6/material/

let arr = [1,2,3];

for (let n of arr) {
  console.log(n);
}	
Definición de clase
Para definir una clase simplemente se usa la palabra class seguida del nombre de la clase y luego entre llaves los métodos de esta.

class Persona{
  constructor(nombre) {
    this.honorifico = 'Don';
    this.nombre = nombre;
  }
  saludar(persona) {
    return `Hola ${persona.honorifico} ${persona.nombre}`;
  }
}

let Pepito = new Persona('Pepito');
let Jose   = new Persona('Jose');


Extendiendo una clase
Métodos estáticos
También es posible definir métodos estáticos que se pueden ejecutar sin necesidad de instanciar la clase simplemente agregando static antes del nombre del método (el método constructor no puede ser estático).

class Persona {
  constructor(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevo) {
    this._nombre = nuevo;
  }
}

let Pepito = new Persona('Pepito');
console.log(Pepito.nombre);
Pepito.nombre = 'Don Pepito';
console.log(Pepito.nombre);
Exportación única
class Persona {
  constructor(nombre) {
    this.honorifico = 'Don';
    this.nombre     = nombre;
  }
  saludar(persona) {
    return `Hola ${persona.honorifico} ${persona.nombre}`;
  }
}

export default Persona;

Map
Los Map son un tipo de estructura de datos que permite relacionar dos datos arbitrarios entre sí y poder fácilmente acceder a ellos.

var myHtml = ""; //crando varibal string vacia
$.each(lenguajes, function(i,item){
	myHtml +="<li class="\lenguajes\"> +item+ "</li>";//añadiendo cada li de lenguejes a variable string
}
$('#lenguajes').html(myHtml);añdiendo html dentro de lenguejes( solo se interactua una vez con el DOM


//
var lengujes = $('#lengujes');
var listItems = lenguajes.find('li');
var length = lisItems.length//cacheando variabl epra no llmar cada vez dentor del for 
for (var i = 0; i< listItems.length; i++){//se pregunta cada ver por listItems.length mejor cambiarlo con una varible fija
	//algo completo con cada listItems
}

var parent = lenguajes.parent();
lenguajes.detach();//funcion saca dle dom pero sin sacar los handler que tenia este elmento (click)
//modificamos lenguajes
parent.append(lenguajes);//regresamos elmento con los handlers que tenia 

//operar ocn elemneto que no sabes is estan en el dom

lenguajes.slideUp();
https://platzi.com/clases/javascript-jquery/concepto/complementos-del-curso4947/guida-completa-sobre-ecmascript-6/material/


//FAKSE VAKYES
''
null
undefined
NaN

//crawlers robotitos de google q tratan de indexar paginas