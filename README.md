# extract_comments

Install the package
npm install --save multilang-extract-comments

run `git config --global url.https://github.com/.insteadOf git://github.com/` if npm cannot download from github

Copy all .scala files to datasets directory
find . -name \*.scala -exec cp {} /Users/ronaldylee/mids/266/project/repos/datasets/extract_comments/datasets/spark \;

Datasets:
- https://github.com/apache/spark
