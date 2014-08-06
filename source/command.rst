Commands
=========

RedPen provides not only a simple command line tool but also a server.

Command line tool
-------------------

RedPen provides a simple command to check input document named 'redpen'.

Usage: redpen
~~~~~~~~~~~~~~~~~~

We use redpen command as follows.

.. code-block:: bash

  $redpen [options] input-files

In the above usage, input files is spaces splitted, and redpen has the following supported options.

Options
~~~~~~~~

redpen has the following options.

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

   Result format. [**Default**: plain]

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


Sample server
--------------

RedPen also provides a sample server.

Usage: redpen-server
~~~~~~~~~~~~~~~~~~~~~~~

We use redpen command as follows.

.. code-block:: bash

  $java -jar redpen-server.war [options]

Options
~~~~~~~~

redpen-server has the following options.

.. option:: -c <CONFIG_FILE>, --configuration <CONFIG_FILE>

   Configuration file for RedPen

.. option:: -p <PORT_NUMBER>, --port <PORT_NUMBER>

   Port number. [**Default**: 8080]

.. option:: -h, --help

   Show help messages.

.. option:: --version

   Show the vesrion.

