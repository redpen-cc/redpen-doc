FAQ
====

- Does RedPen check LaTeX documents for common style errors?

 **No**. RedPen itself does not support LaTex format, but you can apply RedPen to proofread LaTex documents converting them to Markdonw format. `Pandoc <http://johnmacfarlane.net/pandoc>`_ supports the conversion from LaTex to Markdown format. The following is a sample to run RedPen to a LaTex document.

.. code-block:: bash

     $pandoc content.tex -s -t  markdown_mmd -o content.md
     $redpen -c conf/redpen-conf.xml content.md

