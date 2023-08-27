(function(){
    console.log("EmailJS initialization...");
      emailjs.init("dYdaNNJLGYCkzKA95");
   })();

function sendMail() {
    console.log("function called");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    if (name !== "" && email !== "" && message !== "") {
        var params = {
            name: name,
            email: email,
            message: message,
        };

        const serviceID = "service_641q93p";
        const templateID = "template_ok6vfy8";

        emailjs.send(serviceID, templateID, params,function(response){
            console.log("send callback");
                var successMessage = "Email sent successfully.\nResponse: " + JSON.stringify(response);
                alert(successMessage);
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                
            },function(error){
                console.log("error ");
                alert("An error ocuured while sending the Email, Send Again");
            });
}
    else {
        alert("Please fill in all fields before submitting.");
    }
}
