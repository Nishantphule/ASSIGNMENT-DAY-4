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

