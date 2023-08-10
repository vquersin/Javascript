const apiUrl = "http://api.airvisual.com/v2/nearest_city?key=0fe7512a-fbb8-4717-bc6c-fd86c7eb8e5e";
const villeElement = document.getElementById("ville");
const paysElement = document.getElementById("pays");
const tempElement = document.getElementById("temp");
const iconElement = document.getElementById("iconMeteo");

function fetchData() {
  var request = new XMLHttpRequest();
  request.open("GET", apiUrl);
  request.responseType = "json";
  request.send();
  request.onload = function() {
    var temp = request.response;
    affichageMeteo(temp);
  }
}

function affichageMeteo(jsonObj){
    villeElement.textContent = jsonObj["data"]["city"];
    paysElement.textContent = jsonObj["data"]["country"];
    tempElement.textContent = jsonObj["data"]["current"]["weather"]["tp"]+"°";
    let icon = "https://www.airvisual.com/images/"+jsonObj["data"]["current"]["weather"]["ic"]+".png";
    iconElement.setAttribute("src", icon);
}


fetchData();
setInterval(fetchData, 60000);
