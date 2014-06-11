Configuration
==============

RedPen has three configuration files, central configuration (dv-conf.xml), validators configuration (validator-conf.xml) and overriding characters and symbols for input documents (char-table.xml).

Main configuration file
------------------------

RedPen has the main configuration, which does the all settings needed to work RedPen with input documents.
The main configuration file is a xml file which has the root block "configuration" and configuration block contains
two sub blocks "validator" and "lang".

Each block specifies sub configuration block. The validator block specifies a setting file to add validators, and
lang block specifies the input language such as en, ja and the character setting file. For overriding the default character set for the specified language,
we can specify the character configuration file to override the default character settings.

The following is an example of main configuration file.

.. code-block:: xml

  <configuration>
    <validator>sample/conf/validation-conf.xml</validator>
    <lang char-conf="sample/conf/symbol-conf-en.xml">en</lang>
  </configuration>

In the next section, we will see the configuration of validators.
The char-conf settings are described in the :ref:`setting-characters-section` section.

Let's go into the details of validator configuration.

Validator configuration
------------------------

RedPen has validator-conf.xml for registrating Validators. If a user adds a validaor for one checking point into validator-conf.xml,
then RedPen applies the added Validator to the input document.

The following is the sample validator-conf.xml file.

.. code-block:: xml

  <component name="Validator">
    <component name="SentenceLength">
      <property name="max_length" value="50"/>
    </component>
    <component name="SpaceAfterPeriod" />
    <component name="InvalidCharacter" />
    <component name="SpaceWithSymbol" />
    <component name="SectionLength">
      <property name="max_char_number" value="500"/>
    </component>
    <component name="ParagraphStartWith" />
  </component>

All configurations are surrounded by one "component" block, which contains many inner component blocks. Each inner "component"
block represents a validator, which checks one aspect of the input document. For instance, adding
"SectionLength" component block into the configuration file, DocuemntValidator checks the length of sections in input documents.

As we see some components have "property" to configure the validator specific settings. For example,
the "SectionLength" validator has maximum character number in one section. Some validator has sub-validators.

We will see the all the supported validators in the :doc:`validator` page.

.. _setting-characters-section:

Setting characters 
-------------------

Users add configure settings for characters and symbols with char-table.xml. char-table.xml is used to
override default setting of characters.
Default settings are described in the following section.
In the character configuration file, we add the symbols to use in the document. Character table has one character-table block
and the character-table block has many "character" elements.
"character" element define the character used in the written documents.

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

In the following setting, we can see that character-table has define 6 characters. First character element defines
exlamation mark as '!'. Second element , FULL_STOP defines period as "." and in addition the character need space
after the period. Third element defines comma as ',' and also define invalid characters '、' and '，'. Here invalid
characters represents the variations of registered character. For example, In japanese FULL_STOP can be not only '.'
but also '。'. If we registered invalid-chars, we can prevents the mixture usages of character variations.

.. code-block:: xml

  <character-table>
    <character name="EXCLAMATION_MARK" value="!" />
    <character name="FULL_STOP" value="." after-space="true" />
    <character name="COMMA" value="," invalid-chars="、，" after-space="true" />
  </character-table>

Default Setting
~~~~~~~~~~~~~~~~~

The following table shows the default symbol settings for English documents. In the table, first column shows the names of symbols,
second colums (Value) shows the character. Colums 'NeedBeforeSpace' and 'NeedAfterSpace' represent that the
character should have space before or after it respectively.

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

The character setting are made use of seveal Validators such as InvalidCharacter, and SpaceValidator. If users want to change the
character configuration settings. Users can override the settings adding character into character setting file described in the above section.
