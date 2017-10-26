# Makefile for RedPen documentation
#

# You can set these variables from the command line.
BUILDDIR              = build

ASCIIDOCTOR           = asciidoctor
.PHONY: help clean check html html_en html_ja

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  html       to make standalone HTML files"

clean:
	-rm -rf $(BUILDDIR)/*

check:
	redpen -c redpen-conf.xml -f asciidoc en/*.adoc
	redpen -c redpen-conf-ja.xml -f asciidoc ja/*.adoc

html: html_en html_ja

html_en:
	mkdir -p $(BUILDDIR)/html/en
	cp en/*.jpg en/*.png $(BUILDDIR)/html/en/
	cp -r en/styles/redpen $(BUILDDIR)/html/en/
	$(ASCIIDOCTOR) -a source-highlighter=coderay -a stylesdir=styles -a target-version=1.9 -d book -b html5 en/index.adoc -D$(BUILDDIR)/html/en/
	@echo "Build finished. The HTML pages are in $(BUILDDIR)/html/en"

html_ja:
	mkdir -p $(BUILDDIR)/html/ja
	cp ja/*.jpg ja/*.png ja/*.txt ja/*.xml ja/*.java $(BUILDDIR)/html/ja/
	cp -a ja/redpen $(BUILDDIR)/html/ja/
	$(ASCIIDOCTOR) -a source-highlighter=coderay -a target-version=1.9 -d book -b html5 ja/index_ja.adoc -D$(BUILDDIR)/html/ja
	@echo "Build finished. The HTML pages are in $(BUILDDIR)/html"
