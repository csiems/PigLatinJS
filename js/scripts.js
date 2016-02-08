String.prototype.pigLatin = function() {
  var consonants = /[^aeiou\W]+/i
  var vowels = /[aeiou]+/i
  var specialChars = /[^\s\w\']+(?=\w)/g;
  this.replace(specialChars, "");
  var words = this.split(" ");
  
  words.forEach(function(word, index) {
    if(word[0].match(vowels)) {
      words[index] = word + "ay";
    } else if (word[0].match(consonants)) {
      var match = consonants.exec(word);
      word = word.substring(match[0].length);
      words[index] = word + match[0] + "ay";
    }
  });
  return words.join(" ");
}
