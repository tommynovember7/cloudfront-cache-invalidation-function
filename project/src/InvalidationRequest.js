const crypto = require('crypto');

/**
 *
 * @return {{InvalidationBatch: {CallerReference: string, Paths: {Quantity, Items}}, DistributionId}}
 * @param {string} distributionId
 * @param {string[]} items
 */
const create = (distributionId, items) => ({
  DistributionId: distributionId,
  InvalidationBatch: {
    CallerReference: crypto.randomBytes(7).toString('hex'),
    Paths: { Quantity: items.length, Items: items },
  },
});

module.exports = {
  create,
};
