// Description: This file contains the configuration for the API endpoint and checks for the API key in local storage.
let rootpath = "https://mysite.itvarsity.org/api/ContactBook";
let apiKey = checkApiKey();

// Function to check if the API key is present in local storage

function checkApiKey() {


    if(!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    // If the API key is present, return it
    return localStorage.getItem("apiKey");
}