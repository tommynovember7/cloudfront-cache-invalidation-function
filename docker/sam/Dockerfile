FROM ubuntu:groovy

RUN apt-get update -y && apt-get install -y --no-install-recommends unzip wget \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /tmp
RUN wget -nv --no-check-certificate https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip \
    && unzip ./aws-sam-cli-linux-x86_64.zip -d sam-installation \
    && ./sam-installation/install \
    && ./sam-installation/install --update
