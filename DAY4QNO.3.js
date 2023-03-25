// QUESTION NO. - 3
// Use the same rest countries and print all countries name, region, sub region and population

// CODE-
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3/all");

xhr.send();

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {

    var data = JSON.parse(xhr.responseText);

    data.forEach(element => {
      
      const createRow = document.createElement("tr")
      const countryName = document.createElement("td")
      countryName.innerHTML=element.name.common
      
      const countryRegion = document.createElement("td")
      countryRegion.innerHTML=element.region
      
      const countrySubRegion = document.createElement("td")
      countrySubRegion.innerHTML=element.subregion
      
      const countryPopulation = document.createElement("td")
      countryPopulation.innerHTML=element.population
      
      createRow.append(countryName,countryRegion,countrySubRegion,countryPopulation)
      
      const bodyData = document.getElementById("data")
      bodyData.append(createRow)
      
      console.log(`
        name: ${element.name.common}
        region: ${element.region}
        subregion: ${element.subregion}
        population: ${element.population}
  
        `);
    });
  } else {
    console.log("Data is not available");
  }
};

