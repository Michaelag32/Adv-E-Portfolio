let isModalOpen = false;
let contrastToggle = false;


function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape')
    const x = event.clientX / 20;
    const y = event.clientY / 20;

    for (let i = 0; i < shapes.length; ++i) {
        shapes[i].style.transform = `translate(${x}px, ${y}px)`
    }
}


function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += ' dark-theme'
    }
    else {
        document.body.classList.remove ('dark-theme')
    }
}


function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_dkvl46u",
      "template_up88xvo",
      event.target,
      "PBPb6T43vHoDYGhn6"
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch (() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            'The email service is temporarily unavailable. Please contact me directly on tenocklaguna1@gmail.com'
        );
    })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = true;
    document.body.classList += ' modal--open';
}
