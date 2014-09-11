Append Validators
===================

RedPen users can create new validators needed for themselves or their organizations. 
Adding validator is simple. Users just add a class which extends one abstract class, **Validator**.

Specifically we just need to add the "validate" method, which is a templete method.
The following is the interface.

.. code-block:: java

    public List<ValidationError> validate(E block);

In the above interface, E is a template which represents a block type in a Document. Current RedPen supports
Sentence and Section class as the block template class.

Note that the package of implemented class need to be one of the packages,
'cc.redpen.validator', 'cc.redpen.validator.sentence' or 'cc.redpen.validator.section.'

Example: plain sentence length validator
---------------------------------------------

Let's define a plain validator which check if the input sentence is over 100 characters and then apply it.

Define PlainSentenceLengthValidator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We define  a PlainSentenceLengthValidator class. We store the class in the 'cc.redpen.validator.sentence',
and therefore the class is store in 'redpen/redpen-core/src/main/java/cc/redpen/validator/sentence/' directory.

The following is the implemented class.

.. code-block:: java

    public class PlainSentenceLengthValidator extends Validator<Sentence> {
        public List<ValidationError> validate(Sentence sentence) {
            List<ValidationError> errors = new ArrayList<>();
            if (sentence.content.length() > 100) {
               errors.add(new ValidationError(
                        this.getClass(),
                        "The length of the line exceeds the maximum "));
            }
            return errors;
        }
    }

As we see, the this class has a validate method taking a Sentence object as the parameter. When this class is registered in the configuration file,
the validate method is automatically applied to all of the sentences in the input documents by RedPen.

Apply PlainSentenceLengthValidator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To apply the validtor, user just add the validator name removing the Validator suffix. For example, To activate the newly created the validator, PlainSentenceLengthValidator,
we just add the PlainSentenceLength in the configuration file as follows. Then run RedPen with the confiration file.

.. code-block:: xml

    <redpen-conf>
        <validator-list>
            <validator name="PlainSentenceLength" />
        </validator-list>
    </redpen-conf>
