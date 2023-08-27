function sendMail() {
    console.log("function called");
    var params={
        name : document.getElementById("name").value,
        email :document.getElementById("email").value,
         message : document.getElementById("message").value,
    };
}
const serviceID = "service_2pt0erj";
const templateID = "template_ok6vfy8";
   
    emailjs
    .send(serviceID, templateID, params)
    .then((res) =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent successfully");
        })
        .catch((err) => console.log(err));
    
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
