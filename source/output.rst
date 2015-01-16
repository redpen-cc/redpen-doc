Output Formats
===============

RedPen supports three types of output formats ("Plain text", "XML", and "JSON" format).

Plain text
-----------
Plain text output format consists of the following blocks.

.. code-block:: none

    FILE_NAME:LINE_NUM: ValidationError[ERROR_TYPE], ERROR_MESSAGE at line: SENTENCE

XML
----
The top block of the XML output format is **validation-result** block which contains multiple **error** blocks.
The error block has the following sub-blocks.

.. table::

  ==================== ============= ==================================================
  Block                Optional      Description
  ==================== ============= =================================================
  `validator`          false         Validator name           
  `message`            false         Error message 
  `lineNum`            false         Line Number
  `sentence`           false         Sentence containing error
  `file`               true          File name
  ==================== ============= =================================================
