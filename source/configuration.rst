Configuration
==============

RedPen has a configuration file, which has two blocks. One is for validators configuration and the other is for overriding characters and symbols for input documents.

Configuration file
------------------------

RedPen has one configuration file, which does the all settings needed to work RedPen with input documents.
The main configuration file is a xml file which has the root block "redpen-conf" and configuration block contains
two sub blocks "validator-list" and "symbol-table".

The validator-list block specifies a setting file to add validators, and
symbol-table block specifies the input language such as en, ja and the character setting file.
For overriding the default character set for the specified language,
we can specify the character configuration file to override the default character settings.

The following is an example of main configuration file.

.. code-block:: xml

    <redpen-conf>
        <validator-list>
            <validator name="SentenceLength">
                 <property name="max_length" value="200"/>
            </validator>
            <validator name="InvalidCharacter" />
            <validator name="SpaceWithSymbol" />
            <validator name="SectionLength">
                 <property name="max_char_num" value="2000"/>
            </validator>
            <validator name="MaxParagraphNumber" />
         </validator-list>
         <symbol-table lang="en">
            <symbol name="EXCLAMATION_MARK" value="!" invalid-chars="！" after-space="true" />
            <symbol name="LEFT_QUOTATION_MARK" value="\'"  invalid-chars="“" before-space="true" />
        </symbol-table>
    </redpen-conf>

In the next section, we will see the configuration of validators.
The character settings are described in the :ref:`setting-characters-section` section.

Let's go into the details of validator configuration.

Validator configuration
------------------------

RedPen configuration file contains "validator-list" block for registrating Validators.
If a user adds a validaor for one checking point into validator-conf.xml,
then RedPen applies the added Validator to the input document.

The following is the sample validator-list block.

.. code-block:: xml

    <validator-list>
        <validator name="SentenceLength">
            <property name="max_length" value="200"/>
        </validator>
        <validator name="InvalidCharacter" />
        <validator name="SpaceWithSymbol" />
        <validator name="SectionLength">
             <property name="max_char_num" value="2000"/>
        </validator>
        <validator name="MaxParagraphNumber" />
    </validator-list>

All configurations are surrounded by one "validator" block, which contains many inner component blocks. Each inner "component"
block represents a validator, which checks one aspect of the input document. For instance, adding
"SectionLength" component block into the configuration file, DocuemntValidator checks the length of sections in input documents.

As we see some components have "property" to configure the validator specific settings. For example,
the "SectionLength" validator has maximum character number in one section. Some validator has sub-validators.

We will see the all the supported validators in the :doc:`validator` page.

.. _setting-characters-section:

Setting symbols
-------------------

To override default setting of symbols, Users can add configure settings for characters and symbols
with "symbol-table" block in the RedPen configuration file.

Default settings are described in the following sections.
In the symbol-table configuration block, we add the symbols to use in the document. 
The symbol-table block has multiple **symbol** elements.
"symbol" element overrides the character used in the written documents.

The following table is the properties of symbol element.

.. table::

  ==================== ============= ============= ===================================
  Property             Mandatory     Default Value Description
  ==================== ============= ============= ===================================
  `name`               true          none          Name of the symbol
  `value`              true          none          Value of the symbol
  `before-space`       false         false         Need space before the symbol
  `after-space`        false         false         Need space after the symbol
  `invalid-chars`      false         ""            List of invalid symbols
  ==================== ============= ============= ===================================


Sample: Setting symbols
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the following setting, we can see that symbol-table has define 3 symbols. First element defines
exlamation mark as '!'. Second element , FULL_STOP defines period as "." and in addition the sybmol need space
after the period. Third element defines comma as ',' and also define invalid symbols '、' and '，'. Here invalid
symbols represents the variations of the target symbol. For example, In japanese FULL_STOP can be not only '.'
but also '。'. If we registered invalid-chars, we can prevents the mixture usages of symbol variations.

.. code-block:: xml

  <symbol-table>
    <symbol name="EXCLAMATION_MARK" value="!" />
    <symbol name="FULL_STOP" value="." after-space="true" />
    <symbol name="COMMA" value="," invalid-chars="、，" after-space="true" />
  </symbol-table>

English Default Setting
~~~~~~~~~~~~~~~~~~~~~~~~~~

The following table shows the default symbol settings for English and other latin based documents. In the table, first column shows the names of symbols,
second colums (Value) shows the symbol character. Colums 'NeedBeforeSpace' and 'NeedAfterSpace' represent that the symbol should have space before or after it respectively.

.. table::

  ============================= ============= ================== ================== =============================================
  Symbol                        Value         NeedBeforeSpace    NeedAfterSpace     Description
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

The symbol setting are made use of seveal Validators such as InvalidCharacter, and SpaceValidator. If users want to change the
symbol configuration settings. Users can override the settings adding symbol element into symbol-table block in the redpen configuration file.

Japanese Default Setting
~~~~~~~~~~~~~~~~~~~~~~~~~~

The following table shows the default symbol settings for Japanese documents. In the table, first column shows the names of symbols,
second colums (Value) shows the symbol. Colums 'NeedBeforeSpace' and 'NeedAfterSpace' represent that the
symbol should have space before or after it respectively.

.. table::

  ============================= ============= ================== ================== =============================================
  Symbol                        Value         NeedBeforeSpace    NeedAfterSpace     Description
  ============================= ============= ================== ================== =============================================
  `FULL_STOP`                   '。'          false              false              Period of sentence
  `SPACE`                       '　'          false              false              White space between words
  `EXCLAMATION_MARK`            '！'          false              false              Exclamation mark
  `NUMBER_SIGN`                 '＃'          false              false              Number sign
  `DOLLAR_SIGN`                 '＄'          false              false              Dollar sign
  `PERCENT_SIGN`                '％'          false              false              Percent sign
  `QUESTION_MARK`               '？'          false              false              Question mark
  `AMPERSAND`                   '＆'          false              false              Ampersand
  `LEFT_PARENTHESIS`            '（'          false              false              Left parenthesis
  `RIGHT_PARENTHESIS`           '）'          false              false              Right parenthesis
  `ASTERISK`                    '*'           false              false              Asterrisk
  `COMMA`                       ','           false              false              Comma
  `PLUS_SIGN`                   '+'           false              false              Plus sign
  `HYPHEN_SIGN`                 '-'           false              false              Hyphenation
  `MINUS_SIGN`                  '-'           false              false              Minus sign (NOTE: identical to HYPHEN_SIGN)
  `SLASH`                       '/'           false              false              Slash
  `COLON`                       '：'           false             false              Colon
  `SEMICOLON`                   '；'           false             false              Semicolon
  `LESS_THAN_SIGN`              '＜'           false             false              Less than sign
  `GREATER_THAN_SIGN`           '＞'           false             false              Greater than sign
  `EQUAL_SIGN`                  '＝'           false             false              Equal sign
  `AT_MARK`                     '＠'           false             false              At mark
  `LEFT_SQUARE_BRACKET`         '「'           true              false              Left square bracket
  `RIGHT_SQUARE_BRACKET`        '」'           false             false              Right square bracket
  `BACKSLASH`                   '￥'           false             false              Backslash
  `CIRCUMFLEX_ACCENT`           '＾'           false             false              Circumflex accent
  `LOW_LINE`                    '＿'           false             false              Low line (under bar)
  `LEFT_CURLY_BRACKET`          '｛'           true              false              Left curly bracket
  `RIGHT_CURLY_BRACKET`         '｝'           true              false              Right curly bracket
  `VERTICAL_VAR`                '｜'           false             false              Vertical bar
  `TILDE`                       '〜'           false             false              Tilde
  `LEFT_SINGLE_QUOTATION_MARK`  '‘'           false              false              left single quotation mark
  `RIGHT_SINGLE_QUOTATION_MARK` '’'           false              false              right single quotation mark
  `LEFT_DOUBLE_QUOTATION_MARK`  '“'           false              false              left double quotation mark
  `RIGHT_DOUBLE_QUOTATION_MARK` '”'           false              false              right double quotation mark
  ============================= ============= ================== ================== =============================================

