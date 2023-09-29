// let slideIndex = 0;


// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slide-image");
//   let dots = document.getElementsByClassName("carousel-dot");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); 
// }

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  //alert('showslides('+ n +')\nslideIndex='+slideIndex);
  let i;
  let slides = document.getElementsByClassName("slide-image");
  let dots = document.getElementsByClassName("carousel-dot");
  if (n==undefined){n = ++slideIndex}
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
  
  setTimeout(showSlides, 1000); // Change image every 5 seconds
}



let xhr = new XMLHttpRequest();
xhr.open('GET', './posts.xml', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let xmlDoc = xhr.responseXML;
        let items = xmlDoc.getElementsByTagName('post');
        let html = '<ul>';

        for (let i = 0; i < items.length; i++) {
            let title = items[i].getElementsByTagName('Title')[0].textContent;
            let link = items[i].getElementsByTagName('Permalink')[0].textContent;
            let image = items[i].getElementsByTagName('ImageFeatured')[0].textContent;
            
            //let description = items[i].getElementsByTagName('Content')[0].textContent;
            
            html += '<li><a href="' + link + '"><h4>' + title + '</h4> <img src= "'+image+'" width="300" height="200"/></a></li>';
        }

        html += '</ul>';
        document.getElementById('blog__body').innerHTML = html;
    }
};
xhr.send();


function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

document.getElementById('envia').onclick = function(){
  Swal.fire({
    icon: "success",
    title: "¡Gracias por Contactárnos!",
    text: "En breve nos comunicaremos contigo."
  });
}
