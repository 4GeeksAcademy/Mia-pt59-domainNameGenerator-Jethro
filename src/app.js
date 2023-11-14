/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // document.getElementById("domain").innerHTML = finalDomain;

  let companyName = ["Jeth", "Company", "glory", "whitehouse"];
  let domainName = ["gmail", "yahoo", "hotmail", "tesla", "bmw", "nasa", "gov"];

  let finalCompanyName = Math.floor(Math.random() * companyName.length);
  let finalDomainName = Math.floor(Math.random() * domainName.length);

  let finalDomain = [];

  for (let i = 0; i < companyName.length; i++) {
    for (let j = 0; j < domainName.length; j++) {
      finalDomain.push(companyName[i] + "@" + domainName[j] + ".com");

      console.log(finalDomain);
    }
  }
  let element = document.querySelector("#domain");
  for (let i = 0; i < finalDomain.length; i++) {
    element.innerHTML += "<li>" + finalDomain[i] + "</li>";
  }
};
