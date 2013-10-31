Command
=========

DocumentValidator provides a command to check input document named 'docvalid'. docvalid

Usage: docvalid
---------------

docvalid has the following options.

.. option:: -v <VALIDATOR_CONFIG_FILE>

   Validator configuration file.

.. option:: -c <CHARACTER_CONFIG_FILE>

   Character configuration file which override default character configurations.

.. option:: -i <INPUT_FILE>

   Input file.

.. option:: -f <INPUT_FORMAT>

   Format of Input files. [**Default**: txt]

   The argument of this option represents the input format. Currently DocumentValidator supports the following formatts.

   ========= ====================
   Value     Description
   ========= ====================
   txt       plain text format
   wiki      wiki fomat
   ========= ====================

.. Note::
   DocumentValidator does not support all the elements of wiki format such as tables. The remaining elements would be supported in near future.

.. option:: -h

   Show help messages.
