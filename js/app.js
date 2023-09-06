// let xhr = new XMLHttpRequest();

// xhr.open('GET', './feed.php', true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.responseText)
//     // document.getElementById('latest-posts').innerHTML = xhr.responseText;
//   }
// };
// xhr.send();
var xhr = new XMLHttpRequest();
xhr.open('GET', '../posts.xml', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var xmlDoc = xhr.responseXML;
        var items = xmlDoc.getElementsByTagName('post');
        var html = '<ul>';

        for (var i = 0; i < items.length; i++) {
            var title = items[i].getElementsByTagName('Title')[0].textContent;
            var link = items[i].getElementsByTagName('Permalink')[0].textContent;
            var description = items[i].getElementsByTagName('Content')[0].textContent;
            
            html += '<li><a href="' + link + '">' + title + '</a><p>' + description + '</p></li>';
        }

        html += '</ul>';
        document.getElementById('latest-posts').innerHTML = html;
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


