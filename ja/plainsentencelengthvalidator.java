package cc.redpen.validator.sentence;

/**
 * Validate input sentences contain more characters more than specified.
 */
public class PlainSentenceLengthValidator extends Validator {

  /**
   * Default constructor initializes properties with their default values.
   */
  public PlainSentenceLengthValidator() {
    super("max_len", 30); // Default maximum length of sentences.

  @Override
  public void validate(Sentence sentence) {
    if (sentence.getContent().length() > getInt("max_len")) {
      addValidationError(sentence, sentence.getContent().length(), maxLength);
    }
  }
}
