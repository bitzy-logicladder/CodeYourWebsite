//alert("Welcome to my portfolio Website! I am inside an external JS file!");

var selectedTheme = localStorage.getItem("theme");
if(selectedTheme == "dark"){
    document.body.classList.add("dark-mode");
}
else{
    document.body.classList.remove("dark-mode");
}

document.getElementsByTagName("body")[0].style.backgroundImage="URL('images/bg3.jpg')";

//document.getElementById("note").innerHTML = "I am changed using external javascript inner HTML property.";

function greet(name , age){
    alert("Hello! My name is " + name + ", and I am "+age+" years old!")
}

// Set up the toggle button
function toggleDarkMode(){
   document.body.classList.toggle("dark-mode");

   if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("theme","dark");
   }
   else{
    localStorage.setItem("theme", "light");
   }

}

var element = document.getElementsByClassName("toggle-btn")[0];

element.addEventListener("click",function(){
    toggleDarkMode();
});

function validateForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var cpass = document.getElementById("cpassword").value;

    var nameerr = document.getElementById("nameError");
    nameerr.style.display = "none";

    var passError = document.getElementById("passError");
    passError.style.display = "none";

    var cpassError = document.getElementById("cpassError");
    cpassError.style.display = "none";

    var emailError = document.getElementById("emailError");
    emailError.style.display = "none";

    if(name==""){
        nameerr.style.display = "block";
    }
    else if(pass.length<6){
        passError.style.display = "block";
    }
    else if(pass != cpass)// not equal to is written as != and equal to is written as ==
    { 
        cpassError.style.display = "block";
    }
    else if(!email.includes("@")) //does not include
    {
        emailError.style.display = "block";
    }
    else{
        alert("Your form has been submitted!");
    }
}

var current = 1;

function nextImage(){

    if(current<5){
        current = current +1;
    }
    else{
        current = 1;
    }
    document.getElementById("slide").src = "images/"+ current + ".png";
     //images/1.png

}

function previousImage(){
    if(current>1){
        current = current - 1; //4 --> 4-1 = 3
    }
    else{  //if we are at image 1, we need to jump to image 5
        current = 5;
    }
    document.getElementById("slide").src = "images/" + current + ".png";
}


setInterval(nextImage, 3000);

