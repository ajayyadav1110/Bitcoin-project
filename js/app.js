/*$(document).ready(function() {


 $('button').click(function () {
    // highlight the button
    // not AJAX, just cool looking
    $("button").removeClass("selected");
    $(this).addClass("selected");

    // the AJAX part
    var bitcoinAPI = " https://api.coinmarketcap.com/v1/ticker/bitcoin?jsoncallback=?";
    var animal = $(this).text();
    var bitcoinOptions = {
	id: animal,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(bitcoinAPI,  bitcoinOptions, displayPhotos);

  }); // end click

}); // end ready

*/

/*

const https = require('https');
const id="bitcoin";

//function to print message on console
function printMessage(id,name,symbol,rank){
const message = '${id} has the ${name} has the symbol ${symbol} and rank is ${rank} in javaScript';
console.log(message);
}

https.get('  https://api.coinmarketcap.com/v1/ticker/?limit=10', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
//read the data
let body="";
  res.on('data', data => {
  body+=data.toString();
    
  });
  res.on('end',()=>{
  //parse the data
  const profile=JSON.parse(body);
  console.dir(profile);
  printMessage(profile.id,profile.name, profile.symbol,profile.rank);
  
  //print the data
  console.log(typeof body);
  });
  
  
  

}).on('error', (e) => {
  console.error(e);
});

*/


//AGAIN*****************************************

//fetch Api
const contained=document.querySelector('.contained');


fetch('  https://api.coinmarketcap.com/v1/ticker/?limit=1')
.then(response => response.json())
.then(data=> generateText(data.message))

function generateText(data){
const html = 
"<p> ${id.value}</p>"+
"<p> ${name.value}</p>"+
"<p> ${symbol.value}</p>"

;
contained.innerHTML = html;
}











