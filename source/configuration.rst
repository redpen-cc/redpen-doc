Configuration
==============

DocumentValidator has two configuration files, one is for adding Validators (validator-conf.xml) and the other is for defining characters and symbols for input doucments (char-table.xml).

Setting Validators (validator-conf.xml)
-----------------------------------------

DocumentValidator has validator-conf.xml for registrating Validators. If a user add a validaor for one checking point into validator-conf.xml, then DocumentValidator applies the added Validator to the input document.

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

A "component" block represents a validator, which checks one aspect of the input document. For instance, adding "SectionLength" component block into the configuration file, DocuemntValidator checks the length of sections in input documents.

As we see some components have "property" to configure the validator specific settings. For example, the "SectionLength" validator has maximum character number in one section. Some validator has sub-validators. In the above example, "SentenceIterator" which validates all the input sentences in the input documents, contains sub-validators such as "SentenceLentgh", "InvalidCharacters".

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
  ``"max_lengh"``      50            Maximam length of sentence.
  ==================== ============= ===================================

InvalidExpression
^^^^^^^^^^^^^^^^^^

InvalidExpression validator checks if input sentences contains invalid expressions (words or phrases). If the input sentence contains invalid expressions, this validaor retuns the warning.

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

Users add configure settings for characters and symbols with char-table.xml. char-table.xml is used to override default setting of characters. default setting are described in the following section. In the file, we add the symbols to use in the document. Character table has one character-table element and the character-table element has many "character" elements. "character" element define the character used in the written documents.

The following table is the properties of character element.

.. table::

  ==================== ============= ============= ===================================
  Property             Mandatory     Default Value Description
  ==================== ============= ============= ===================================
  `name`               true          none          Name of the character
  `value`              true          none          Value of the character
  `before-space`       false         false         Need space before the character
  `after-space`        false         false         Need space after the character
  `invalid-chars`      false         ""            List of invalid characters
  ==================== ============= ============= ===================================


Sample: Setting characters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the following setting, we can see that character-table has define 6 characters. First character element define exlamation mark as '!'. Second element , FULL_STOP defines period as "." and in addition the character need space after the period. Third element define comma as ',' and also define invalid characters '、' and '，'. Here invalid characters represents the variations of registered character. For example, In japanese FULL_STOP can be not only '.' but also '。'. If we registered invalid-chars, we can prevents the mixture usages of character variations.

::

  <character-table>
    <character name="EXCLAMATION_MARK" value="!" />
    <character name="FULL_STOP" value="." after-space="true" />
    <character name="COMMA" value="," invalid-chars="、，" after-space="true" />
  </character-table>

Default Setting
~~~~~~~~~~~~~~~~~

The following table shows the defalt symbol settings. In the table, first column shows the names of symbols, second colums (Value) shows the character. Colums 'NeedBeforeSpace' and 'NeedAfterSpace' represent that the character should have space before or after it respectively.

.. table::

  ============================= ============= ================== ================== =============================================
  Character                     Value         NeedBeforeSpace    NeedAfterSpace     Description
  ============================= ============= ================== ================== =============================================
  `FULL_STOP`                   '.'           false              true               Period of sentence
  `SPACE`                       ' '           false              false              White space between words
  `EXCLAMATION_MARK`            '!'           false              true               Exclamation mark
  `NUMBER_SIGN`                 '#'           false              false              Number sign
  `DOLLAR_SIGN`                 '$'           false              false              Dollar sign
  `PERCENT_SIGN`                '%'           false              false              Percent sign
  `QUESTION_MARK`               '?'           false              true               Question mark
  `AMPERSAND`                   '&'           false              true               Ampersand
  `LEFT_PARENTHESIS`            '('           true               false              Left parenthesis
  `RIGHT_PARENTHESIS`           ')'           false              true               Right parenthesis
  `ASTERISK`                    '*'           false              false              Asterrisk
  `COMMA`                       ','           false              true               Comma
  `PLUS_SIGN`                   '+'           false              false              Plus sign
  `HYPHEN_SIGN`                 '-'           false              false              Hyphenation
  `MINUS_SIGN`                  '-'           false              false              Minus sign (NOTE: identical to HYPHEN_SIGN)
  `SLASH`                       '/'           false              false              Slash
  `COLON`                       ':'           false              true               Colon
  `SEMICOLON`                   ';'           false              true               Semicolon
  `LESS_THAN_SIGN`              '<'           false              false              Less than sign
  `GREATER_THAN_SIGN`           '>'           false              false              Greater than sign
  `EQUAL_SIGN`                  '='           false              false              Equal sign
  `AT_MARK`                     '@'           false              false              At mark
  `LEFT_SQUARE_BRACKET`         '['           true               false              Left square bracket
  `RIGHT_SQUARE_BRACKET`        ']'           false              true               Right square bracket
  `BACKSLASH`                   '\'           false              false              Backslash
  `CIRCUMFLEX_ACCENT`           '^'           false              false              Circumflex accent
  `LOW_LINE`                    '_'           false              false              Low line (under bar)
  `LEFT_CURLY_BRACKET`          '{'           true               false              Left curly bracket
  `RIGHT_CURLY_BRACKET`         '}'           true               false              Right curly bracket
  `VERTICAL_VAR`                '|'           false              false              Vertical bar
  `TILDE`                       '~'           false              false              Tilde
  `LEFT_SINGLE_QUOTATION_MARK`  '‘'           false              false              left single quotation mark
  `RIGHT_SINGLE_QUOTATION_MARK` '’'           false              false              right single quotation mark
  `LEFT_DOUBLE_QUOTATION_MARK`  '“'           false              false              left double quotation mark
  `RIGHT_DOUBLE_QUOTATION_MARK` '”'           false              false              right double quotation mark
  ============================= ============= ================== ================== =============================================
