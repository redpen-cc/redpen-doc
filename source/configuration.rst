Configuration
==============

DocumentValidator has two configuration files, one is for adding Validators (validator-conf.xml) and the other is for defining characters and symbols for input doucments (char-table.xml).

Setting Validators (validator-conf.xml)
-----------------------------------------

DocumentValidator have validator-conf.xml for registrating Validators. When a user add a validaor for a checking point into validator-conf.xml, then Document validator apply the added Validator to the input document.

The following is the sample validator-conf.xml file.

::

  <configuration name="Validator">
    <component name="SentenceIterator">
      <component name="SentenceLength">
        <property name="max_length" value="50"/>
      </component>
      <component name="SpaceAfterPeriod" />
      <component name="InvalidCharacter" />
      <component name="SpaceWithSymbol" />
    </component>
    <component name="SectionLength">
      <property name="max_char_number" value="500"/>
    </component>
    <component name="ParagraphStartWith" />
  </configuration>

A "component" blcok represents a validator, which check one aspect of the input document. For instance, Adding "SectionLength" component block into the configuration file, DocuemntValidator check the length of sections in input documents.

As we see some components have "property" to configure the validator specific settings. "SectionLength" validator has maximum character number in one section. Some validator has sub-validators. SentenceIterator which validates all the input sentences in the input documents, for example contains sub-validators such as "SentenceLentgh", "InvalidCharacters".

We will see the all the supported validators in the next section.

Validators
------------

Document Validator supports following validators.

- SentenceIterator

 - SentenceLength
 - InvalidExpression
 - SpaceAfterPeriod
 - CommaNumber
 - WordNumber
 - SuggestExpression
 - InvalidCharacter
 - SpaceWithSymbol

- SectionLength
- MaxParagraphNumber
- ParagraphStartWith

SentenceIterator
~~~~~~~~~~~~~~~~~

SentenceIterator is a meta validator, which contains sub-validators. Sub-validators focus on checking sentences one by one, and never use document global information.  Let's see the supported sub-validators.

SentenceLength
^^^^^^^^^^^^^^^

SentenceLength validator checks the length of sentences in input doucment. If the length of the sentence is over the specified maximum length, the validator returns the warning.

.. table::

  ==================== ============= ===================================
  Property             Default Value Description
  ==================== ============= ===================================
  ``"max_lenght"``     50            Maximam length of sentence.
  ==================== ============= ===================================

InvalidExpression
^^^^^^^^^^^^^^^^^^

InvalidExpression validator checks if input sentences use invalid expressions (words or phrases). If the input sentence contains invalid expressions, this validaor retuns the warning.

.. table::

  ==================== ============= ===================================
  Property             Default Value Description
  ==================== ============= ===================================
  ``"dict"``           None          File name of dictionary.
  ==================== ============= ===================================

The dictionary is a set of words or exressions. The following is the example of the dictionary.

::

  like
  you know
  hey
  kidding
  ...

SpaceAfterPeriod
^^^^^^^^^^^^^^^^^^

SpaceAfterPeriod validator checks if there is a white space after the end of input sentences (except for the last sentence of paragraph). If the input sentence does not contain the white space returns the wanring.

CommaNumber
^^^^^^^^^^^^^^

CommaNumber validator checks the number of commas.

.. table::

  ==================== ============= ========================================
  Property             Default Value Description
  ==================== ============= ========================================
  ``"max_num"``        4             Maximam number of commas in a sentence.
  ==================== ============= ========================================

WordNumber
^^^^^^^^^^^^

WordNumber validator checks the number of word in one setnece.

.. table::

  ==================== ============= ========================================
  Property             Default Value Description
  ==================== ============= ========================================
  ``"max_num"``        50             Maximam number of words in a sentence.
  ==================== ============= ========================================

SuggestExpression
^^^^^^^^^^^^^^^^^^

SuggestExpression validator works the sample as the InvalidExpression validator. If the input sentence contains invalid expressions, this validaor retuns the warning and suggest the correct expression.

.. table::

  ==================== ============= ===================================
  Property             Default Value Description
  ==================== ============= ===================================
  ``"dict"``           None          File name of dictionary.
  ==================== ============= ===================================

The dictionary is a TSV file with two columns. First column contains the invalid expression, and the second expression is for suggested expression.

::

  SVM    Support Vector Machine
  SFBD   Sedue for BigData
  ...

InvalidCharacter
^^^^^^^^^^^^^^^^^

Some symbols or characters have the difference characters with the same role. For example question mark "? (0x003F)" have another variation "？(0xFF1F)" in the unicode table.
InvalidCharacter checks if input sentences contains invalid characters or symbols. We write the symbols and character settings into character setting file (char-table.xml).
In the setting file, we write the symbols we should use in the document, and in addition the invalid symbols. The details of the character settings are described in the next section.

SpaceWithSymbol
^^^^^^^^^^^^^^^^^^^

Some symbols need space before or after them. For example, we add add space left brancket "(". we add the setting in the character setting file (char-table.xml).

Setting characters (char-table.xml)
-------------------------------------

Users add configure settings for characters and symbols with char-table.xml. In the file we add the symbols to use in the document. The following is the sample.

::

  <character-table>
    <character name="EXCLAMATION_MARK" value="!" invalid-chars="！" after-space="true" />
    <character name="LEFT_QUATATION_MARK" value="\'"  invalid-chars="“" before-space="true" />
    <character name="RIGHT_QUATATION_MARK" value="\'"  invalid-chars="”" after-space="true" />
    <character name="NUMBER_SIGN" value="#" invalid-chars="＃" after-space="true" />
    <character name="FULL_STOP" value="." invalid-chars="．。" after-space="true" />
    <character name="COMMA" value="," invalid-chars="、，" after-space="true" />
  </character-table>

