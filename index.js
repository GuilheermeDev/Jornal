const geralBtn = document.getElementById("Geral");
const negociosBtn = document.getElementById("Negocios");
const esportesBtn = document.getElementById("Esportes");
const entretenimentoBtn = document.getElementById("Entretenimento");
const tecnologiaBtn = document.getElementById("Tecnologia");
const searchBtn = document.getElementById("searchBtn");
const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");
var newsDataArr = [];

// API's, aqui ele gera as noticias para o site e consome a API//
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "6c4f1baf918441b7a360ce1404b6c5a4";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=";
const GERAL_NEWS = "https://newsapi.com/v2/top-headlines?country=br&category_general&apiKey=";
const NEGOCIOS_NEWS = "https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=";
const ESPORTES_NEWS = "https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=";
const ENTRETENIMENTO_NEWS = "https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=";
const TECNOLOGIA_NEWS = "https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

 fetch(request)
   .then(response => response.json())
     .then((HEADLINES_NEWS) => {
    console.log(HEADLINES_NEWS);
  })
  .catch(error => {
    console.log(error);
  });

window.onload = function() {
    newsType.innerHTML="<h4>Headlines</h4>";
    fetchHeadlines();
};


geralBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Notícias Gerais</h4>";
    fetchGeralNews();
});

negociosBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Negocios</h4>";
    fetchNegociosNews();
});

esportesBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Esportes</h4>";
    fetchEsportesNews();
});

entretenimentoBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Entretenimento</h4>";
    fetchEntretenimentoNews();
});

tecnologiaBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Tecnologia</h4>";
    fetchTecnologiaNews();
});

searchBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
    fetchQueryNews();
});

async function fetchHeadlines()  {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Nada encontrado</h5>"
        return;
    }

    displayNews();
}


async function fetchGeralNews () {
    const response = await fetch(GERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Nada encontrado.</h5>"
        return;
    }

    displayNews();
}

async function fetchNegociosNews() {
    const response = await fetch(NEGOCIOS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Nada encontrado.</h5>"
        return;
    }

    displayNews();
}

async function fetchEntretenimentoNews() {
    const response = await fetch(ENTRETENIMENTO_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Nada encontrado.</h5>"
        return;
    }

    displayNews();
}

async function fetchEsportesNews () {
    const response = await fetch(ESPORTES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Nada encontrado.</h5>"
        return;
    }

    displayNews();
}

async function fetchTecnologiaNews() {
    const response = await fetch(TECNOLOGIA_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Nada encontrado.</h5>"
        return;
    }

    displayNews();
}

async function fetchQueryNews () {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Nada encontrado.</h5>"
        return;
    }

    displayNews();
}

function displayNews() {

    newsdetails.innerHTML = "";

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}