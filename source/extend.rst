Extending RedPen
================

RedPen users can extend RedPen by creating new Validators. This page describes how to construct your Validators and covers the
basics of the internal document model used by Validators.

Write your Validators
-----------------------

RedPen users can create new validators for themselves or their organization.
Adding validator is simple - just write a class that extends the abstract class **Validator**.

Minimally, we just need to implement the "validate" template method.

The interface is as follows.

.. code-block:: java

    public List<ValidationError> validate(E block);

In the above interface, E is a template that represents a specific block type within a Document. Currently, RedPen supports the
block template classes **Section** and **Sentence**.

Note that the implemented class needs to be in one of the following packages:
'cc.redpen.validator', 'cc.redpen.validator.sentence' or 'cc.redpen.validator.section.'

There are two ways to add your Validator to RedPen.

One way is to add the Validator source file to the RedPen source tree and then build RedPen normally.
This method is simple, but involves bundling the source code for the Validators with the source code for RedPen.

The second way is to create a Validator plugin. Creating a plugin is a little more complicated, but has the advantage that you can then independently manage the source code for your Validator.

Note that in both cases, your Validator's class name must have the suffix **Validator**.

In the next section, we will explain how to add a new Validator to Redpen's source tree, and how to construct a Validator plugin.

Add a Validator in Redpen source
--------------------------------

Let's define a plain Validator (PlainSentenceLengthValidator) - which check if the input sentence is over 100 characters long - and then apply it to RedPen's source tree.

PlainSentenceLengthValidator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We create a PlainSentenceLengthValidator class and specify the package 'cc.redpen.validator.sentence'.
Therefore the class is stored in the 'redpen/redpen-core/src/main/java/cc/redpen/validator/sentence/' directory.

The following is an implementation of this class.

.. code-block:: java

    package cc.redpen.validator.sentence;

    public class PlainSentenceLengthValidator extends Validator<Sentence> {
        public List<ValidationError> validate(Sentence sentence) {
            List<ValidationError> errors = new ArrayList<>();
            if (sentence.content.length() > 100) {
               errors.add(new ValidationError(
                        this.getClass(),
                        "The length of the line exceeds the maximum"));
            }
            return errors;
        }
    }

The class has a validate method that takes a Sentence object as its parameter. When this class is registered in the configuration file, RedPen automatically applies
the validate method to each sentence in each input document.

Include a new Validator
~~~~~~~~~~~~~~~~~~~~~~~

To include the Validator in your RedPen configuration, add the Validator's name, without the "Validator" suffix, to a RedPen configuration file.
For example, to activate our newly created Validator PlainSentenceLengthValidator, include the validator element as follows:

.. code-block:: xml

    <redpen-conf>
        <validator-list>
            ...
            <validator name="PlainSentenceLength" />
            ...
        </validator-list>
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
                 <version>0.6</version>
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
