.. RedPen documentation master file, created by
   sphinx-quickstart on Sun Oct 13 13:50:32 2013.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

QuickStart
==========

This quickstart guide is to help you get started with RedPen. Let's go through some of the basics.

Requirements
------------

RedPen requires the following software.

- Java 1.8.0 or greater
- Maven 3.0.0 or greater

Example run
-----------

First, download the RedPen package from `release page <https://github.com/recruit-tech/redpen/releases/tag/v1.0.1>`_,
and then decompress the package with the following commands.

.. code-block:: bash

  $ tar xvf redpen-cli-1.0-assembled.tar.gz
  $ cd redpen-cli-1.0

Then, run the redpen command with the supplied sample document and configuration file.

.. code-block:: bash

  $ bin/redpen -c conf/redpen-conf-en.xml sample-doc/en/sampledoc-en.txt
  14:32:37.639 [main] INFO  org.unigram.docvalidator.Main - loading character table file: sample/conf/symbol-conf-en.xml
  14:32:37.652 [main] INFO  o.u.docvalidator.util.CharacterTable - Succeeded to load character table
  14:32:37.654 [main] INFO  o.unigram.docvalidator.parser.Parser - comma is set to ","
  14:32:37.655 [main] INFO  o.unigram.docvalidator.parser.Parser - full stop is set to "."
  14:32:37.663 [main] INFO  o.u.d.v.s.ParagraphStartWithValidator - Using the default value of paragraph_start_with.
  CheckError[sample/doc/txt/en/sampledoc-en.txt: 0] = The length of the line exceeds the maximum 265 in line: ln bibliometrics and link analysis studies many attempts have been made to analyze the \
  relationship amongscientific papers, authors andjoumals and recently, these research results have been found to be effective for analyzing the link structure ofweb pages as we11.
  CheckError[sample/doc/txt/en/sampledoc-en.txt: 0] = The length of the line exceeds the maximum 161 in line:  In addition,  Most of these methods are concernedwith the two link analysis measures: \
  relatedness between documenatsndglobal importance of individual documents.
  ...


.. toctree::
   :hidden:

   command
   configuration
   validator
   format
   output
   language
   extend
   developers
   faq
   links

