var today= new Date();
var dayNumber= today.getDay();
if (dayNumber == 5) {
    document.getElementById("message").classList.add("show");
}else{
    document.getElementById("message").classList.add("hide");
}