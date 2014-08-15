.. RedPen documentation master file, created by
   sphinx-quickstart on Sun Oct 13 13:50:32 2013.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

QuickStart
==========

This quickstart guide would help you get started. Let's go through some of the basics of RedPen.

Requirements
-------------

RedPen needs the following software.

- Java 1.8.0 or greater
- Maven 3.0.0 or greater

Download and install
----------------------

We can install RedPen with the following steps.

1. Go to your home directory (/home/username if your account name is 'username')

.. code-block:: bash

 $ cd username

2. Clone the source code with git command

.. code-block:: bash

  $ git clone git@github.com:recruit-tech/redpen.git

3. Build with maven

.. code-block:: bash

  $ cd redpen
  $ mvn package

Running examples
------------------

First, we extract the RedPen zipped file.

.. code-block:: bash

  $ cd redpen-app/target/
  $ tar xzvf redpen-app-VERSION-assembled.tar.gz
  $ cd redpen-app-VERSION

Then, run the RedPen command with the sample input and configuration files.

.. code-block:: bash

  $ bin/redpen -c conf/dv-conf-en.xml doc/txt/en/sampledoc-en.txt
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
   language
   links

