const createRequest = require('../src/InvalidationRequest').create;

describe('#create', () => {
  test('request should be ', () => {
    const expected = {
      DistributionId: 'Foo',
      InvalidationBatch: {
        CallerReference: 'randomString',
        Paths: { Quantity: 1, Items: ['/foo/bar/*'] },
      },
    };
    const request = createRequest('Foo', ['/foo/bar/*']);
    // I2KSO35XWJ QBNR
    console.log(request);
    console.log(request.InvalidationBatch.Paths.Items);

    expect(request.DistributionId).toEqual(expected.DistributionId);
    expect(request.InvalidationBatch.Paths.Quantity).toEqual(expected.InvalidationBatch.Paths.Quantity);
    expect(request.InvalidationBatch.Paths.Items).toEqual(expected.InvalidationBatch.Paths.Items);
  });
});
