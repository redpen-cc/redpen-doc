Supported Validators
======================

RedPen supports the following validators.

- SentenceLength
- InvalidExpression
- SpaceAfterPeriod
- CommaNumber
- WordNumber
- SuggestExpression
- InvalidSymbol
- SpaceWithSymbol
- KatakanaEndHyphen
- KatakanaSpellCheck
- SectionLength
- SpaceBetweenAlphabeticalWord
- ParagraphNumber
- ParagraphStartWith
- Contraction
- Spelling
- DoubledWord

SentenceLength
~~~~~~~~~~~~~~~~~

SentenceLength validator checks the length of sentences in input doucment. If the length of the sentence is over the specified maximum length, the validator returns the warning.

.. table::

  ==================== ============= ===================================
  Property             Default Value Description
  ==================== ============= ===================================
  ``"max_len"``        50            Maximum length of sentence.
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
~~~~~~~~~~~~~~~~~~~~

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
  LLVM   Low Level Virtual Machine
  ...

InvalidSymbol
~~~~~~~~~~~~~~~~~~

Some symbols or characters have the difference characters with the same role. For example question mark "? (0x003F)" have another variation "？(0xFF1F)" in the unicode table.
InvalidSymbol checks if input sentences contains invalid characters or symbols. We write the symbols and character settings into character setting file (char-table.xml).
In the setting file, we write the symbols we should use in the document, and in addition the invalid symbols. The details of the character settings are described in the next section.

SpaceWithSymbol
~~~~~~~~~~~~~~~~

Some symbols need space before or after them. For example, we add add space left brancket "(". we add the setting in the character setting file (char-table.xml).

KatakanaEndHyphen
~~~~~~~~~~~~~~~~~~

KatakanaEndHyphen validator checks the end hyphens of Katakana words in **Japanese** documents.
Japanese Katakana words have variations in end hyphen. For example, "computer" is written in Katakana by 
"コンピュータ (without hyphen) ", and "コンピューター (with hypen) ".
This validator check if Katakana words ending format is match the predefined standard. See JIS Z8301, G.6.2.2 b) G.3.

- a: Words of 3 characters or more can not have the end hyphen.
- b: Words of 2 characters or less can have the end hyphen.
- c: A compound word applies **a** and **b** for each component.
- d: In the cases from **a** to **c**, the length of a syllable which are represented as a hyphen, flip syllable, and stuffed syllable is 1 except for Youon.

KatakanaSpellCheck
~~~~~~~~~~~~~~~~~~~~~

KatakanaSpellCheck validator checks the Katakana words has the very similar words in the document.
For example when there is a Katakana word "インデックス" and the variation "インデクス" in the same document, this validator returns the warning.

SectionLength
~~~~~~~~~~~~~~


SectionLength validator checks the character number of input seciton.

.. table::

  ==================== ============= ========================================
  Property             Default Value Description
  ==================== ============= ========================================
  ``"max_num"``        1000           Maximum number of words in a seciton.
  ==================== ============= ========================================

ParagraphNumber
~~~~~~~~~~~~~~~~

ParagraphNumber validator checks the number of paragraph in one input section.

.. table::

  ====================== ============= ========================================
  Property               Default Value Description
  ====================== ============= ========================================
  ``max_num"``           5             Maximum number of paragraphs in a seciton.
  ====================== ============= ========================================

ParagraphStartWith
~~~~~~~~~~~~~~~~~~~

ParagraphStartWith validator checks if the characters in the beggning of paragraphs follows the style.

.. table::

  ======================== ============= ========================================
  Property                 Default Value Description
  ======================== ============= ========================================
  ``start_with``           " "           Characters in the beggning of paragraphs.
  ======================== ============= ========================================

SpaceBetweenAlphabeticalWord
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

SpaceBetweenAlphabeticalWord validator checks if the alphabet words are surrounded with white spaces. This validator
is used in Non-latin languages such as Japanese or Chrinese.

Contraction
~~~~~~~~~~~~

Contraction validator throws a error when contractions are used in the documents in which more than half of verbs are written in non contracted form.

Spelling
~~~~~~~~~~~~

Spelling validator throws a error if threre are spelling mistaks in the input documents. This validator works only in English documents.


DoubledWord
~~~~~~~~~~~~~~

DoubledWord validator throws a erro if a word is used more than once. For example a input document has a following sentence, the validator reports a error since **good** is used twice.

.. code-block:: text

  the good item is very good. 

.. table::

  ======================== ============= ========================================
  Property                 Default Value Description
  ======================== ============= ========================================
  ``"dict"``               None          File name of skip list dictionary.
  ======================== ============= ========================================

