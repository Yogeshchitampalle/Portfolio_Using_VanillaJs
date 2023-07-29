// Initialize a new instance of the Swiper library with the following options:
swiper = new Swiper(".image-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop:true,
    autoplay: {
          delay: 2000,
          disableOnInteraction: false,
    },
})

// Add a click event listener to the menu bar icon
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-bar');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
  });
});

function openPdf() {
    var pdfFile = "pdf/Frontend_Resume.pdf";
    window.open(pdfFile);
}
//email service id service_fye2exr

  // Add this code in your JavaScript file
// Replace "YOUR_EMAIL_SERVICE_ID" with your email service ID
// Replace "YOUR_EMAIL_TEMPLATE_ID" with your email template ID
// Replace "YOUR_EMAIL_USER_ID" with your email user ID

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;
  
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("number: ", number);
    console.log("message: ", message);
  
    emailjs.send("service_fye2exr", "template_qvxansb", {
      name,
      email,
      number,
      message,
    }, "04S8AUCNp53I9oHy1")
      .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
      }, function(error) {
        console.log("FAILED...", error);
        alert("Oops! An error occurred. Please try again.");
      });
  }
  
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    sendEmail();
  });


  function checkScreenSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      // Code to execute for smaller screens (e.g., mobile devices)
      // Example: document.body.style.backgroundColor = 'red';
    } else {
      // Code to execute for larger screens (e.g., desktops)
      // Example: document.body.style.backgroundColor = 'blue';
    }
  }

  // Call the function on page load and whenever the window is resized
  window.addEventListener('load', checkScreenSize);
  window.addEventListener('resize', checkScreenSize);
