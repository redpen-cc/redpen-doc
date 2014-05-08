Command
=========

RedPen provides a command to check input document named 'docvalid'.

Usage: docvalid
---------------

We use docvalid command as follows.

.. code-block:: bash

  $docvalid [options] input-files

In the above usage, input files is spaces splitted, and docvalid has the following supported options.

Options
--------

docvalid has the following options.

.. option:: -c <CONFIG_FILE>, --configuration <CONFIG_FILE>

   Configuration file for RedPen

.. option:: -f <INPUT_FORMAT>, --input_format <INPUT_FORMAT>

   Input file format. [**Default**: plain]

   The argument of this option represents the input format. Currently RedPen supports the following formatts.

   .. table::

      ======== =====================
      Value    Description
      ======== =====================
      plain    Plain text format
      wiki     Wiki (Textile) format
      markdown Markdown format
      ======== =====================

.. Note::
   RedPen does not support all the elements of wiki format such as tables. The remaining elements would be supported in near future.

.. option:: -r <RESULT_FORMAT>, --result_format <RESULT_FORMAT>

   result format. [**Default**: plain]

   The argument of this option represents the output format. Currently RedPen supports the following output formatts.

   .. table::

      ====== =====================
      Value     Description
      ====== =====================
      plain    plain text format
      xml      xml format
      ====== =====================

.. option:: -h, --help

   Show help messages.

.. option:: --version

   Show the vesrion.
