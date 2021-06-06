# CloudFront Cache Invalidation function for Lambda

This project provides a Node JS function for Lambda to create CloudFront cache invalidation requests.
If you associate the function with a CloudWatch Event, you will be able to invoke the function at a defined timing.

## How to deply the function to the remote

```shell
cd ./project && ./deploy.sh
```

## Required Environment Variables

### *DISTRIBUTION_ID*

  The CooudFront distribution's ID

### *AWS_ACCESS_KEY_ID*, *AWS_DEFAULT_REGION*, *AWS_SECRET_ACCESS_KEY*

  Access keys to execute aws cli when deploying the function to the remote
