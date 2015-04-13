FAQ
====

- Does RedPen check LaTeX documents for common style errors?

 **No**. RedPen itself does not support LaTex format, but you can get RedPen to proofread LaTex documents by first converting them to
 Markdown format. `Pandoc <http://johnmacfarlane.net/pandoc>`_ supports the conversion from LaTex to Markdown format. The following will convert a LaTex document
  to Markdown format, and then run redpen over the converted document.

.. code-block:: bash

     $ pandoc content.tex -s -t  markdown_mmd -o content.md
     $ redpen -c conf/redpen-conf.xml content.md

