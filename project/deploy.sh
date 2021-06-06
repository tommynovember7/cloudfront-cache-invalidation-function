#!/bin/sh
set -euo pipefail

FILE=vg-cloudfront-invalidation.zip

cp -pR src ../project.prod/ && \
cp -p index.js ../project.prod/ && \
cp -p package.json ../project.prod/ && \
cp -p package-lock.json ../project.prod/ && \
cd ../project.prod/ && \
pwd && \
npm install --production

if [[ -f "$FILE" ]]; then
    echo "$FILE exists." && \
    rm -f "$FILE"
fi
zip -r "$FILE" . && \
docker run --rm -ti -v ~/.aws:/root/.aws -v $(pwd):/aws amazon/aws-cli:latest lambda update-function-code --function-name vg-cloudfront-invalidation --zip-file "fileb://./$FILE"
