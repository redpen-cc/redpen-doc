QuickStart
==========

DocumentValidator needs the following software.

Requirements
-------------
- Java 1.6.0 or greater
- Maven 3.0.0 or greater

Download and install
----------------------

We can install DocumentValidator with the following steps.

#. go to your home directory (/home/username if your account name is 'username')

::

 $ cd username

#. clone the source code with git command

::

  $ git clone it@github.com:takahi-i/document-validator.git

#. build with maven

::

  $ cd document-validator
  $ mvn package

Running examples
------------------

We extract the DocumentValidator zipped file.

::

  $ cd target
  $ tar zxvf  document-validator-*.tar.gz

Then, run the DocumentValidator command with the sample input and configuration files.

::

  $ bin/docvalid -i sample/doc/txt/en/sampledoc-en.txt -v sample/conf/validation-conf.xml -c sample/conf/symbol-conf-en.xml
  14:32:37.639 [main] INFO  org.unigram.docvalidator.Main - loading character table file: sample/conf/symbol-conf-en.xml
  14:32:37.652 [main] INFO  o.u.docvalidator.util.CharacterTable - Succeeded to load character table
  14:32:37.654 [main] INFO  o.unigram.docvalidator.parser.Parser - comma is set to ","
  14:32:37.655 [main] INFO  o.unigram.docvalidator.parser.Parser - full stop is set to "."
  14:32:37.663 [main] INFO  o.u.d.v.s.ParagraphStartWithValidator - Using the default valude of paragraph_start_with.
  CheckError[sample/doc/txt/en/sampledoc-en.txt: 0] = The length of the line exceeds the maximum 265 in line: ln bibliometrics and link analysis studies many attempts have been made to analyze the \
  relationship amongscientific papers, authors andjoumals and recently, these research results have been found to be effective for analyzing the link structure ofweb pages as we11.
  CheckError[sample/doc/txt/en/sampledoc-en.txt: 0] = The length of the line exceeds the maximum 161 in line:  In addition,  Most of these methods are concernedwith the two link analysis measures: \
  relatedness between documenatsndglobal importance of individual documents.
  ...
