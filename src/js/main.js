btnCalculo = document.querySelector("button");

btnCalculo.onclick = function () {
    var inputsElements = document.querySelectorAll("input");

    var horasDiarias = parseFloat(inputsElements[0].value);
    var diasEfetivos = parseInt(inputsElements[1].value);
    var diasFerias = parseInt(inputsElements[2].value);
    var valorProjeto = parseFloat(inputsElements[3].value);

    var valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias)) + ((diasFerias * diasEfetivos * horasDiarias))
    var elementResult = document.querySelector("h1#result");

    if (isNaN(valorHora)){
        valorHora = 0;
    }

    if (elementResult.firstChild !== null) {
        elementResult.removeChild(elementResult.firstChild);
    }
    elementResult.appendChild(document.createTextNode("A hora vale: R$" + valorHora.toFixed(2)));
    elementResult.classList.add("animated", "animatedFadeInUp", "fadeInUp");

    window.scrollTo(0, 1000);
};


function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }


