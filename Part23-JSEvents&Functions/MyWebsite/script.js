//alert("Welcome to my portfolio Website! I am inside an external JS file!");


document.getElementsByTagName("body")[0].style.backgroundImage="URL('images/bg3.jpg')";

//document.getElementById("note").innerHTML = "I am changed using external javascript inner HTML property.";

function greet(name , age){
    alert("Hello! My name is " + name + ", and I am "+age+" years old!")
}



function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

var element = document.getElementsByClassName("toggle-btn")[0];

element.addEventListener("click",function(){
    toggleDarkMode();
});