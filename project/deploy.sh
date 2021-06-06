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
    rm -f "$FILE" && \
    echo "$FILE removed."
fi
zip -r "$FILE" . && \
docker run --rm -ti -e "AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}" -e "AWS_DEFAULT_REGION=${AWS_DEFAULT_REGION}" -e "AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}" -v $(pwd):/aws -w /aws amazon/aws-cli:latest lambda update-function-code --function-name vg-cloudfront-invalidation --zip-file "fileb://./$FILE"
