// Adding all the HTML Elements in a NodeList
var htmlElementsOfWholeDocument = document.querySelectorAll("*");

function addCssProperty(propertyNameAsAttribute, propertyNameAsCss) {

	htmlElementsOfWholeDocument.forEach( (el) => {
		if ( value = el.getAttribute(propertyNameAsAttribute) ) {
			el.style[propertyNameAsCss] = value;
		}
	} );
}

addCssProperty("text-color", "color");
addCssProperty("background-color", "background-color");
