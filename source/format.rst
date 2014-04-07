Supported Formats
=================

RedPen supports three types of input formats ("Plain text", "Wiki", and "Markdown" format).


Plain text
-----------

Plain text just supoorts a set of paragraphs. Paragraphs are separated by two new lines. For example the following article has two paragraph.

.. code-block:: none

  This is a first paragraph. This paragraph is for the introduction of this article.
  I will introduce the central issue discussed throughout the article.

  Second paragraph describe the details of the issue and show the solution.

Wiki format
-------------

RedPen supports the fraction of Wiki syntacs. The followings the supported elements of Wiki syntacs.

Headings
~~~~~~~~~

For making a heading, we add a line starts with a "h[1234]. ". The digits after h represents levels of the heding (section).


Inline Formatting
~~~~~~~~~~~~~~~~~~~

RedPen supports the following inline formatting.

Bold
^^^^^

.. code-block:: none

  **this is a Bold sentence.**

Italic
^^^^^^^

.. code-block:: none

  //this is a italic syntacs.//

Unerline
^^^^^^^^^

.. code-block:: none

  __this is a underlined syntacs.__

Strikethrough
^^^^^^^^^^^^^^

.. code-block:: none

  --this is a strikethrough syntacs.--

Links
~~~~~

Links elements are included in the Wiki formatted documents.

Lists
~~~~~

Wiki syntax supports two types of lists.

Bulleted Lists
^^^^^^^^^^^^^^^

To make a bullted list, start a line with a "asterrisks". The number of asterrisks represents the indents of the list. 

.. code-block:: none

  * List
  * List
  ** Sub List

Numbered List
^^^^^^^^^^^^^^

If you want to add numbered lists, use "sharp" insted of asterisks in Bulleted Lists.

Comments
~~~~~~~~

To add a comment to the wiki source, add [!-- ... --] block.
The followings are a sample of comment.

.. code-block:: none

   [!--
     This is a comment.
   --]



Paragraphs
~~~~~~~~~~

Paragraphs are separated by two new lines the syntacs are the samme as plain text.


Markdown
-----------

RedPen currently supports the following Markdown elements.

Headings
~~~~~~~~~

Two styles of headers are supported.

- Underlined headers

First and second level headers can be written with underlines.

.. code-block:: none

  First-level header
  ==================

.. code-block:: none

  second-level header
  -------------------

- Atx style headers

1-6 sharp characters at the begginig of line.

For example:

.. code-block:: none

  # First-level header
  ## Second-levle header
  ### Thrid-level header

Inline Formatting
~~~~~~~~~~~~~~~~~~~

RedPen supports the following inline formatting.

Bold
^^^^^

Wrap characters with double asterisks or underscores for bold. The followings a sample of bold sentences.

.. code-block:: none

  **this is a Bold sentence.**
  __this is also a Bold sentence.__

Italic
^^^^^^^

Wrap characters with a single asterisk or underscore for italic. The following is a sample italic sentences.

.. code-block:: none

  *this is a italic syntax.*
  _this is also a italic syntax._

Links
~~~~~

To create the links, we wrap square brackets around the link label, and then round brackets around the URL.
This is a example.

.. code-block:: none

   [label](url)

Lists
~~~~~

Markdown parser used in RedPen supports two types of lists (Bulleted lists and Numbered lists).

Bulleted Lists
^^^^^^^^^^^^^^^

To make a bullted list, start a line with a "asterrisks" or "hypens". The lists are nested with the heading spaces.
The following is a example of bulleted list with asterrisks.

.. code-block:: none

  * List
  * List
    * Sub List
    * Sub List

Numbered List
^^^^^^^^^^^^^^

If you want to add numbered lists, use "number and period" insted of asterisks in Bulleted Lists.
Follwoins are a example.

.. code-block:: none

  1. List
  2. List

Paragraphs
~~~~~~~~~~

Paragraphs are separated by two new lines the syntacs are the samme as plain text.
