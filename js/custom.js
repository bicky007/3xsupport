// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


// Initialize EmailJS
(function(){
    emailjs.init("Poe0jASlyEhkRWWC5");
})();

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from submitting

    // Show loader and hide form while email is being sent
    document.getElementById("loader").style.display = "block"; 
    document.getElementById("contact-form").style.display = "none";

    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,
    }

    // Send the email using emailjs
    emailjs.send("service_vhc7b2b", "template_gq4x3aq", parms)
        .then(function(response) {
            document.getElementById("loader").style.display = "none"; // Hide loader on success
            alert("Email sent successfully!");
            console.log('SUCCESS!', response.status, response.text);
            
            // Reset form and show it again after success
            document.getElementById("contact-form").reset();
            document.getElementById("contact-form").style.display = "block";
        }, function(error) {
            document.getElementById("loader").style.display = "none"; // Hide loader on failure
            alert("Failed to send email. Please try again.");
            console.log('FAILED...', error);

            // Show the form again in case of failure
            document.getElementById("contact-form").style.display = "block";
        });
});


// Initialize EmailJS
(function(){
    emailjs.init("Poe0jASlyEhkRWWC5");
})();

// Open and close modal functions
function openModal() {
    document.getElementById("quoteModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("quoteModal").style.display = "none";
}

// Handle form submission
document.getElementById("quote-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission

    // Show loader and hide form while sending email
    document.getElementById("quote-loader").style.display = "block"; 
    document.getElementById("quote-form").style.display = "none";

    let quoteData = {
        name: document.getElementById("quote-name").value,
        email: document.getElementById("quote-email").value,
        phone: document.getElementById("quote-phone").value,
        message: document.getElementById("quote-message").value,
    };

    // Send email using EmailJS
    emailjs.send("service_vhc7b2b", "template_gq4x3aq", quoteData)
        .then(function(response) {
            document.getElementById("quote-loader").style.display = "none"; // Hide loader
            alert("Quote request sent successfully!");
            console.log('SUCCESS!', response.status, response.text);
            
            // Reset form and show it again after success
            document.getElementById("quote-form").reset();
            document.getElementById("quote-form").style.display = "block";
            closeModal(); // Close modal after success
        }, function(error) {
            document.getElementById("quote-loader").style.display = "none"; // Hide loader
            alert("Failed to send quote request. Please try again.");
            console.log('FAILED...', error);

            // Show the form again in case of failure
            document.getElementById("quote-form").style.display = "block";
        });
});
