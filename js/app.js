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
            let description = items[i].getElementsByTagName('Content')[0].textContent;
            
            html += '<li><a href="' + link + '">' + title + '<p>' + description + '</p></a></li>';
        }

        html += '</ul>';
        document.getElementById('blog__item').innerHTML = html;
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


