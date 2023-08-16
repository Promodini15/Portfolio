
$(document).ready(function(){
$('#menu').click(function(){
$(this).toggleClass('fa-times');
$('header').toggleClass('toggle');
});
$(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

});

$('a[href*="#"]').on('click',function(e){
e.preventDefault();

$('html,body').animate({
    scrollTop: $($(this).attr('href')).offset().top,
},
500,
'linear'
);

});

});
function sendMail() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    
    var name = nameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;

    if (name !== "" && email !== "" && message !== "") {
        var params = {
            name: name,
            email: email,
            message: message,
        };

        const serviceID = "service_641q93p";
        const templateID = "template_ok6vfy8";

        emailjs.send(serviceID, templateID, params)
            .then(function (response) {
                console.log("Email sent successfully:", response);
                nameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";
                alert("Thank you for contacting me");
            })
            .catch(function (error) {
                console.log("Email sending failed:", error);
                alert("An error occurred while sending the email");
            });
    } else {
        alert("Please fill in all fields before submitting.");
    }
}


