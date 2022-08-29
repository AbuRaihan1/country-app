let getData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showData(data));
};

let showData = (countries) => {
  let container = document.getElementById("container");
  container.classList.add("container");
  for (country of countries) {
    // console.log(country);
    let createDiv = document.createElement("div");
    createDiv.classList.add("all-country");
    createDiv.setAttribute("id", "all-country");
    createDiv.innerHTML = `
        <img class="country-img" src="${country.flags.png}" alt="country">
        <h2 class="country-name">${country.name.common}</h2>
        <p class="region"> ${country.region}</p>
        <a href="#" class="details-button" onclick="details('${country.cca2}')"> Details</a>
        `;

    container.appendChild(createDiv);
  }
};

getData();
function details(countryCode) {
  fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
    .then((res) => res.json())
    .then((data) => displayDetails(data));
}

function displayDetails(uiCountry) {
  let ui = document.getElementById("sec");
  // ui.innerHTML = `${details(uiCountry)}`;
  console.log(uiCountry);
  ui.innerHTML = `
     <img class="info-img" src="${uiCountry.flags.png}">
     <h2> Country Name : <span>${uiCountry.name}</span></h2>
     <h3> Capital : <span>${uiCountry.capital}</span></h2>
      <p> Area : <span> ${
        uiCountry.area
      }<small> km<sup>2</sup></small> </span></p>
      <p> Populaton : <span>${uiCountry.population}</span></p>
      <p> Region : <span>${uiCountry.region}</span> </p>
      <p> Sub Region : <span>${uiCountry.subregion}</span></p>
      <p> Time Zones : <span>${uiCountry.timezones}</span> </p>
      <p> Borders  : <span>${uiCountry.borders}</span> </p>
      <p> Native Name  : <span>${uiCountry.nativeName}</span></p>
      <p> Numeric Code : <span>${uiCountry.numericCode}</span></p>
      <p> Currency Name : <span>${uiCountry.currencies[0].name}</span></p>
      <p> Currency Code : <span> ${uiCountry.currencies[0].code} </span></p>
      <p> Currency Symbol : <span>${uiCountry.currencies[0].symbol} </span></p>
      <p> Language: <span>${uiCountry.languages[0].name} </span></p>
      <p> Native Language : <span> ${
        uiCountry.languages[0].nativeName
      } </span></p>
      <p> Alpha Two Code : <span>${uiCountry.alpha2Code}   </span> </p>
      <p> Alpha Three Code : <span>${uiCountry.alpha3Code}  </span> </p>
      <p> Alt-Country : <span>${uiCountry.altSpellings[0]},  
      ${uiCountry.altSpellings[1]}  </span> </p>
      
      <p> Regional Blocs : <span> ${
        uiCountry.regionalBlocs[0].acronym
      } </span> </p> 
      <p> Regional Blocs Name : <span> ${
        uiCountry.regionalBlocs[0].name
      } </span> </p> 
      
      <p> Country Domain name : <span> ${uiCountry.topLevelDomain} </span> </p>
      <p> Independent : <span> ${
        uiCountry.independent ? "yes" : "No"
      } <span> </p>

      `;
}
