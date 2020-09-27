var modDate= document.lastModified;
var year= new Date();
document.getElementById("lastMod").innerHTML= modDate;
document.getElementById("copyYear").innerHTML= year.getFullYear();

function wait(){
    alert ("Too Soon! Wait another week!");
}
function wait2(){
    alert ("Way too Soon! Wait two weeks!");
}
