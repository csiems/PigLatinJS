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
});
