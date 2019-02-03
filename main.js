var ul = document.querySelector('ul');

// this part is for add note and add ++Add items
document.getElementById('add-btn').addEventListener('click', function(e) {
    e.preventDefault();

    var addInput = document.getElementById('add-input');

    if(addInput.value !== '') {
    var li = document.createElement('li'),
        firstPar = document.createElement('p'),
        secondPar = document.createElement('p'),
        firstIcon = document.createElement('i'),
        secondIcon = document.createElement('i'),
        input = document.createElement('input');

    firstIcon.className = 'fas fa-edit';
    secondIcon.className = 'fas fa-times';
    input.className = 'edit-note';
    input.setAttribute('type', 'text');

    firstPar.textContent = addInput.value;

    secondPar.appendChild(firstIcon);
    secondPar.appendChild(secondIcon);
    li.appendChild(firstPar);
    li.appendChild(secondPar);
    li.appendChild(input);
    ul.appendChild(li);
    addInput.value = '';
    }
}); 

// EDIT AND DELETE ITEMS

ul.addEventListener('click', function(e) {

    if(e.target.classList[1] === 'fa-edit') {

        var parentPar = e.target.parentNode;
        parentPar.style.display ='none';

        var note = parentPar.previousElementSibling;
        var input = parentPar.nextElementSibling;

        input.style.display = 'block';
        input.value = note.textContent;

        input.addEventListener('keypress', function(e) {
            if(e.keyCode === 13) {
                if(input.value !== '') {
                    note.textContent = input.value;
                    parentPar.style.display = 'block';
                    input.style.display = 'none';
                } else {
                    var li = input.parentNode;
                    li.parentNode.removeChild(li);
                }

            }
        });
        
        } else if (e.target.classList[1] === 'fa-times') {
            var list = e.target.parentNode.parentNode;
            list.parentNode.removeChild(list);

    }
});



////// ******* HIDE ITEMS

var hideItem = document.getElementById('hide');

hideItem.addEventListener('click', function() {

    var label = document.querySelector('label');

    if(hideItem.checked) {
        label.textContent = 'Unhide notes';
        ul.style.display = 'none';
    } else {
        label.textContent = 'Hide notes';
        ul.style.display = 'block';
    }

});


//*** SEARCH FILTER

var searchInput = document.querySelector('#search-note input');

searchInput.addEventListener('keyup', function(e) {

    var searchChar = e.target.value.toUpperCase();

    var notes = ul.getElementsByTagName('li');

    Array.from(notes).forEach(function(note) {
        var parText = note.firstElementChild.textContent;

        if(parText.toUpperCase().indexOf(searchChar) !== -1) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        } 
      });

});


////////////// ****SECOND ADD*****//////////////////

// ADD

var ul2 = document.getElementById('lista')

document.getElementById('add-btn2').addEventListener('click', function(e) {
    e.preventDefault();

    var addInput2 = document.getElementById('add-input2');

    if(addInput2.value !== '') {
        var li = document.createElement('li');
        var firstPar2 = document.createElement('p');
        
    li.setAttribute('type', 'type'); // Establece el valor de un atributo en el elemento indicado. Element.setAttribute(name, value);

    firstPar2.textContent = addInput2.value;

    li.appendChild(firstPar2)
    ul2.appendChild(li);
    firstPar2.value = '';
    }
}); 


// DELETE ITEMS


ul2.addEventListener('click', function(e) { // Cuando hace click en ul2
    var liElement = e.target.parentElement // e.target-> detecte el sitio del click, 
    ul2.removeChild(liElement)
});


// ADD 3list


document.getElementById('add-btn3').addEventListener('click', function(e) {
    e.preventDefault();

    var texto = document.getElementById('add-input3').value;

    if(texto !== '') {
      
        var checkbox = document.createElement(input);
        checkbox.
        var linetext = document.createElement('texto');
        
    checkbox.setAttribute('checkbox', 'type'); // Establece el valor de un atributo en el elemento indicado. Element.setAttribute(name, value);

   // linetext.textContent = addInput3.value;

    
    // input.appendChild(checkbox);
    // label.appendChild(linetext);
    // checkbox.value = '';
    }
}); 

// Cuando hago click en + :
// 1-Seleccionar el texto
// Crear checkbox
// Añadir el texto a la checkbox
// Añadir el texto y l checkbox al documento