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

// Select the menu bar icon and navbar element
menu = document.querySelector('#menu-bar');
navbar = document.querySelector('.navbar');

// Add a click event listener to the menu bar icon
menu.addEventListener('click', () => {
    // Toggle the 'fa-times' class on the menu bar icon and the 'nav-toggle' class on the navbar element
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
    // Add an else statement to remove the 'nav-toggle' class when the menu icon is clicked again to close the navbar
    if (!navbar.classList.contains('nav-toggle')) {
        navbar.classList.remove('nav-toggle');
    }
});

// Add an onscroll event listener to the window
window.onscroll = () => {
    // Remove the 'fa-times' and 'nav-toggle' classes from the menu bar icon and navbar element, respectively
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}


function openPdf() {
    var pdfFile = "pdf/Yogichi@Resume.pdf";
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
  
