Extending RedPen
================

RedPen users can extend RedPen by creating new Validators. This page describes how to construct your Validators and covers the
basics of the internal document model used by Validators.

RedPen users can create new validators for themselves or their organization.
Adding validator is simple - just write a class that extends the abstract class **Validator**.

Extending Validators
---------------------

There are several methods which users can implment for their methods (validate, prevalidate and init).

validate methods
~~~~~~~~~~~~~~~~~

Minimally, we just need to implement the "validate" template method.

Users need to implement the one of validate methods provided by the Validator class.
Currently there are three validate methods with three different parameters. 

.. code-block:: java

    /**
     * validate the input document and returns the invalid points.
     * {@link cc.redpen.validator.Validator} provides empty implementation. Validator implementation validates documents can override this method.
     *
     * @param document input
     */
     public void validate(Document document)
     
     /**
      * validate the input document and returns the invalid points.
      * {@link cc.redpen.validator.Validator} provides empty implementation. Validator implementation validates sentences can override this method.
      *
      * @param sentence input
      */
      public void validate(Sentence sentence)
      
     /**
      * validate the input document and returns the invalid points.
      * {@link cc.redpen.validator.Validator} provides empty implementation. Validator implementation validates sections can override this method.
      *
      * @param section input
      */
      public void validate(Section section)

Note that the implemented class needs to be in one of the following packages:
'cc.redpen.validator', 'cc.redpen.validator.sentence' or 'cc.redpen.validator.section.'

prevalidate method
~~~~~~~~~~~~~~~~~~~~

the preValidate method called before validate method is run. This method is useful to create the prerequisite to run validate method.
There are two prevalidte methods variations which have different parameters.

.. code-block:: java

    /**
     * Process input blocks before run validation. This method is used to store
     * the information needed to run Validator before the validation process.
     *
     * @param sentence input sentence
     */
     public void preValidate(Sentence sentence)
     
     /**
      * Process input blocks before run validation. This method is used to store
      * the information needed to run Validator before the validation process.
      *
      * @param section input section
      */
      public void preValidate(Section section)

init method
~~~~~~~~~~~~

The init method is used to load the confiuration for the Validators.

.. code-block:: java

     /**
      * Validation initialization, called after the configuration and symbol tables have been assigned
      *
      * @throws RedPenException
      */
      protected void init() throws RedPenException

For example, **SentencelengthValidator** has a configuration **max_len**, which to specifies the maximum length of sentences in input documents.
Following configuration specifies the maximum length to 200.

.. code-block:: xml

    <redpen-conf>
        <validators>
            ...
            <validator name="SentenceLength">
                <property name="max_len" value="200"/>
	    </validator>
            ...
        </validators>
    </redpen-conf>

SentenceLengthValidator load the max_len value with init methods as follows.

.. code-block:: java

	protected void init() throws RedPenException {
	        this.maxLength = getConfigAttributeAsInt("max_len", DEFAULT_MAX_LENGTH);
	 }

In the above code, getConfigAttributeAsInt loads the value of the max_len property as integer.

Implement Validators
---------------------

There are two ways to add your Validator to RedPen.

One way is to add the Validator source file to the RedPen source tree and then build RedPen normally.
This method is simple, but involves bundling the source code for the Validators with the source code for RedPen.

The second way is to create a Validator plugin. Creating a plugin has the advantage that you can then independently manage the source code for your Validator.

Note that in both cases, your Validator's class name must have the suffix **Validator**.

In the next section, we will explain how to add a new Validator to Redpen's source tree, and how to construct a Validator plugin.

Add a Validator in Redpen source
--------------------------------

Let's define a plain Validator (SentenceLengthValidator) - which check if the input sentence is over 100 characters long - and then apply it to RedPen's source tree.

SentenceLengthValidator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We create a PlainSentenceLengthValidator class and specify the package 'cc.redpen.validator.sentence'.
Therefore the class is stored in the 'redpen/redpen-core/src/main/java/cc/redpen/validator/sentence/' directory.

The following is an implementation of this class.

.. code-block:: java

    package cc.redpen.validator.sentence;

    /**
     * Validate input sentences contain more characters more than specified.
     */
     final public class PlainSentenceLengthValidator extends Validator {
         /**
          * Default maximum length of sentences.
	  */
	  public static final int DEFAULT_MAX_LENGTH = 30;
          private int maxLength = DEFAULT_MAX_LENGTH;
	  
          @Override
	  public void validate(Sentence sentence) {
	       if (sentence.getContent().length() > maxLength) {
	           addValidationError(sentence, sentence.getContent().length(), maxLength);
	        }
	  }
	  
          @Override
          protected void init() throws RedPenException {
                this.maxLength = getConfigAttributeAsInt("max_len", DEFAULT_MAX_LENGTH);
          }
     }

The class has a validate method that takes a Sentence object as its parameter.
When this class is registered in the configuration file, RedPen automatically applies
the validate method to each sentence in each input document.

Include a new Validator
~~~~~~~~~~~~~~~~~~~~~~~

To include the Validator in your RedPen configuration, add the Validator's name, without the "Validator" suffix, to a RedPen configuration file.
For example, to activate our newly created Validator PlainSentenceLengthValidator, include the validator element as follows:

.. code-block:: xml

    <redpen-conf>
        <validator>
            ...
            <validator name="PlainSentenceLength" />
            ...
        </validator>
    </redpen-conf>

We would then run RedPen normally, using this configuration file.

Create a Validator plugin
~~~~~~~~~~~~~~~~~~~~~~~~~

When creating a Validator plugin, it is often easier to start by using another plugin's project as a template.

As an example, I (takahi-i) have written a simple Validator plugin `hankaku_kana_validator <https://github.com/takahi-i/hankaku-kana-validator>`_.

The most significant file for the plugin is pom.xml which exists at the top of the project. This file is the Maven configuration file,
which is a popular software project management tool for Java.

The following is the content of pom.xml:

.. code-block:: xml

    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
        <modelVersion>4.0.0</modelVersion>
        <groupId>redpen.cc</groupId>
        <artifactId>hankaku-kana-validator</artifactId>
        <version>1.0-SNAPSHOT</version>
        <name>hankaku-kana-validator</name>
        <url>http://maven.apache.org</url>
        <dependencies>
             <dependency>
                 <groupId>redpen.cc</groupId>
                 <artifactId>redpen-core</artifactId>
                 <version>1.2</version>
                 <scope>system</scope>
                 <systemPath>${project.basedir}/lib/redpen-core-0.6.jar</systemPath>
             </dependency>
        </dependencies>
    </project>

Usually you do not need to change the pom.xml file, except for the contents of the **artifact-id** and **name** elements. You should alter the name to fit the
function of your Validator.

After changing pom.xml, you should delete the the existing validator file (HankakuKanaValidator.java) from "main/java/cc/redpen/validator/sentence". Then, put your
Validator's source file in "main/java/cc/redpen/validator/sentence" or "main/java/cc/redpen/validator/section". As mentioned above, your Validator must extend the RedPen Validator class.

Once you have included your Validator implementation, you can build the plugin.

.. code-block:: bash

  $ mvn install

Including a user-defined Validator plugin
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When you have successfully built your Validator plugin, you can use it by copying the plugin's jar file from the **target** directory to
a directory in RedPen's classpath, such as the RedPen library directory ($REDPEN_HOME/lib).
Once copied, you can add your Validator to the configuration file as described above. Remember to remove the **Validator** suffix from the name you enter in redpen-config.xml.

Model Structure
-----------------

This section describes the internal document model structure generated by parser objects.

Generated RedPen documents consist of several blocks, which represent the elements of a document.

* **DocumentCollection** represents a set of one or more files that contain a Document.
* **Document** represents a single file which contains one or more Sections.
* **Section** contains several blocks (Header, Paragraph, ListBlock). Except for Header, each Section can contain multiple blocks. A Section may also specify the section level and its subsections.
* **Header** represents header sentences that contain a list of Sentence objects.
* **Paragraph** contains one or more sentences.
* **ListBlock** contains a set of ListElement objects.

The following image shows the document model used by RedPen.

.. image:: model.jpg
   :height: 500
   :width: 700
