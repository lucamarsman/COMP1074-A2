// function to change bg color from user input and add student id
function changeCustomColor() {
    document.querySelector('#myStudentId').innerHTML = "1247846";
    let input = document.getElementById('customNumber').value;

    if (input < 0 || input > 100){
        document.body.style.backgroundColor = "red";
    }else if(input > 0 && input < 20) {
        document.body.style.backgroundColor = "green";
    }else if(input > 20 && input < 40) {
        document.body.style.backgroundColor = "blue";
    }else if(input > 40 && input < 60) {
        document.body.style.backgroundColor = "orange";
    }else if(input > 60 && input < 80) {
        document.body.style.backgroundColor = "purple";
    }else if(input > 80 && input < 100) {
        document.body.style.backgroundColor = "yellow";
    }

}

// function to change bg color from random no.
function changeRandomColor() {
    let random = Math.floor(Math.random() * 100);

    if (random < 0 || random > 100){
        document.body.style.backgroundColor = "red";
    }else if(random > 0 && random < 20) {
        document.body.style.backgroundColor = "green";
    }else if(random > 20 && random < 40) {
        document.body.style.backgroundColor = "blue";
    }else if(random > 40 && random < 60) {
        document.body.style.backgroundColor = "orange";
    }else if(random > 60 && random < 80) {
        document.body.style.backgroundColor = "purple";
    }else if(random > 80 && random < 100) {
        document.body.style.backgroundColor = "yellow";
    }
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    let select = document.getElementById('imageSelect');
    let images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];

    for (let i = 0; i < images.length; i++) {
        let option = document.createElement('option');
        option.text = images[i];
        select.appendChild(option);
    }
}

// function to change image
function changeImage() {
    let select = document.getElementById('imageSelect');
    let image = document.getElementById('images');
    let index = select.selectedIndex;
    let path = select.options[index].value;
    image.src = path;
}

// event listeners for on click event of buttons and select
document.querySelector('.custColor').addEventListener('click', changeCustomColor);
document.querySelector('.randColor').addEventListener('click', changeRandomColor);
document.addEventListener('DOMContentLoaded', addList);

// event listeners for on change event of select
document.getElementById('imageSelect').addEventListener('change', changeImage);