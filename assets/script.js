function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    

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


