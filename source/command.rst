Commands
=========

RedPen provides both a simple standalone command line tool and a server.

Command line tool
-------------------

RedPen provides a simple command line tool called 'redpen' to check documents.

Usage: redpen
~~~~~~~~~~~~~~~~~~

We use the redpen command as follows.

.. code-block:: bash

  $redpen [options] input-files

By default, input files are delimited by whitespace and then analysed. The redpen command supports the following options.

Options
~~~~~~~~

redpen has the following options.

.. option:: -c <CONFIG_FILE>, --configuration <CONFIG_FILE>

   Specify the RedPen configuration file

.. option:: -f <INPUT_FORMAT>, --input_format <INPUT_FORMAT>

   Input file format. [**Default**: plain]

   This argument specifies the input format. Currently RedPen supports the following formats.

   .. table::

      ======== =====================
      Value    Description
      ======== =====================
      plain    Plain text format
      wiki     Wiki (Textile) format
      markdown Markdown format
      ======== =====================

.. Note::
   RedPen does not currently support every element of the wiki format, such as tables. The remaining elements will be supported in the near future.

.. option:: -r <RESULT_FORMAT>, --result_format <RESULT_FORMAT>

   Result format. [**Default**: plain]

   This argument determines the output format. Currently RedPen supports the following output formats.

   .. table::

      ====== ===================================================
      Value     Description
      ====== ===================================================
      plain  plain text format
      plain2 an alternate plain text format collated by sentence
      xml    xml format
      json   json format
      json2  an alternate json format collated by sentence
      ====== ===================================================

.. option:: -h, --help

   Display help.

.. option:: --version

   Show the redpen version.


Sample server
--------------

RedPen also provides a sample server.

Usage: redpen-server
~~~~~~~~~~~~~~~~~~~~~~~

We can start the redpen server with the following command.

.. code-block:: bash

  $java -jar redpen-server.war [options]

Options
~~~~~~~~

redpen-server has the following options.

.. option:: -c <CONFIG_FILE>, --configuration <CONFIG_FILE>

   Specify the RedPen configuration file

.. option:: -p <PORT_NUMBER>, --port <PORT_NUMBER>

   Port number. [**Default**: 8080]

.. option:: -h, --help

   Display help messages.

.. option:: --version

   Show the redpen version.

