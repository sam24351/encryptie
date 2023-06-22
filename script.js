 /* Opdracht Objectgeorienteerd programmeren
    Informatica - Emmauscollege Rotterdam
 */

/* ******************************************************* */
/* instellingen om foutcontrole van je code beter te maken */
/* ******************************************************* */
///<reference path="p5.global-mode.d.ts" />
"use strict"


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

// fibonacci
var f = [0, 1]
var gert;

// hash
console.log("Hello world!");

var wachtwoord = "aacBBB";
var gestolenHash = CryptoJS.SHA256(wachtwoord).toString(CryptoJS.enc.Hex);

var letters = [0, 0, 0, 0, 0, 0];
var waardes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "@", "!"];
var woord;
var z = 0;



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

var fibonacci = function(n) {
  if (n == 0 || n == 1) {
    return n}
   else {
  var g = fibonacci(n-1) + fibonacci(n-2);
   return g }
 };

var fib = function(n) {
  if (n < f.length) {
    var m = f[n];
  }
  else {
    m = fib(n-1) + fib(n-2); 
  f[n] = m;}
  return m;
};

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);
  fill('white');
  rect(500, 500, 200, 200);
  
  /*const henk = CryptoJS.SHA256("message");
 console.log('hash: '+ henk);*/


  if(keyIsDown(71)) {
    
    /*for (var i = 0; i < 1000; i++) {
     gert = fib(i+ 1);
     console.log((i+1) + ": " + gert);
    console.log((i+1) + ": " + (fibonacci(i+1)));
    }*/
  
    for (var i = 0; i < waardes.length; i++) {
      letters[0] = waardes[i];
    
      for (var j = 0; j < waardes.length; j++) {
        letters[1] = waardes[j];
    
        for (var k = 0; k < waardes.length; k++) {
          letters[2] = waardes[k];
    
          for (var l = 0; l < waardes.length; l++) {
            letters[3] = waardes[l];
    
            for (var m = 0; m < waardes.length; m++) {
              letters[4] = waardes[m];
    
              for (var n = 0; n < waardes.length; n++) {
                letters[5] = waardes[n];
    
                z += 1;
    
                woord = letters[0] + letters[1] + letters[2] + letters[3] + letters[4] + letters[5];
                console.log(woord);
                var hash = CryptoJS.SHA256(woord);
    
                if (hash == gestolenHash) {
                  console.log('wachtwoord: ' + woord);
                  i = waardes.lenght + 1;
                  j = waardes.lenght + 1;
                  k = waardes.lenght + 1;
                  l = waardes.lenght + 1;
                  m = waardes.lenght + 1;
                  n = waardes.lenght + 1;
                  console.log("aantal berekende mogelijkheden: " + z);
                  console.log("aantal mogelijkheden: " + Math.pow(54, 6))
                }
              }
            }
          }
        }
      }
    }
    
  }



}
