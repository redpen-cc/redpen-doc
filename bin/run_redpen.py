#!/usr/bin/python

import os
import re
import shutil
from optparse import OptionParser

def main():
    parser = OptionParser(usage="usage: %prog [options]",
                          version="%prog 1.0")
    parser.add_option("-i", "--inputdir",
                      action="store",
                      dest="indir",
                      default="source",
                      help="specify the input directory containing rst files.")
    parser.add_option("-o", "--outdir",
                      action="store",
                      dest="outdir",
                      default="build/mdfiles",
                      help="specify the output directory of markdownized files.")
    (options, args) = parser.parse_args()

    indir = options.indir
    outdir = options.outdir

    if os.path.exists(outdir) == True:
       shutil.rmtree(outdir)
    os.makedirs(outdir)

    for root, dirs, files in os.walk(indir):
        for file in files:
            mdfile_pat = re.compile(".*\.rst")
            if not mdfile_pat.search(file):
                continue
            fileroot, ext = os.path.splitext(file)
            cmdline = "pandoc -r markdown -w rst %s -o %s" % (os.path.join(root, file),
                                                              outdir + "/" + fileroot + ".md")
            os.system(cmdline)

if __name__ == '__main__':
    main()
