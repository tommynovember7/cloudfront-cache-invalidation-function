const { CloudFront } = require('aws-sdk');
const createRequest = require('./src/InvalidationRequest').create;

const { DISTRIBUTION_ID } = process.env;
const CACHE_INVALIDATION_ITEMS = [];
const cloudFront = new CloudFront();

exports.handler = async (event) => {
  const params = createRequest(DISTRIBUTION_ID, CACHE_INVALIDATION_ITEMS);
  console.log(event);
  console.log(params);
  await cloudFront.createInvalidation(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      return;
    }
    console.log(data);
  }).promise();
};
