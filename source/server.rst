RedPen Server
=============

The RedPen server delivers the majority of RedPen's functionality via a simple HTTP REST API.

Starting the RedPen server
--------------------------

Please refer to the :doc:`command` page for details on how to start the RedPen server.

RedPen Server API
-----------------

Configuration
~~~~~~~~~~~~~

**/rest/config/redpens**

Return the configuration for available, preconfigured redpens.

GET Parameters:

- *lang=xx* restricts the returned configurations to those that match the specified language. By default, all configurations are returned.

The JSON response is as follows:

.. code-block:: json

    {
      "version": "1.1.2",
      "documentParsers": ["PLAIN", "MARKDOWN", "WIKI"],
      "redpens": {
         "en": {
          "lang": "en",
          "tokenizer": "cc.redpen.tokenizer.WhiteSpaceTokenizer",
          "validators": {
             "CommaNumber": { "languages": [], "properties": {} },
             "Contraction": { "languages": ["en"], "properties": {} },
             "DoubledWord": { "languages": [], "properties": {} },
             "EndOfSentence": { "languages": ["en"], "properties": {} },
             "InvalidExpression": { "languages": [], "properties": {} },
             "InvalidSymbol": { "languages": [], "properties": {} },
             "InvalidWord": { "languages": ["en"], "properties": {} },
             "ParagraphNumber": { "languages": [], "properties": {} },
             "Quotation": { "languages": ["en"], "properties": {} },
             "SectionLength": { "languages": [], "properties": {"max_char_num": "2000"} },
             "SentenceLength": { "languages": [], "properties": {"max_len": "200"} },
             "SpaceBetweenAlphabeticalWord": { "languages": [], "properties": {} },
             "Spelling": { "languages": [], "properties": {} },
             "StartWithCapitalLetter": { "languages": ["en"], "properties": {} },
             "SuccessiveWord": { "languages": [], "properties": {} },
             "SymbolWithSpace": { "languages": [], "properties": {} },
             "WordNumber": { "languages": [], "properties": {} }
          }
        },
        "ja": {
          "lang": "ja",
          "tokenizer": "cc.redpen.tokenizer.JapaneseTokenizer",
          "validators": {
             "CommaNumber": { "languages": [], "properties": {} },
             "DoubledWord": { "languages": [], "properties": {} },
             "HankakuKana": { "languages": ["ja"], "properties": {} },
             "InvalidSymbol": { "languages": [], "properties": {} },
             "KatakanaEndHyphen": { "languages": ["ja"], "properties": {} },
             "KatakanaSpellCheck": { "languages": ["ja"], "properties": {} },
             "ParagraphNumber": { "languages": [], "properties": {} },
             "SectionLength": { "languages": [], "properties": {"max_num": "1500"} },
             "SentenceLength": { "languages": [], "properties": {"max_len": "100"} },
             "SpaceBetweenAlphabeticalWord": { "languages": [], "properties": {} },
             "SuccessiveWord": { "languages": [], "properties": {} }
          }
        }
      }
    }


- The *version* property indicates the version of RedPen.
- The *documentParsers* array contains all supported document parsers
- The *redpens* object shows the available pre-configured redpens and how they are configured. Within each object:

   - *lang* specifies the language the redpen is designed for
   - *tokenizer* specifies the tokenizer class used by the redpen
   - *validators* shows which validators are configured within the redpen. This object is in a format suitable for the *document/validate/json* request below. For each validator:

       - The *languages* array indicates which languages for which the validator is suitable. An empty array indicates all languages.
       - The *properties* object specifies the currently configured properties for this validator, as described in :doc:`validator`


Document Validation
~~~~~~~~~~~~~~~~~~~

**/document/validate**

This POST request validates a document and returns the errors.

POST Parameters:

- *document* contains the text of the document RedPen is to validate
- *documentParser* specifies which parser should be used to parse the document. Valid options are:
    - PLAIN
    - MARKDOWN
    - WIKI
- *lang* specifies the language used to tokenize the document. Currently, values of **ja** (Japanese) and **en** (English/Whitespace) are supported.
- The optional *format* field determines the format for the results. It can be one of json (the default), json2, plain, plain2 or xml.
- The optional *config* field contains the contents of a RedPen XML configuration file


**Examples using curl and document/validate**

.. code-block:: bash

    $ curl --data document="Twas brillig and the slithy toves did gyre and gimble in the wabe" \
         --data lang=en --data format=PLAIN2 \
         --data config="`cat ./redpen-server/target/classes/conf/redpen-conf.xml`" \
         localhost:8080/rest/document/validate/
    Line: 1, Offset: 0
        Sentence: Twas brillig and the slithy toves did gyre and gimble in the wabe
            Spelling: Found possibly misspelled word "brillig".
            Spelling: Found possibly misspelled word "slithy".
            Spelling: Found possibly misspelled word "toves".
            Spelling: Found possibly misspelled word "gyre".
            Spelling: Found possibly misspelled word "gimble".
            Spelling: Found possibly misspelled word "wabe".
            DoubledWord: Found repeated word "and".


.. code-block:: bash

    $ curl -s --data document="古池や,蛙飛び込む水の音" \
              --data config="`cat ./redpen-server/target/classes/conf/redpen-conf-ja.xml`" \
              localhost:8080/rest/document/validate/ | json_reformat
    {
        "errors": [
            {
                "sentence": "古池や,蛙飛び込む水の音",
                "endPosition": {
                    "offset": 4,
                    "lineNum": 1
                },
                "validator": "InvalidSymbol",
                "lineNum": 1,
                "sentenceStartColumnNum": 0,
                "message": "Found invalid symbol \",\".",
                "startPosition": {
                    "offset": 3,
                    "lineNum": 1
                }
            }
        ]
    }



**/document/validate/json**

This POST request processes a redpen validation request, specified in JSON, and returns redpen errors in a supported RedPen format.

Request format:

.. code-block:: json

    {
      "document": "Theyre is a blak rownd borl.",
      "format": "json2",
      "documentParser": "PLAIN",
      "config": {
        "lang": "en",
        "validators": {
          "CommaNumber": {},
          "Contraction": {},
          "DoubledWord": {},
          "EndOfSentence": {},
          "InvalidExpression": {},
          "InvalidSymbol": {},
          "InvalidWord": {},
          "ParagraphNumber": {},
          "Quotation": {},
          "SectionLength": {
            "properties": {
              "max_char_num": "2000"
            }
          },
          "SentenceLength": {
            "properties": {
              "max_len": "200"
            }
          },
          "SpaceBetweenAlphabeticalWord": {},
          "Spelling": {},
          "StartWithCapitalLetter": {},
          "SuccessiveWord": {},
          "SymbolWithSpace": {},
          "WordNumber": {}
        },
        "symbols": {
          "AMPERSAND": {
            "after_space": false,
            "before_space": true,
            "invalid_chars": "＆",
            "value": "&"
          },
          "ASTERISK": {
            "after_space": true,
            "before_space": true,
            "invalid_chars": "＊",
            "value": "*"
          }
        }
      }
    }


- The *document* property specifies the text of the document to validate
- The *documentParser* property should contain the name of a valid RedPen documentparser (ie: PLAIN, MARKDOWN or WIKI)
- The *format* property determines the format for the results. It can be one of json, json2, plain, plain2 or xml.
- The *config* object specifies the validator configuration for the request. This consists of:
    - A *config* object, consisting of a series of objects that are named after a RedPen validator. If the object is present, the validator will be configured. Within this named object, a *properties* object can be used to set the name and values of any property used by the validator, as described in :doc:`validator`
    - The *lang* property indicates the language of the document. It determines how the document will be tokenized by RedPen.
    - A *symbols* object containing overridden symbols, as described in :doc:`configuration`. Each entry must be a validate symbol name, and can contain the following elements:
        - *value* specifies the Symbol's value
        - *invalid_chars* is a string of invalid alternatives for this Symbol
        - *before_space* and *after_space* specify if a space is required before or after the Symbol.

Response (json2 format):

.. code-block:: json

    {
      "errors": [
        {
          "sentence": "Theyre is a blak rownd borl.",
          "position": {
            "start": {
              "offset": 0,
              "line": 1
            },
            "end": {
              "offset": 27,
              "line": 1
            }
          },
          "errors": [
            {
              "subsentence": {
                "offset": 0,
                "length": 6
              },
              "validator": "Spelling",
              "position": {
                "start": {
                  "offset": 0,
                  "line": 1
                },
                "end": {
                  "offset": 6,
                  "line": 1
                }
              },
              "message": "Found possibly misspelled word \"Theyre\"."
            },
            {
              "subsentence": {
                "offset": 12,
                "length": 4
              },
              "validator": "Spelling",
              "position": {
                "start": {
                  "offset": 12,
                  "line": 1
                },
                "end": {
                  "offset": 16,
                  "line": 1
                }
              },
              "message": "Found possibly misspelled word \"blak\"."
            },
            {
              "subsentence": {
                "offset": 17,
                "length": 5
              },
              "validator": "Spelling",
              "position": {
                "start": {
                  "offset": 17,
                  "line": 1
                },
                "end": {
                  "offset": 22,
                  "line": 1
                }
              },
              "message": "Found possibly misspelled word \"rownd\"."
            },
            {
              "subsentence": {
                "offset": 23,
                "length": 4
              },
              "validator": "Spelling",
              "position": {
                "start": {
                  "offset": 23,
                  "line": 1
                },
                "end": {
                  "offset": 27,
                  "line": 1
                }
              },
              "message": "Found possibly misspelled word \"borl\"."
            }
          ]
        }
      ]
    }


**Some examples using curl and document/validate/json**


.. code-block:: bash

    $ curl -s --data "document=fish and chips" http://localhost:8080/rest/document/validate | json_reformat
    {
        "errors": [
            {
                "sentence": "fish and chips",
                "validator": "StartWithCapitalLetter",
                "lineNum": 1,
                "sentenceStartColumnNum": 0,
                "message": "Sentence starts with a lowercase character \"f\"."
            }
        ]
    }

.. code-block:: bash

    $ curl -s --data "document=ここはどこでうか?&lang=ja&" http://localhost:8080/rest/document/validate | json_reformat
    {
        "errors": [
            {
                "sentence": "ここはどこでうか?",
                "endPosition": {
                    "offset": 9,
                    "lineNum": 1
                },
                "validator": "InvalidSymbol",
                "lineNum": 1,
                "sentenceStartColumnNum": 0,
                "message": "Found invalid symbol \"?\".",
                "startPosition": {
                    "offset": 8,
                    "lineNum": 1
                }
            }
        ]
    }

.. code-block:: bash

    $ curl -s --data "document=# Markdown Test%0A%0ASpellink Errah&lang=en&documentParser=MARKDOWN" http://localhost:8080/rest/document/validate | json_reformat
    {
        "errors": [
            {
                "sentence": "Spellink Errah",
                "endPosition": {
                    "offset": 8,
                    "lineNum": 3
                },
                "validator": "Spelling",
                "lineNum": 3,
                "sentenceStartColumnNum": 0,
                "message": "Found possibly misspelled word \"Spellink\".",
                "startPosition": {
                    "offset": 0,
                    "lineNum": 3
                }
            },
            {
                "sentence": "Spellink Errah",
                "endPosition": {
                    "offset": 14,
                    "lineNum": 3
                },
                "validator": "Spelling",
                "lineNum": 3,
                "sentenceStartColumnNum": 0,
                "message": "Found possibly misspelled word \"Errah\".",
                "startPosition": {
                    "offset": 9,
                    "lineNum": 3
                }
            }
        ]
    }


.. code-block:: bash

    curl -s -H "Content-Type: application/json" \
         --data '{document:"fisch and chipps",format:"plain",config:{validators:{Spelling:{},SentenceLength:{properties:{max_len:6}}}}}' \
         http://localhost:8080/rest/document/validate/json
    1: ValidationError[Spelling], Found possibly misspelled word "fisch". at line: fisch and chipps
    1: ValidationError[Spelling], Found possibly misspelled word "chipps". at line: fisch and chipps
    1: ValidationError[SentenceLength], The length of the sentence (16) exceeds the maximum of 6. at line: fisch and chipps
