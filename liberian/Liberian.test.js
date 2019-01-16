const Liberian = require('./Liberian');

test('that the liberian class can create a new instance of an object', () => {
    const progress = new Liberian('progress');
    expect(typeof progress).toBe('object');

})