Command
=========

DocumentValidator provides a command to check input document named 'docvalid'.

Usage: docvalid
---------------

We use docvalid command as follows.

::

  $docvalid [options] input-files

In the above usage, input files is spaces splitted, and docvalid has the following supported options.

Options
--------

docvalid has the following options.

.. option:: -v <VALIDATOR_CONFIG_FILE>, --validator <VALIDATOR_CONFIG_FILE>

   Validator configuration file.

.. option:: -c <CHARACTER_CONFIG_FILE>, --character <CHARACTER_CONFIG_FILE>

   Character configuration file which override default character configurations.

.. option:: -f <INPUT_FORMAT>, -input_format <INPUT_FORMAT>

   Format of Input files. [**Default**: txt]

   The argument of this option represents the input format. Currently DocumentValidator supports the following formatts.

   .. table::

      ====== =====================
      Value     Description
      ====== =====================
      txt       plain text format
      wiki      wiki format
      ====== =====================

.. Note::
   DocumentValidator does not support all the elements of wiki format such as tables. The remaining elements would be supported in near future.

.. option:: -h, --help

   Show help messages.

.. option:: --version

   Show the vesrion.
