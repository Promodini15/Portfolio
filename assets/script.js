function downloadfile(){
    window.open("C:\Users\Intertek Moody\Desktop\Promodini.L");
}

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
function sendMail(){
    var params ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };

const serviceID="service_641q93p"
const templateID="template_ok6vfy8";
emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Thankyou for contacting me");
    })
    .catch((err) => console.log(err));
}