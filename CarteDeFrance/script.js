// Sélectionne tous les éléments SVG de la page
const elements = document.querySelectorAll('svg *');

// Parcourt chaque élément SVG et ajoute un gestionnaire d'événement
elements.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    // Applique un style de surbrillance à l'élément survolé
    this.style.stroke = 'cyan';
    this.style.strokeWidth = '3px';
    this.style.fill = 'cyan';
  });

  element.addEventListener('mouseout', function() {
    // Rétablit le style d'origine de l'élément lorsque la souris quitte
    this.style.stroke = '';
    this.style.strokeWidth = '';
    this.style.fill = '';
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