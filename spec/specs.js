describe('String', function() {
  it("adds pig latin method to string", function() {
    expect("test string".pigLatin()).isFunction;
  });

  it("adds 'ay' to words that start with a vowel", function() {
    expect("enormous".pigLatin()).to.equal("enormousay");
  });

  it("if string starts with consonants move consonants to end and add 'ay'", function() {
    expect("this string".pigLatin()).to.equal("isthay ingstray");
    expect("I'll take therapists for $500, Alex".pigLatin()).to.equal("I'llay aketay erapiststhay orfay $500, Alexay");
  });

  it("if string starts with y count it as a consonant", function() {
    expect("ystari".pigLatin()).to.equal("ariystay");
  });

  it("it handles vowels at beginning and end", function() {
    expect("area".pigLatin()).to.equal("areayay");
  });

  it("it handles ys later in the word", function() {
    expect("myrrh".pigLatin()).to.equal("yrrhmay");
  });

  it("handles punctuation correctly", function() {
    expect("this.".pigLatin()).to.equal("isthay.");
  })

  it("handles hyphenated words correctly", function() {
    expect("bi-mart".pigLatin()).to.equal("ibay-artmay");
  })

});
