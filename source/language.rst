Language Setings
=================

RedPen process documents with any languages such as German, French or Japanese.
The default setting of the RedPen is for processing documents written in English or other Latin based languages.
Therefore, to make RedPen proces the input document written in a language, users need to specify
the language in the RedPen configuration file.

Override Language
----------------------

Currently there are two language settings, "en" and "ja". "en" is for Latin based languages such as English, German.
"ja" is for Japanese input.

In order to orverride the language setting, we will change the lang property of "character-table block" in the configuration file.
In the follwoing example, the config file specify input language as Japanese ("ja").

.. code-block:: xml

    <character-table lang="ja">
        <character name="EXCLAMATION_MARK" value="!" invalid-chars="！" after-space="true" />
        <character name="LEFT_QUOTATION_MARK" value="\'"  invalid-chars="“" before-space="true" />
        <character name="RIGHT_QUOTATION_MARK" value="\'"  invalid-chars="”" after-space="true" />
        <character name="NUMBER_SIGN" value="#" invalid-chars="＃" after-space="true" />
        <character name="FULL_STOP" value="。" invalid-chars="．." after-space="true" />
        <character name="COMMA" value="、" invalid-chars="," after-space="true" />
    </character-table>

Override Character Settings
-----------------------------

Depending of the documents or writers, the used characters and symbols are different.
For example, a writer uses "'" for left qsingle uotation mark, but another
writer uses "‘" for leftquotation mark.

For such cases, RedPen provides the way to override the default symbols (
see :ref:`setting-characters-section` section) used in the document,
and in addition specify the symbols which should not used in the input documents.

The followings are override the setting of single quotation marks to use ascii quotation mark "'".

.. code-block:: xml

  <character-table>
    <character name="LEFT_SINGLE_QUOTATION_MARK" value="'"  invalid-chars="‘" />
    <character name="RIGHT_SINGLE_QUOTATION_MARK" value="'" invalid-chars="’"/>
  </character-table>

