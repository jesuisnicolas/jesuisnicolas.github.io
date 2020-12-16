var modDate= document.lastModified;
var year= new Date();
document.getElementById("lastUpdated").innerHTML= modDate;
document.getElementById("copyYear").innerHTML= year.getFullYear();

//Pasive event listener (This came up in the lighthouse report)
// document.addEventListener('touchstart', onTouchStart, {passive: true});

// MAP

// Av. Rafael E. Melgar, Centro, 77600 San Miguel de Cozumel, Q.R., México
const addrs1 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1868.4339751959806!2d-86.95063690624603!3d20.51163878380046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e573cfb8d1a8d%3A0x46e23bf00b1fc3e9!2sAv.%20Rafael%20E.%20Melgar%2C%20Centro%2C%20San%20Miguel%20de%20Cozumel%2C%20Q.R.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sar!4v1608129324777!5m2!1ses!2sar";

// Carretera Chankanaab km 4.5, Carretera Costera Sur, 77600 San Miguel de Cozumel, Q.R., México
const addrs2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.4358109957129!2d-86.97552412360008!3d20.475736178108757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e5748bac98d29%3A0xec697a2a774f7a00!2sTerminal%20Puerta%20Maya!5e0!3m2!1ses!2sar!4v1608128610573!5m2!1ses!2sar";

function address1(){
    document.getElementById("map").src = addrs1;
}

function address2(){
    document.getElementById("map").src = addrs2;
}