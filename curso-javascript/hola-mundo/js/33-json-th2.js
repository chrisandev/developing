'use strict'

window.addEventListener('load', ()=>{

var game= { //Creacion de objeto JSON, 1 elemento
	title: 'Devil May Cry',
	year: 2000,
	developer: 'Capcom'
}

var games=[ //Array con 2 elementos JSON
{title: 'Sonic', year: 1999, developer: 'Sega'}, game
]

console.log(games);

var box= document.querySelector('.box');

for(let index in games){
	let p= document.createElement('p');
	p.append(games[index].title+'-'+games[index].developer);
	box.append(p);
}

});