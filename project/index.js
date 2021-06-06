const { CloudFront } = require('aws-sdk');
const createRequest = require('./src/InvalidationRequest').create;

const { DISTRIBUTION_ID } = process.env;
const VG_TARGET_ITEMS = [
  '/horoscope/shiitake/',
  '/horoscope/shiitake/*',
];
const cloudFront = new CloudFront();

exports.handler = async (event) => {
  const params = createRequest(DISTRIBUTION_ID, VG_TARGET_ITEMS);
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
