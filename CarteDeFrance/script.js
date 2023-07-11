// Sélectionne tous les éléments SVG de la page
const elements = document.querySelectorAll('svg:not(svg *) *');

// Parcourt chaque élément SVG et ajoute un gestionnaire d'événement
elements.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    // Applique un style de surbrillance à l'élément survolé
    this.style.stroke = 'cyan';
    this.style.strokeWidth = '3px';
    this.style.fill = 'cyan';
	document.getElementById('data-region').style.width = "450px";
	document.getElementById('data-region').style.transition = "1s";
	depOver(this);

  });

  element.addEventListener('mouseout', function() {
    // Rétablit le style d'origine de l'élément lorsque la souris quitte
    this.style.stroke = '';
    this.style.strokeWidth = '';
    this.style.fill = '';
	document.getElementById('data-region').style.width = "0";
	while (dep.firstChild) {
		dep.removeChild(dep.firstChild);
	  }
  });
});


function initTooltip() {
	const tooltips = Array.from(document.querySelectorAll('[data-tooltip-container]'));

	tooltips.map(tooltip => {
		tooltip.addEventListener('mouseover', handleMouseOver);
	})

	function handleMouseOver() {
		const tooltipbox = createTooltipBox(this);

		handleMouseMove.tooltipbox = tooltipbox;
		this.addEventListener('mousemove', handleMouseMove);

		handleMouseLeave.tooltipbox = tooltipbox;
		handleMouseLeave.element = this;
		this.addEventListener('mouseleave', handleMouseLeave);
	}

	const handleMouseLeave = {
		handleEvent() {
			this.tooltipbox.remove();
			this.element.removeEventListener('mousemove', handleMouseMove);
			this.element.removeEventListener('mouseleave', handleMouseLeave);
		}
	}

	const handleMouseMove = {
		handleEvent(e) {
			this.tooltipbox.style.top = e.clientY + 25 + 'px';
			this.tooltipbox.style.left = e.clientX + 13 +'px';
		}
	}

	function createTooltipBox(el) {
		let tooltip = document.createElement('div');
		tooltip.innerText = el.getAttribute('data-nom');
		tooltip.classList.add('tooltip');

		document.body.appendChild(tooltip);
		
		return tooltip;
	}
}

initTooltip();

function depOver(element){
	let img = document.getElementById('img');
	console.log(element.getAttribute('data-nom'));
	document.getElementById('span-region').innerHTML = element.getAttribute('data-nom');
	switch(element.getAttribute('data-nom')){
		case 'Normandie':
			img.setAttribute("src","img/Normandie.png");
			document.getElementById('span-population').innerHTML = '3,319 millions';
			document.getElementById('span-superficie').innerHTML = '30 100 km²';
			document.getElementById('span-latitude').innerHTML = '49° 11\' 11\' nord';
			document.getElementById('span-longitude').innerHTML = '0° 21\' 10\' ouest';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Calvados(14)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Eure(27)';
				dep.appendChild(li2);

				var li3 = document.createElement('li');
				li3.textContent = 'Manche(50)';
				dep.appendChild(li3);

				var li4 = document.createElement('li');
				li4.textContent = 'Orne(61)';
				dep.appendChild(li4);

				var li5 = document.createElement('li');
				li5.textContent = 'Seine-Maritime(76)';
				dep.appendChild(li5);
			}
			break;
		case 'Hauts-de-France':
			img.setAttribute("src","img/HautsDeFrance.png");
			document.getElementById('span-population').innerHTML = '5,997 millions';
			document.getElementById('span-superficie').innerHTML = '31 806 km²';
			document.getElementById('span-latitude').innerHTML = '49° 55\' 14\' nord';
			document.getElementById('span-longitude').innerHTML = '2° 42\' 11\' est';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Aisne(02)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Nord(59)';
				dep.appendChild(li2);

				var li3 = document.createElement('li');
				li3.textContent = 'Oise(60)';
				dep.appendChild(li3);

				var li4 = document.createElement('li');
				li4.textContent = 'Pas-de-Calais(62)';
				dep.appendChild(li4);

				var li5 = document.createElement('li');
				li5.textContent = 'Somme(80)';
				dep.appendChild(li5);
			}
			break;
		case 'Bretagne':
			img.setAttribute("src","img/Bretagne.png");
			document.getElementById('span-population').innerHTML = '3,373 millions';
			document.getElementById('span-superficie').innerHTML = '27 209 km²';
			document.getElementById('span-latitude').innerHTML = '48° 07\' 19\' nord';
			document.getElementById('span-longitude').innerHTML = '2° 46\' 08\' ouest';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Côtes-d\'Armor(22)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Finistère(29)';
				dep.appendChild(li2);

				var li3 = document.createElement('li');
				li3.textContent = 'Ille-et-Vilaine(35)';
				dep.appendChild(li3);

				var li4 = document.createElement('li');
				li4.textContent = 'Morbihan(56)';
				dep.appendChild(li4);
			}
			break;
		case 'Grand Est':
			img.setAttribute("src","img/GrandEst.png");
			document.getElementById('span-population').innerHTML = '5,562 millions';
			document.getElementById('span-superficie').innerHTML = '57 441 km²';
			document.getElementById('span-latitude').innerHTML = '48° 35\' 56\' nord';
			document.getElementById('span-longitude').innerHTML = '7° 45\' 36\' est';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Ardennes(08)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Aube(10)';
				dep.appendChild(li2);

				var li3 = document.createElement('li');
				li3.textContent = 'Marne(51)';
				dep.appendChild(li3);

				var li4 = document.createElement('li');
				li4.textContent = 'Haute-Marne(52)';
				dep.appendChild(li4);

				var li5 = document.createElement('li');
				li5.textContent = 'Meurthe-et-Moselle(54)';
				dep.appendChild(li5);

				var li6 = document.createElement('li');
				li6.textContent = 'Meuse(55)';
				dep.appendChild(li6);

				var li7 = document.createElement('li');
				li7.textContent = 'Moselle(57)';
				dep.appendChild(li7);

				var li8 = document.createElement('li');
				li8.textContent = 'Collectivité européenne d\'Alsace(67/68)';
				dep.appendChild(li8);

				var li9 = document.createElement('li');
				li9.textContent = 'Vosges(88)';
				dep.appendChild(li9);
			}
			break;
		case 'Île-de-France':
			img.setAttribute("src","img/IleDeFrance.png");
			document.getElementById('span-population').innerHTML = '12,271 millions';
			document.getElementById('span-superficie').innerHTML = '12 011 km²';
			document.getElementById('span-latitude').innerHTML = '48° 51\' 08\' nord';
			document.getElementById('span-longitude').innerHTML = '2° 19\' 03\' est';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Paris(75)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Seine-et-Marne(77)';
				dep.appendChild(li2);

				var li3 = document.createElement('li');
				li3.textContent = 'Yvelines(78)';
				dep.appendChild(li3);

				var li4 = document.createElement('li');
				li4.textContent = 'Essonne(91)';
				dep.appendChild(li4);

				var li5 = document.createElement('li');
				li5.textContent = 'Hauts-de-Seine(92)';
				dep.appendChild(li5);

				var li6 = document.createElement('li');
				li6.textContent = 'Seine-Saint-Denis(93)';
				dep.appendChild(li6);

				var li7 = document.createElement('li');
				li7.textContent = 'Val-de-Marne(94)';
				dep.appendChild(li7);

				var li8 = document.createElement('li');
				li8.textContent = 'Val-d\'Oise(95)';
				dep.appendChild(li8);
			}
			break;
		case 'Bourgogne-Franche-Comté':
			img.setAttribute("src","img/BourgogneFrancheComte.png");
			document.getElementById('span-population').innerHTML = '2,801 millions';
			document.getElementById('span-superficie').innerHTML = '47 784 km²';
			document.getElementById('span-latitude').innerHTML = '47° 14\' 04\' nord';
			document.getElementById('span-longitude').innerHTML = '6° 01\' 50\' est';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Côte-d\'Or(21)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Doubs(25)';
				dep.appendChild(li2);

				var li3 = document.createElement('li');
				li3.textContent = 'Jura(39)';
				dep.appendChild(li3);

				var li4 = document.createElement('li');
				li4.textContent = 'Nièvre(58)';
				dep.appendChild(li4);

				var li5 = document.createElement('li');
				li5.textContent = 'Haute-Saône(70)';
				dep.appendChild(li5);

				var li6 = document.createElement('li');
				li6.textContent = 'Saône-et-Loire(71)';
				dep.appendChild(li6);

				var li7 = document.createElement('li');
				li7.textContent = 'Yonne(89)';
				dep.appendChild(li7);

				var li8 = document.createElement('li');
				li8.textContent = 'Territoire de Belfort(90)';
				dep.appendChild(li8);
			}
			break;
		case 'Centre-Val de Loire':
			img.setAttribute("src","img/CentreValDeLoire.png");
			document.getElementById('span-population').innerHTML = '2,574 millions';
			document.getElementById('span-superficie').innerHTML = '39 151 km²';
			document.getElementById('span-latitude').innerHTML = '47° 30\' nord';
			document.getElementById('span-longitude').innerHTML = '1° 45\' est';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Cher(18)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Eure-et-Loir(28)';
				dep.appendChild(li2);

				var li3 = document.createElement('li');
				li3.textContent = 'Indre(36)';
				dep.appendChild(li3);

				var li4 = document.createElement('li');
				li4.textContent = 'Indre-et-Loire(37)';
				dep.appendChild(li4);

				var li5 = document.createElement('li');
				li5.textContent = 'Loir-et-Cher(41)';
				dep.appendChild(li5);

				var li6 = document.createElement('li');
				li6.textContent = 'Loiret (45)';
				dep.appendChild(li6);
			}
			break;
		case 'Pays de la Loire':
			img.setAttribute("src","img/PaysDeLaLoire.png");
			document.getElementById('span-population').innerHTML = '3,832 millions';
			document.getElementById('span-superficie').innerHTML = '32 082 km²';
			document.getElementById('span-latitude').innerHTML = '47° 28\' nord';
			document.getElementById('span-longitude').innerHTML = '0° 50\' est';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Loire-Atlantique(44)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Maine-et-Loire(49)';
				dep.appendChild(li2);

				var li3 = document.createElement('li');
				li3.textContent = 'Mayenne(53)';
				dep.appendChild(li3);

				var li4 = document.createElement('li');
				li4.textContent = 'Sarthe(72)';
				dep.appendChild(li4);

				var li5 = document.createElement('li');
				li5.textContent = 'Vendée(85)';
				dep.appendChild(li5);
			}
			break;
		case 'Nouvelle-Aquitaine':
			img.setAttribute("src","img/NouvelleAquitaine.png");
			document.getElementById('span-population').innerHTML = '6,033 millions';
			document.getElementById('span-superficie').innerHTML = '84 036 km²';
			document.getElementById('span-latitude').innerHTML = '44° 50\' 12\' nord';
			document.getElementById('span-longitude').innerHTML = '0° 35\' 20\' ouest';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Charente(16)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Charente-Maritime(17)';
				dep.appendChild(li2);

				var li3 = document.createElement('li');
				li3.textContent = 'Corrèze(19)';
				dep.appendChild(li3);

				var li4 = document.createElement('li');
				li4.textContent = 'Creuse(23)';
				dep.appendChild(li4);

				var li5 = document.createElement('li');
				li5.textContent = 'Dordogne(24)';
				dep.appendChild(li5);

				var li6 = document.createElement('li');
				li6.textContent = 'Gironde(33)';
				dep.appendChild(li6);

				var li7 = document.createElement('li');
				li7.textContent = 'Landes(40)';
				dep.appendChild(li7);

				var li8 = document.createElement('li');
				li8.textContent = 'Lot-et-Garonne(47)';
				dep.appendChild(li8);

				var li9 = document.createElement('li');
				li9.textContent = 'Pyrénées-Atlantiques(64)';
				dep.appendChild(li9);

				var li10 = document.createElement('li');
				li10.textContent = 'Deux-Sèvres(79)';
				dep.appendChild(li10);

				var li11 = document.createElement('li');
				li11.textContent = 'Vienne(86)';
				dep.appendChild(li11);

				var li12 = document.createElement('li');
				li12.textContent = 'Haute-Vienne(87)';
				dep.appendChild(li12);
			}
			break;
		case 'Occitanie':
			img.setAttribute("src","img/Occitanie.png");
			document.getElementById('span-population').innerHTML = '5,973 millions';
			document.getElementById('span-superficie').innerHTML = '72 724 km²';
			document.getElementById('span-latitude').innerHTML = '43° 38\' 56\' nord';
			document.getElementById('span-longitude').innerHTML = '2° 20\' 37\' est';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Ariège(09)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Aude(11)';
				dep.appendChild(li2);

				var li3 = document.createElement('li');
				li3.textContent = 'Aveyron(12)';
				dep.appendChild(li3);

				var li4 = document.createElement('li');
				li4.textContent = 'Gard(30)';
				dep.appendChild(li4);

				var li5 = document.createElement('li');
				li5.textContent = 'Haute-Garonne(31)';
				dep.appendChild(li5);

				var li6 = document.createElement('li');
				li6.textContent = 'Gers(32)';
				dep.appendChild(li6);

				var li7 = document.createElement('li');
				li7.textContent = 'Hérault(34)';
				dep.appendChild(li7);

				var li8 = document.createElement('li');
				li8.textContent = 'Lot(46)';
				dep.appendChild(li8);

				var li9 = document.createElement('li');
				li9.textContent = 'Lozère(48)';
				dep.appendChild(li9);

				var li10 = document.createElement('li');
				li10.textContent = 'Hautes-Pyrénées(65)';
				dep.appendChild(li10);

				var li11 = document.createElement('li');
				li11.textContent = 'Pyrénées-Orientales(66)';
				dep.appendChild(li11);

				var li12 = document.createElement('li');
				li12.textContent = 'Tarn(81)';
				dep.appendChild(li12);

				var li13 = document.createElement('li');
				li13.textContent = 'Tarn-et-Garonne(82)';
				dep.appendChild(li13);
			}
			break;
		case 'Auvergne-Rhône-Alpes':
			img.setAttribute("src","img/AuvergneRhoneAlpes.png");
			document.getElementById('span-population').innerHTML = '8,078 millions';
			document.getElementById('span-superficie').innerHTML = '69 711 km²';
			document.getElementById('span-latitude').innerHTML = '45° 42\' 00\' nord';
			document.getElementById('span-longitude').innerHTML = '4° 48\' 00\' est';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Ain(01)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Allier(03)';
				dep.appendChild(li2);

				var li3 = document.createElement('li');
				li3.textContent = 'Ardèche(07)';
				dep.appendChild(li3);

				var li4 = document.createElement('li');
				li4.textContent = 'Cantal(15)';
				dep.appendChild(li4);

				var li5 = document.createElement('li');
				li5.textContent = 'Drôme(26)';
				dep.appendChild(li5);

				var li6 = document.createElement('li');
				li6.textContent = 'Isère(38)';
				dep.appendChild(li6);

				var li7 = document.createElement('li');
				li7.textContent = 'Loire(42)';
				dep.appendChild(li7);

				var li8 = document.createElement('li');
				li8.textContent = 'Haute-Loire(43)';
				dep.appendChild(li8);

				var li9 = document.createElement('li');
				li9.textContent = 'Puy-de-Dôme(63)';
				dep.appendChild(li9);

				var li10 = document.createElement('li');
				li10.textContent = 'Rhône(69D)';
				dep.appendChild(li10);

				var li11 = document.createElement('li');
				li11.textContent = 'Métropole de Lyon(69M)';
				dep.appendChild(li11);

				var li12 = document.createElement('li');
				li12.textContent = 'Savoie(73)';
				dep.appendChild(li12);

				var li13 = document.createElement('li');
				li13.textContent = 'Haute-Savoie(74)';
				dep.appendChild(li13);
			}
			break;
		case 'Provence-Alpes-Côte d\'Azur':
			img.setAttribute("src","img/ProvenceAlpesCoteAzur.png");
			document.getElementById('span-population').innerHTML = '5,098 millions';
			document.getElementById('span-superficie').innerHTML = '31 400 km²';
			document.getElementById('span-latitude').innerHTML = '44° nord';
			document.getElementById('span-longitude').innerHTML = '6° est';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Alpes-de-Haute-Provence(04)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Hautes-Alpes(05)';
				dep.appendChild(li2);

				var li3 = document.createElement('li');
				li3.textContent = 'Alpes-Maritimes(06)';
				dep.appendChild(li3);

				var li4 = document.createElement('li');
				li4.textContent = 'Bouches-du-Rhône(13)';
				dep.appendChild(li4);

				var li5 = document.createElement('li');
				li5.textContent = 'Var(83)';
				dep.appendChild(li5);

				var li6 = document.createElement('li');
				li6.textContent = 'Vaucluse(84)';
				dep.appendChild(li6);
			}
			break;
		case 'Corse':
			img.setAttribute("src","img/Corse.png");
			document.getElementById('span-population').innerHTML = '343 701';
			document.getElementById('span-superficie').innerHTML = '8 722 km²';
			document.getElementById('span-latitude').innerHTML = '42° 09\' 00\' nord';
			document.getElementById('span-longitude').innerHTML = '9° 05\' 00\' est';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Haute-Corse(2B)';
				dep.appendChild(li1);
		
				var li2 = document.createElement('li');
				li2.textContent = 'Corse-du-Sud(2A)';
				dep.appendChild(li2);
			}
			break;
		case 'Mayotte':
			img.setAttribute("src","img/Mayotte.png");
			document.getElementById('span-population').innerHTML = '310 022';
			document.getElementById('span-superficie').innerHTML = '376 km²';
			document.getElementById('span-latitude').innerHTML = '12° 50\' 35\' sud';
			document.getElementById('span-longitude').innerHTML = '45° 08\' 18\' est';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Département et région d’outre-mer';
				dep.appendChild(li1);
			}
			break;
		case 'La Réunion':
			img.setAttribute("src","img/LaReunion.png");
			document.getElementById('span-population').innerHTML = '863 083';
			document.getElementById('span-superficie').innerHTML = '2 512 km²';
			document.getElementById('span-latitude').innerHTML = '21° 06\' 52\' sud';
			document.getElementById('span-longitude').innerHTML = '55° 31\' 57\' est';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Département et région d’outre-mer';
				dep.appendChild(li1);
			}
			break;
		case 'Guyane':
			img.setAttribute("src","img/Guyane.png");
			document.getElementById('span-population').innerHTML = '285 133';
			document.getElementById('span-superficie').innerHTML = '83 846 km²';
			document.getElementById('span-latitude').innerHTML = '3° 59\' 56\' nord';
			document.getElementById('span-longitude').innerHTML = '53° 00\' 00\' ouest';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Département et région d’outre-mer';
				dep.appendChild(li1);
			}
			break;
		case 'Martinique':
			img.setAttribute("src","img/Martinique.png");
			document.getElementById('span-population').innerHTML = '361 225';
			document.getElementById('span-superficie').innerHTML = '1 128 km²';
			document.getElementById('span-latitude').innerHTML = '14° 39\' 00\' nord';
			document.getElementById('span-longitude').innerHTML = '61° 00\' 54\' ouest';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Département et région d’outre-mer';
				dep.appendChild(li1);
			}
			break;
		case 'Guadeloupe':
			img.setAttribute("src","img/Guadeloupe.png");
			document.getElementById('span-population').innerHTML = '383 559';
			document.getElementById('span-superficie').innerHTML = '1 628,43 km²';
			document.getElementById('span-latitude').innerHTML = '16° nord';
			document.getElementById('span-longitude').innerHTML = '62° ouest';
			if (dep.childElementCount === 0) {
				var li1 = document.createElement('li');
				li1.textContent = 'Département et région d’outre-mer';
				dep.appendChild(li1);
			}
			break;
	}
}