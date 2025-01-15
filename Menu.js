const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 
  
hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});


var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var message = document.getElementById('message').value;
var PhoneNumber = document.getElementById('PhoneNumber').value;

// Define your SMTP server settings
function sendEmail() {
Email.send({
  SecureToken: "ff2b220e-e5f6-430c-b3d5-a26a0edab5ee",
  To: 'nafiu6096@gmail.com',
  From: email,
  Subject: "New Contact Form Submission",
  Body: `Name: ${name}<br>Email: ${email}<br>PhoneNumber: ${PhoneNumber}<br>Message: ${message}`
}).then(
  message => alert("Mail sent successfully")
).catch(
  error => console.error("Failed to send email: ", error)
);
};
submit.addEventListener('susubmit',(e)=>{
  e.preventDefault();
  console.log("click");
});

document.