function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


var str = "abcdefghi";
var strSplitted = str.split('');

console.log(str.charCodeAt(0));
console.log(String.fromCharCode(97))


for(var i = 97, j =0 ; j < 26; j++ ) {
  console.log(String.fromCharCode(i+j));
}



import "./casino";

var alphabet = "abcdefghijklmnopqrstuvwxyz";
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var wordsAmount = 20;
var minLength = 3;
var maxLength = 10;

var library = {};

for (var i = 0; i < wordsAmount; i++) {
  var wordLength = random(minLength, maxLength);
  var word = '';
  for(var j = 0; j < wordLength; j++) {
    word = word + alphabet[random(0, alphabet.length)]
  }

  if(library[wordLength]) {
    library[wordLength].push(word);
  } else {
    library[wordLength] = [word];
  }
}


console.log(library);



import "./casino";

var alphabet = "abcdefghijklmnopqrstuvwxyz";
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var wordsAmount = 20;
var minLength = 3;
var maxLength = 10;

var library = {};

for (var i = 0; i < wordsAmount; i++) {
  var wordLength = random(minLength, maxLength);
  var word = '';
  for(var j = 0; j < wordLength; j++) {
    word = word + alphabet[random(0, alphabet.length)]
  }

  if(library[wordLength]) {
    library[wordLength].push(word);
  } else {
    library[wordLength] = [word];
  }
}

for(var key in library) {
  console.log('You have ' + library[key].length + ' words with length of ' + key );
}



import "./casino";

var alphabet = "abcdefghijklmnopqrstuvwxyz";
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var wordsAmount = 20;
var minLength = 3;
var maxLength = 10;

function libraryGenerator(
    fromString, 
    wordsAmount, 
    min, 
    max
) {

}

var library = {};

for (var i = 0; i < wordsAmount; i++) {
  var wordLength = random(minLength, maxLength);
  var word = "";
  for (var j = 0; j < wordLength; j++) {
    word = word + alphabet[random(0, alphabet.length)];
  }

  if (library[wordLength]) {
    library[wordLength].push(word);
  } else {
    library[wordLength] = [word];
  }
}

for (var key in library) {
  console.log(
    "You have " + library[key].length + " words with length of " + key
  );
}


import "./casino";

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function libraryGenerator(fromString, wordsAmount, min, max) {
  var library = {};

  for (var i = 0; i < wordsAmount; i++) {
    var wordLength = random(min, max);
    var word = "";
    for (var j = 0; j < wordLength; j++) {
      word = word + fromString[random(0, fromString.length)];
    }

    if (library[wordLength]) {
      library[wordLength].push(word);
    } else {
      library[wordLength] = [word];
    }
  }

  return library;
}

var alphabet = "abcdefghijklmnopqrstuvwxyz";

var wordsAmount = 20;
var minLength = 3;
var maxLength = 10;

var library = libraryGenerator(alphabet, wordsAmount, minLength, maxLength);

for (var key in library) {
  console.log(
    "You have " + library[key].length + " words with length of " + key
  );
}

console.log(library);


import "./casino";

var alphabet = "abcdefghijklmnopqrstuvwxyz";
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var wordsAmount = 20;
var minLength = 3;
var maxLength = 10;

var library = {};

for (var i = 0; i < wordsAmount; i++) {
  var wordLength = random(minLength, maxLength);
  var word = "";
  for (var j = 0; j < wordLength; j++) {
    word = word + alphabet[random(0, alphabet.length)];
  }

  if (library[wordLength]) {
    library[wordLength].push(word);
  } else {
    library[wordLength] = [word];
  }
}

for (var key in library) {
  console.log(
    "You have " + library[key].length + " words with length of " + key
  );
}









