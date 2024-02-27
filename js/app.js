let slideIndex = 0;
let slides = document.getElementsByClassName("slide-image");
let dots = document.getElementsByClassName("carousel-dot");
let timer;


const resetTimer = () => {
  clearTimeout(timer);

};
showSlides();
function showSlides() {


    let i;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    resetTimer();
    timer = setTimeout(() => showSlides(1), 5000);

    console.log(slideIndex);
    
  }




function changeSlideByButton(n) {

  slides.length += n;

  resetTimer();
  timer = setTimeout(() => changeSlideByButton(1), 1000);
  

  showSlides();

}


// let xhr = new XMLHttpRequest();
// xhr.open('GET', './posts.xml', true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     let xmlDoc = xhr.responseXML;
//     let items = xmlDoc.getElementsByTagName('post');
//     let html = '<ul>';

//     for (let i = 0; i < items.length; i++) {
//       let title = items[i].getElementsByTagName('Title')[0].textContent;
//       let link = items[i].getElementsByTagName('Permalink')[0].textContent;
//       let image = items[i].getElementsByTagName('ImageFeatured')[0].textContent;

//       //let description = items[i].getElementsByTagName('Content')[0].textContent;

//       html += '<li><a href="' + link + '"><h4>' + title + '</h4> <img src= "' + image + '" width="300" height="200"/></a></li>';
//     }

//     html += '</ul>';
//     document.getElementById('blog__body').innerHTML = html;
//   }
// };
// xhr.send();


// function menuOnClick() {
//   document.getElementById("menu-bar").classList.toggle("change");
//   document.getElementById("nav").classList.toggle("change");
//   document.getElementById("menu-bg").classList.toggle("change-bg");
// }

// document.getElementById('envia').onclick = function () {
//   Swal.fire({
//     icon: "success",
//     title: "¡Gracias por Contactárnos!",
//     text: "En breve nos comunicaremos contigo."
//   });
// }
