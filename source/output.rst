Output Formats
===============

RedPen supports three basic output formats  - "Plain text", "XML", and "JSON".

Plain text
-----------
Plain text output format consists of the following lines.

.. code-block:: none

    FILE_NAME:LINE_NUM: ValidationError[ERROR_TYPE], ERROR_MESSAGE at line: SENTENCE

An alternate plain text form (plain2) prints each sentence, followed by all of the errors found that relate to that sentence.

XML
----
The top section of the XML output format is **validation-result** element which contains multiple **error** sections.
Each error seciton has the following sub-elements.

.. table::

    ==================== ============= =================================================
    Block                Optional      Description
    ==================== ============= =================================================
    `validator`          false         Validator name           
    `message`            false         Error message 
    `lineNum`            false         Line Number
    `sentence`           false         Sentence containing error
    `file`               true          File name
    ==================== ============= =================================================

JSON
-----

.. table::

    ==================== ============= =================================================
    Block                Optional      Description
    ==================== ============= =================================================
    `validator`          false         Validator name           
    `message`            false         Error message 
    `lineNum`            false         Line Number
    `sentence`           false         Sentence containing error
    `file`               true          File name
    ==================== ============= =================================================

The alternative JSON output format (json2) collates each error by the sentence it relates to.