$(document).ready(function() {
    $('.header__burger,.header__menu').click(function(event) {
        $('.header__burger, .header__menu').toggleClass("active");
        $('body').toggleClass("lock");  
        })
    });


let button1 = document.getElementById('service__button1');
let button2 = document.getElementById('service__button2');
let button3 = document.getElementById('service__button3');
let image1 = document.getElementById('service__image1');
let image2 = document.getElementById('service__image2');
let image3 = document.getElementById('service__image3');
let image4 = document.getElementById('service__image4');
let image5 = document.getElementById('service__image5');
let image6 = document.getElementById('service__image6');

function serviceButtons1() {
  if (button2.classList.contains('active-button') && button3.classList.contains('active-button')) {
    console.log("Two buttons are active"); 
  } else if (button2.classList.contains('active-button') ||  button3.classList.contains('active-button')) { 
    image1.classList.toggle("active-image");
    image5.classList.toggle("active-image");
    button1.classList.toggle("active-button");
    console.log("One button is active"); 
  } else {
    image2.classList.toggle("active-image");
    image3.classList.toggle("active-image");
    image4.classList.toggle("active-image");
    image6.classList.toggle("active-image");
    button1.classList.toggle("active-button");
  }
}

function serviceButtons2() {
  if (button1.classList.contains('active-button') && button3.classList.contains('active-button')) {
    console.log("Two buttons are active");
  } else if (button1.classList.contains('active-button') ||  button3.classList.contains('active-button')) { 
    image3.classList.toggle("active-image");
    button2.classList.toggle("active-button");
    console.log("One button is active"); 
  } else {
    image1.classList.toggle("active-image");
    image2.classList.toggle("active-image");
    image4.classList.toggle("active-image");
    image5.classList.toggle("active-image");
    image6.classList.toggle("active-image");
    button2.classList.toggle("active-button");
  }
}

function serviceButtons3() {
  if (button1.classList.contains('active-button') && button2.classList.contains('active-button')) {
    console.log("Two buttons are active");
  } else if (button1.classList.contains('active-button') ||  button2.classList.contains('active-button')) { 
    image2.classList.toggle("active-image");
    image4.classList.toggle("active-image");
    image6.classList.toggle("active-image");
    button3.classList.toggle("active-button");
    console.log("One button is active"); 
  } else {
    image1.classList.toggle("active-image");
    image3.classList.toggle("active-image");
    image5.classList.toggle("active-image");
    button3.classList.toggle("active-button");
  }
}

 
let priceButton1 = document.getElementById('price-button1');
let priceButton2 = document.getElementById('price-button2');
let priceButton3 = document.getElementById('price-button3');
let priceSelector1 = document.getElementById('price-selector1');
let priceSelector2 = document.getElementById('price-selector2');
let priceSelector3 = document.getElementById('price-selector3');
let priceHeader1 = document.getElementById('price-button__header1');
let priceHeader2 = document.getElementById('price-button__header2');
let priceHeader3 = document.getElementById('price-button__header3');


function priceButtonOne() {
  if (priceButton2.classList.contains('active-price')) { 
    priceButton1.classList.toggle("active-price"); 
    priceSelector1.classList.toggle("active-selector");
    priceHeader1.classList.toggle("active-header");
    priceButton2.classList.toggle("active-price"); 
    priceSelector2.classList.toggle("active-selector");
    priceHeader2.classList.toggle("active-header");
  } else if (priceButton3.classList.contains('active-price')) { 
    priceButton1.classList.toggle("active-price"); 
    priceSelector1.classList.toggle("active-selector");
    priceHeader1.classList.toggle("active-header");
    priceButton3.classList.toggle("active-price"); 
    priceSelector3.classList.toggle("active-selector");
    priceHeader3.classList.toggle("active-header");
  } else {
    priceButton1.classList.toggle("active-price"); 
    priceSelector1.classList.toggle("active-selector");
    priceHeader1.classList.toggle("active-header");
  }
}
 
function priceButtonSecond() {
  if (priceButton1.classList.contains('active-price')) {
    priceButton2.classList.toggle("active-price"); 
    priceSelector2.classList.toggle("active-selector");
    priceHeader2.classList.toggle("active-header");
    priceButton1.classList.toggle("active-price"); 
    priceSelector1.classList.toggle("active-selector");
    priceHeader1.classList.toggle("active-header");
  } else if (priceButton3.classList.contains('active-price')) { 
    priceButton2.classList.toggle("active-price");
    priceSelector2.classList.toggle("active-selector");
    priceHeader2.classList.toggle("active-header");
    priceButton3.classList.toggle("active-price"); 
    priceSelector3.classList.toggle("active-selector");
    priceHeader3.classList.toggle("active-header");
  } else {
    priceButton2.classList.toggle("active-price"); 
    priceSelector2.classList.toggle("active-selector");
    priceHeader2.classList.toggle("active-header");
  }
}

function priceButtonThree() {
  if (priceButton1.classList.contains('active-price')) {
    priceButton3.classList.toggle("active-price"); 
    priceSelector3.classList.toggle("active-selector");
    priceHeader3.classList.toggle("active-header");
    priceButton1.classList.toggle("active-price"); 
    priceSelector1.classList.toggle("active-selector");
    priceHeader1.classList.toggle("active-header");
  } else if (priceButton2.classList.contains('active-price')) { 
    priceButton3.classList.toggle("active-price"); 
    priceSelector3.classList.toggle("active-selector");
    priceHeader3.classList.toggle("active-header");
    priceButton2.classList.toggle("active-price");
    priceSelector2.classList.toggle("active-selector"); 
    priceHeader2.classList.toggle("active-header");
  } else {
    priceButton3.classList.toggle("active-price"); 
    priceSelector3.classList.toggle("active-selector");
    priceHeader3.classList.toggle("active-header");
  }
}


/* selector */

const openSelect = document.querySelector('.contacts-options');
const selectBtn = document.querySelector('.select-btn');
const city = document.querySelectorAll(".city");
const selectCity = document.querySelectorAll(".select-city");
const spanCity = document.querySelectorAll('.spanCity');
const cityBtn = document.querySelector('.contacts-selector');
const contactsSection = document.getElementById('contacts');
const contactsImage = document.querySelector('.contacts__image');

selectBtn.onclick = function () {
  openSelect.classList.toggle('active-contact');
  cityBtn.classList.toggle('active-select');
  selectBtn.classList.add('active-city');
  contactsSection.classList.add('active-section');
  selectCity.forEach(button => {
    button.classList.remove('select-city-active');
  });
  selectDate();
  hideImage();
} 

function selectDate() {
  if (openSelect.classList.contains('active-contact')) {
    selectBtn.innerHTML = '<div>City</div><div class="contacts-selector active-select"></div>';   
  } else {
    selectBtn.innerHTML = '<div>City</div><div class="contacts-selector"></div>';
  }
}

function hideImage() {
  if (openSelect.classList.contains('active-contact')) {
    contactsImage.classList.add('active-contact-image');
  } else {
    contactsImage.classList.remove('active-contact-image');
  }
}

city[0].onclick = function () {
  openSelect.classList.toggle('active-contact');
  selectBtn.classList.toggle('active-select');
  selectBtn.classList.add('active-city');
  contactsImage.classList.add('active-contact-image');
  selectCity.forEach(button => {
    button.classList.remove('select-city-active')
  });
  selectCity[0].classList.toggle('select-city-active');
  selectBtn.textContent = spanCity[0].textContent;
}

city[1].onclick = function () {
  openSelect.classList.toggle('active-contact');
  selectBtn.classList.toggle('active-select');
  selectBtn.classList.add('active-city');
  contactsImage.classList.add('active-contact-image');
  selectCity.forEach(button => {
    button.classList.remove('select-city-active');
  });
  selectCity[1].classList.toggle('select-city-active');
  selectBtn.textContent = spanCity[1].textContent;
}

city[2].onclick = function () {
  openSelect.classList.toggle('active-contact');
  selectBtn.classList.toggle('active-select');
  contactsImage.classList.add('active-contact-image');
  selectCity.forEach(button => {
    button.classList.remove('select-city-active');
  });
  selectCity[2].classList.toggle('select-city-active');
  selectBtn.textContent = spanCity[2].textContent;
}


city[3].onclick = function () {
  openSelect.classList.toggle('active-contact');
  selectBtn.classList.toggle('active-select');
  contactsImage.classList.add('active-contact-image');
  selectCity.forEach(button => {
    button.classList.remove('select-city-active');
  });
  selectCity[3].classList.toggle('select-city-active');
  selectBtn.textContent = spanCity[3].textContent;
}


