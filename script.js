let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function sectionclick(n){
  if(n == 1)
  {
    var url = "https://www.youtube.com/" + number + "/1";
    document.getElementsByClassName("sitem1").src = url;
  }
  
}

function sendmail(){
  window.open("mailto:swaradapb113@gmail.com.com");
}

function navmenu() {
  var x = document.getElementsByClassName("ol-container");
  if (x.className === "ol-container") {
    x.className += " responsive";
  } else {
    x.className = "ol-container";
  }
}
let china = document.getElementById('China');
china.innerHTML = 'eaffsd';
let ctry = "India";
china.onclick = () =>{  
  ctry = 'China';
}
console.log(ctry)
const url = 'https://newsdata.io/api/1/news?apikey=pub_13983fdc1db62a20bef66b9b4a362bc5333a2';
let options = {
  country: ctry
}
async function RSSfeed(url){
  const response = await fetch(url , options);
  // console.log(response);
  let data = await response.json();
  let x = data.results;
  console.log(x[0].link);
}
RSSfeed(url);

