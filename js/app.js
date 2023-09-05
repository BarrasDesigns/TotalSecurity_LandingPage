const buttonSubmit = document.querySelector('#submit');

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    Swal.fire({
        title: '¡Gracias por contáctarnos, en breve nos comunicaremos contigo!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    })
