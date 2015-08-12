Supported Validators
======================

RedPen supports the following validators.

- SentenceLength
- InvalidExpression
- InvalidWord
- SpaceBeginningOfSentence
- CommaNumber
- WordNumber
- SuggestExpression
- InvalidSymbol
- SymbolWithSpace
- KatakanaEndHyphen
- KatakanaSpellCheck
- SectionLength
- SpaceBetweenAlphabeticalWord
- ParagraphNumber
- ParagraphStartWith
- Contraction
- Spelling
- DoubledWord
- SuccessiveWord
- DuplicatedSection
- JapaneseStyle

SentenceLength
~~~~~~~~~~~~~~~~~

SentenceLength validator checks the length of sentences in the input document. If the length of the sentence is greater than the specified maximum length, the validator generates a warning.

.. table::

  ==================== ============= ===================================
  Property             Default Value Description
  ==================== ============= ===================================
  ``"max_len"``        50            Maximum length of sentence.
  ==================== ============= ===================================

InvalidExpression
~~~~~~~~~~~~~~~~~~~~~

InvalidExpression validator checks if input sentences contain invalid expressions (words or phrases). If the input sentence contains invalid expressions, the validator generates a warning.

.. table::

  ==================== ============= ===========================================
  Property             Default Value Description
  ==================== ============= ===========================================
  ``"dict"``           None          File name of dictionary.
  ``"list"``           None          List of invalid expression split by comma.
  ==================== ============= ===========================================

The dictionary is a set of words or expressions. The following is an example of a dictionary.

.. code-block:: text

  like
  you know
  hey
  kidding
  what the hell
  ...

InvalidWord
~~~~~~~~~~~~~~~~~~~~~

InvalidWord validator checks if input sentences contain invalid words. If the input sentence contains invalid words, the validator generates a warning.

.. table::

  ==================== ============= ===========================================
  Property             Default Value Description
  ==================== ============= ===========================================
  ``"dict"``           None          File name of dictionary.
  ``"list"``           None          List of invalid expression split by comma.
  ==================== ============= ===========================================

The dictionary is a set of words. The following is an example of a dictionary.

.. code-block:: text

  like
  hey
  wow
  ...

SpaceBeginningOfSentenceValidator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

SpaceBeginningOfSentenceValidator validator checks if there is a white space at the end of input sentences (except for the very last sentence of paragraph). If the input sentence does end with a white space, a warning is given.

CommaNumber
~~~~~~~~~~~~~

CommaNumber validator checks the number of commas in a sentence.

.. table::

  ==================== ============= ========================================
  Property             Default Value Description
  ==================== ============= ========================================
  ``"max_num"``        4             Maximum number of commas in a sentence.
  ==================== ============= ========================================

WordNumber
~~~~~~~~~~~~~~~

WordNumber validator checks the number of words in one setnece.

.. table::

  ==================== ============= ========================================
  Property             Default Value Description
  ==================== ============= ========================================
  ``"max_num"``        50             Maximum number of words in a sentence.
  ==================== ============= ========================================

SuggestExpression
~~~~~~~~~~~~~~~~~~~~

SuggestExpression validator works in a similar way to the InvalidExpression validator. If the input sentence contains invalid expressions, this validator returns a warning suggesting the correct expression.

.. table::

  ==================== ============= ===================================
  Property             Default Value Description
  ==================== ============= ===================================
  ``"dict"``           None          File name of dictionary.
  ==================== ============= ===================================

The dictionary is a TSV file with two columns. First column contains the invalid expression, and the second column contains a suggested replacement expression.

.. code-block:: text

  SVM    Support Vector Machine
  LLVM   Low Level Virtual Machine
  ...

InvalidSymbol
~~~~~~~~~~~~~~~~~~

Some symbols or characters have alternate characters with the same role. For example question mark "? (0x003F)" has another unicode variation "？(0xFF1F)".
InvalidSymbol checks if input sentences contains invalid characters or symbols. The symbols and character settings are entered into the character setting file (char-table.xml).
In this file, we write the symbols we should use in the document and their invalid counterparts. The details of these settings is described in the next section.

SymbolWithSpace
~~~~~~~~~~~~~~~

Some symbols need space before or after them. For example, if we want to ensure a space is added before a left parentheses "(", we could add this preference to the character setting file (char-table.xml).

KatakanaEndHyphen
~~~~~~~~~~~~~~~~~~

KatakanaEndHyphen validator checks the end hyphens of Katakana words in **Japanese** documents.
Japanese Katakana words have variations in their end hyphen. For example, "computer" is written in Katakana as
"コンピュータ" (without hyphen), and "コンピューター" (with hypen).
This validator checks to ensure that Katakana words match the predefined standard. See JIS Z8301, G.6.2.2 b) G.3.

- a: Words of 3 characters or more cannot have an end hyphen.
- b: Words of 2 characters or less can have an end hyphen.
- c: A compound word should apply **a** and **b** to each component word.
- d: In the cases from **a** to **c**, the length of a syllable which is represented by a hyphen is 1 except for Youon.

KatakanaSpellCheck
~~~~~~~~~~~~~~~~~~~~~

KatakanaSpellCheck validator checks if Katakana words have very similar words with different spellings in the document.
For example, if the Katakana word "インデックス" and the variation "インデクス" exist within the same document, this validator will return a warning.

SectionLength
~~~~~~~~~~~~~~


SectionLength validator checks the maximum number of words allowed in an section.

.. table::

  ==================== ============= ========================================
  Property             Default Value Description
  ==================== ============= ========================================
  ``"max_num"``        1000           Maximum number of words in a section.
  ==================== ============= ========================================

ParagraphNumber
~~~~~~~~~~~~~~~~

ParagraphNumber validator checks the maximum number of paragraphs allowed in one section.

.. table::

  ====================== ============= ========================================
  Property               Default Value Description
  ====================== ============= ========================================
  ``max_num"``           5             Maximum number of paragraphs in a seciton.
  ====================== ============= ========================================

ParagraphStartWith
~~~~~~~~~~~~~~~~~~~

ParagraphStartWith validator checks to see if the characters at the beginning of paragraphs conforms to the correct style.

.. table::

  ======================== ============= ========================================
  Property                 Default Value Description
  ======================== ============= ========================================
  ``start_with``           " "           Characters in the beginning of paragraphs.
  ======================== ============= ========================================

SpaceBetweenAlphabeticalWord
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

SpaceBetweenAlphabeticalWord validator checks that alphabetic words are surrounded with whitespace. This validator
is used in non-latin languages such as Japanese or Chinese.

Contraction
~~~~~~~~~~~~

Contraction validator throws an error when contractions are used in a document in which more than half of the verbs are written in non-contracted form.

Spelling
~~~~~~~~~~~~

Spelling validator throws an error if there are spelling mistakes in the input documents. This validator only works for English documents.


DoubledWord
~~~~~~~~~~~~~~

DoubledWord validator throws an error if a word is used more than once in a sentence. For example, if an input document contains the following sentence, the validator will report an error since **good** is used twice.

.. code-block:: text

  this good item is very good.

.. table::

  ======================== ============= ========================================
  Property                 Default Value Description
  ======================== ============= ========================================
  ``"dict"``               None          File name of skip list dictionary.
  ``"list"``               None          List of skip words split by comma.
  ======================== ============= ========================================

SuccessiveWord
~~~~~~~~~~~~~~~

SuccessiveWord validator throws an error if the same word is used twice in succession. For example, if an input document contains the following sentence, the validator will report an error since **is** is used twice in succession.

.. code-block:: text

  the item is is very good. 

DuplicatedSection
~~~~~~~~~~~~~~~~~~

DuplicatedSection validator throws an error if there are section pairs which have almost the same content.

JapaneseStyle
~~~~~~~~~~~~~~~~

JapaneseStyle validator reports errors if the input file contains both "dearu" and "desu-masu" style.
