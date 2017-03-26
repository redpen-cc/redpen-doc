var MIN_LENGTH = 100;
var MAX_LENGTH = 1000;

function validateSentence(sentence) {
  if (sentence.getContent().length() < MIN_LENGTH) {
    addError("Sentence is shorter than "
      + MIN_LENGTH + " characters long.", sentence);
  }
  if (sentence.getContent().length() > MAX_LENGTH) {
    addError("Sentence is longer than " + MAX_LENGTH
      + " characters long.", sentence);
  }
}
