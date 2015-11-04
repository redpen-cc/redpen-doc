# Makefile for RedPen documentation
#

# You can set these variables from the command line.
BUILDDIR              = build

ASCIIDOCTOR           = asciidoctor
.PHONY: help clean html 

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  html       to make standalone HTML files"

clean:
	-rm -rf $(BUILDDIR)/*

html:
	mkdir -p $(BUILDDIR)/html
	cp source/*.jpg source/*.png $(BUILDDIR)/html/
	$(ASCIIDOCTOR) -a source-highlighter=coderay -d book -b html5 source/index.adoc -D$(BUILDDIR)/html
	@echo "Build finished. The HTML pages are in $(BUILDDIR)/html"
