// QUESTION NO. - 2
// Use the rest countries API url -> https://restcountries.com/v3/all and display all the country flags in console

// CODE-
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3/all");

xhr.send();

xhr.onload = function () {

    var data = JSON.parse(xhr.response);
    for (var element of data) {
      console.log(`
  ${element.flag}
    `);
    }

};
