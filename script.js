function displayTheName(response){
    console.log(response.data);
    let genderElement = document.querySelector("#gender");
    let country0Element = document.querySelector("#country");
    let country1Element = document.querySelector("#country1");
    let country2Element = document.querySelector("#country2");
    let country3Element = document.querySelector("#country3");
    genderElement.innerHTML= response.data.gender;
    country0Element.innerHTML= response.data.country_of_origin[0].country_name;
    country1Element.innerHTML= response.data.country_of_origin[1].country_name; 
    country2Element.innerHTML= response.data.country_of_origin[2].country_name;  
    country3Element.innerHTML= response.data.country_of_origin[3].country_name;            
}
    

let apiKey = "67fUXxSrczwYZ5nsepcE6RorXllBNaprvA7D";
let apiUrl = `https://gender-api.com/get-country-of-origin?name=Jan&key=${apiKey}`;




axios.get(apiUrl).then(displayTheName);
