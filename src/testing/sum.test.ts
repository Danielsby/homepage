import * as React from 'react';
const sum = require('./../functions/addition');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

