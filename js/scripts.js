String.prototype.pigLatin = function() {
  var consonants = /[^aeiou\W]+/i;
  var vowels = /[aeiou]+/i;
  var string = this;
  string = string.replace(/-/g,"-@");
  var words = string.split(/[\s\@]/);
  words.forEach(function(word, index) {
    if(word[0] === "y") {
      var match = consonants.exec(word);
      word = word.substring(match[0].length);
      words[index] = word + match[0] + "ay";
    } else if(word[0].match(vowels) && word[word.length - 1].match(vowels)) {
      word = word + "yay"
      words[index] = word;
    } else if (word[0].match(vowels)) {
      word = word + "ay"
      words[index] = word;
    } else if (word[0].match(consonants)) {
      var match = /[^aeiouy\W]+/i.exec(word);
      word = word.substring(match[0].length) + match[0] + "ay";
      words[index] = word;
    }

    var punctuation = [".",",","?","!","-"," "];
    for(var i = 0; i < word.length - 1; i++) {
      if(punctuation.includes(word[i])) {
        var temp = word[i];
        word = word.slice(0,i) + word.slice(i+1) + temp;
        words[index] = word;
      }
    }
  });
  return words.join(" ").replace(/-\s/,"-");
}

$(function() {
  $("#pig-latinify").on("click", function(e) {
    e.preventDefault();
    var userInput = $("#user-input").val();
    var result = userInput.pigLatin();
    $("#show-result").empty();
    $("#show-result").append('<p>' + result + '</p>');
    $("#user-input").val('');
  });
});
