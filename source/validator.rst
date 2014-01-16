Supported Validators
=============================

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
------------------

SentenceIterator is a meta validator, which contains sub-validators. Sub-validators focus on checking sentences one by one, and never use document global information.  Let's see the supported sub-validators.

SentenceLength
~~~~~~~~~~~~~~~~~

SentenceLength validator checks the length of sentences in input doucment. If the length of the sentence is over the specified maximum length, the validator returns the warning.

.. table::

  ==================== ============= ===================================
  Property             Default Value Description
  ==================== ============= ===================================
  ``"max_lengh"``      50            Maximum length of sentence.
  ==================== ============= ===================================

InvalidExpression
~~~~~~~~~~~~~~~~~~~~~

InvalidExpression validator checks if input sentences contains invalid expressions (words or phrases). If the input sentence contains invalid expressions, this validaor retuns the warning.

.. table::

  ==================== ============= ===================================
  Property             Default Value Description
  ==================== ============= ===================================
  ``"dict"``           None          File name of dictionary.
  ==================== ============= ===================================

The dictionary is a set of words or exressions. The following is the example of the dictionary.

.. code-block:: text

  like
  you know
  hey
  kidding
  ...

SpaceAfterPeriod
~~~~~~~~~~~~~~~~~~~

SpaceAfterPeriod validator checks if there is a white space after the end of input sentences (except for the last sentence of paragraph). If the input sentence does not contain the white space returns the wanring.

CommaNumber
~~~~~~~~~~~~~

CommaNumber validator checks the number of commas.

.. table::

  ==================== ============= ========================================
  Property             Default Value Description
  ==================== ============= ========================================
  ``"max_num"``        4             Maximum number of commas in a sentence.
  ==================== ============= ========================================

WordNumber
~~~~~~~~~~~~~~~

WordNumber validator checks the number of word in one setnece.

.. table::

  ==================== ============= ========================================
  Property             Default Value Description
  ==================== ============= ========================================
  ``"max_num"``        50             Maximum number of words in a sentence.
  ==================== ============= ========================================

SuggestExpression
-------------------

SuggestExpression validator works the sample as the InvalidExpression validator. If the input sentence contains invalid expressions, this validaor retuns the warning and suggest the correct expression.

.. table::

  ==================== ============= ===================================
  Property             Default Value Description
  ==================== ============= ===================================
  ``"dict"``           None          File name of dictionary.
  ==================== ============= ===================================

The dictionary is a TSV file with two columns. First column contains the invalid expression, and the second expression is for suggested expression.

.. code-block:: text

  SVM    Support Vector Machine
  SFBD   Sedue for BigData
  ...

InvalidCharacter
------------------


Some symbols or characters have the difference characters with the same role. For example question mark "? (0x003F)" have another variation "？(0xFF1F)" in the unicode table.
InvalidCharacter checks if input sentences contains invalid characters or symbols. We write the symbols and character settings into character setting file (char-table.xml).
In the setting file, we write the symbols we should use in the document, and in addition the invalid symbols. The details of the character settings are described in the next section.

SpaceWithSymbol
------------------

Some symbols need space before or after them. For example, we add add space left brancket "(". we add the setting in the character setting file (char-table.xml).
