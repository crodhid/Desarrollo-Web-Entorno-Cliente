const h21 = document.getElementById("h21");

let navigatorObject = new Object({
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    idiomas : navigator.languages,
    conexion : navigator.onLine,
    permitidoCookies : navigator.cookieEnabled,
    cpu: navigator.hardwareConcurrency,
    ram: navigator.deviceMemory,
    automatizacion : navigator.webdriver
});

h21.innerHTML += "Navegador y Sistema: " + navigatorObject.userAgent + "<br>";
h21.innerHTML += "Sistema " + navigatorObject.platform + "<br>";
h21.innerHTML += "Lenguajes " + navigatorObject.idiomas + "<br>";
h21.innerHTML += "Conexion a internet: " + navigatorObject.conexion + "<br>";
h21.innerHTML += "¿Se permiten cookies?  " + navigatorObject.permitidoCookies + "<br>";
h21.innerHTML += "Número de cpus: " + navigatorObject.cpu + "<br>";
h21.innerHTML += "RAM: " + navigatorObject.ram + "<br>";
h21.innerHTML += "Automatizacion: " + navigatorObject.automatizacion + "<br>";