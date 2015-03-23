Input Formats
==============

RedPen supports three types of input formats ("Plain text", "Wiki", and "Markdown" format).

Plain text
-----------

Plain text supports a set of paragraphs. Paragraphs are separated by two new lines. For example, the following article has two paragraphs.

.. code-block:: none

  This is a first paragraph. This paragraph is the introduction of this article.
  It introduces the central issue discussed throughout the rest of the article.

  Second paragraph describes the details of the issue and attempts to present a solution.

Wiki format
-------------

RedPen supports a subset of Wiki syntax. Currently, the supported elements of Wiki syntax are as follows.

Headings
~~~~~~~~~

To create a heading, add a line starting with "h[1234]. ". The number after h represents the level of the heading or section.


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

  //this is an italic sentence.//

Unerline
^^^^^^^^^

.. code-block:: none

  __this is an underlined sentence.__

Strikethrough
^^^^^^^^^^^^^^

.. code-block:: none

  --this is a strikethrough sentence.--

Links
~~~~~

Links elements are included in Wiki formatted documents.

Lists
~~~~~

Wiki syntax supports two types of lists.

Bulleted Lists
^^^^^^^^^^^^^^^

To enter a bulleted list, start a line with an asterisk. The number of asterisks denotes the indent level of the list.

.. code-block:: none

  * List
  * List
  ** Sub List

Numbered List
^^^^^^^^^^^^^^

If you want to add numbered lists, use the hash/pound symbol (#) instead of the asterisk used by Bulleted Lists.

Comments
~~~~~~~~

To add a comment to the wiki source, add a [!-- ... --] block.
The following shows a sample comment.

.. code-block:: none

   [!--
     This is a comment.
   --]



Paragraphs
~~~~~~~~~~

Paragraphs are separated by two new lines. This syntax is the same as for plain text.


Markdown
-----------

RedPen currently supports the following Markdown elements.

Headings
~~~~~~~~~

Two styles of headings are supported.

- Underlined headings

First and second level headings can be specified using underlines.

.. code-block:: none

  First-level headings
  ====================

.. code-block:: none

  second-level headings
  ---------------------

- Atx style headings

1-6 hash or pound characters (#) at the beginning of a line.

For example:

.. code-block:: none

  # First-level heading
  ## Second-level heading
  ### Third-level heading

Inline Formatting
~~~~~~~~~~~~~~~~~~~

RedPen supports the following inline formatting.

Bold
^^^^^

Wrap characters with double asterisks or underscores for bold. The following are samples of bold sentences.

.. code-block:: none

  **this is a Bold sentence.**
  __this is also a Bold sentence.__

Italic
^^^^^^^

Wrap characters with a single asterisk or underscore for italics. The following are samples of italic sentences.

.. code-block:: none

  *this is a italic syntax.*
  _this is also a italic syntax._

Links
~~~~~

To create a link, wrap square brackets around the link's label and parentheses around the URL.
For example.

.. code-block:: none

   [label](url)

Lists
~~~~~

The Markdown parser used by RedPen supports two types of lists - Bulleted lists and Numbered lists.

Bulleted Lists
^^^^^^^^^^^^^^^

To create a bulleted list, start a line with an asterisk or a hyphen. The lists are nested according to how many leading spaces there are.
The following is a example of a bulleted list using asterisks.

.. code-block:: none

  * List
  * List
    * Sub List
    * Sub List

Numbered List
^^^^^^^^^^^^^^

If you want to create a numbered list, use a number followed by a period, as in the following example.

.. code-block:: none

  1. List
  2. List

Paragraphs
~~~~~~~~~~

Paragraphs are separated by two new lines. This syntax is the same as for plain text.
