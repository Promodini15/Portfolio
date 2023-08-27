(function () {
    emailjs.init("dYdaNNJLGYCkzKA95");
})();

function sendMail() {
    console.log("Function called");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name && email && message) {
        var params = {
            name: name,
            email: email,
            message: message,
        };

        const serviceID = "service_2pt0erj";
        const templateID = "template_ok6vfy8";

        emailjs.send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById("form").reset();
                alert("Your message was sent successfully");
            })
            .catch((err) => console.log(err));
    } else {
        alert("Please fill in all fields before submitting.");
    }
}




/*function sendMail() {
    console.log("function called");
    var params={
        name : document.getElementById("name").value,
        email :document.getElementById("email").value,
         message : document.getElementById("message").value,
    };
}
const serviceID = "service_2pt0erj";
const templateID = "template_ok6vfy8";
   
    emailjs.send(serviceID, templateID, params)
    .then((res) =>{
        document.getElementById("form").reset();
        
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            
            alert("your message sent successfully");
        })
        .catch((err) => console.log(err));
    */
/*
    if (name !== "" && email !== "" && message !== "") {
        var params = {
            name: name,
            email: email,
            message: message,
        };

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
*/
