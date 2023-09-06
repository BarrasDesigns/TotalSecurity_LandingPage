let xhr = new XMLHttpRequest();

xhr.open('GET', './feed.php', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById('latest-posts').innerHTML = xhr.responseText;
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


