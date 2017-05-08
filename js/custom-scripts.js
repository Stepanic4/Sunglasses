$(document).ready(function() {

var priceList = {
    "001" : {"id" : "001", "subid" : {}, "name" : "IPhone 5", "price" : "20500"},
    "002" : {"id" : "002", "subid" : {}, "name" : "IPad MINI", "price" : "10500"}
    };
  
var cart;
var config;
var wiNumInputPrefID;

$(document).ready(function(){  
  
    cart = new WICard("cart");
    cart.init("basketwidjet", config);
    
    
});    
document.addEventListener('visibilitychange', function(e) {
cart.init("basketwidjet", config);
}, false);

});