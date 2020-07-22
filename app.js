let inputBar = document.getElementById('inputBar');
let button = document.getElementById('submit');
let checkBox = document.getElementById('checkbox');
let ol = document.querySelector('ol');
let delButton = document.getElementById('delBut');
let staticdel = document.getElementsByClassName('button-icon');

function inputBarValue() {
    return inputBar.value.length;
}

function createListElement() {
    let li = document.createElement('li');
    let label = document.createElement('label');
    label.className = 'strikethrough'
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    let deleteButton = document.createElement('button');
    deleteButton.className = 'button-icon'
    deleteButton.addEventListener("click",removeListElement);
    let img = document.createElement('img');
    img.src = 'baseline_delete_forever_black_18dp.png';
    deleteButton.appendChild(img);
    label.appendChild(document.createTextNode(inputBar.value));
    li.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    li.id = 'newLi';
    ol.appendChild(li);
    inputBar.value = "";
}

function removeListElement() {
    this.parentNode.remove();
    
}

function addListAfterClick() {
    if (inputBarValue() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputBarValue() > 0 && event.keyCode === 13) {
        createListElement();
    }
}



button.addEventListener("click", addListAfterClick);
inputBar.addEventListener("keypress", addListAfterKeypress);