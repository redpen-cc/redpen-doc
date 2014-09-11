Append Validators
===================

RedPen users can create new validators needed for themselves or their organizations. 
Adding validator is simple. Users just add a class which extends one abstract class, **Validator**.

.. code-block:: java

    public List<ValidationError> validate(Sentence sentence) {
        List<ValidationError> errors = new ArrayList<>();
        if (sentence.content.length() > 100) {
           errors.add(new ValidationError(
                    this.getClass(),
                    "The length of the line exceeds the maximum "));
        }
        return errors;
    }
