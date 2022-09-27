// template_up88xvo

// service_dkvl46u

// PBPb6T43vHoDYGhn6

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
