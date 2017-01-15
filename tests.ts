import * as test from 'tape';
import {default as parser} from '.';

test('parses vega url correctly', function (t) {
    t.plan(2);

    const parsed = parser('https://vega.github.io/schema/vega/v2.5.2.json');
    t.equal(parsed.library, 'vega');
    t.equal(parsed.version, 'v2.5.2');
});

test('parses vega-lite url correctly', function (t) {
    t.plan(2);

    const parsed = parser('https://vega.github.io/schema/vega-lite/v1.3.1.json');
    t.equal(parsed.library, 'vega-lite');
    t.equal(parsed.version, 'v1.3.1');
});
