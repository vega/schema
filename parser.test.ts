import parser from './parser';
import {expect, test} from 'vitest';

test('parses vega url correctly', function () {
    const parsed = parser('https://vega.github.io/schema/vega/v2.5.2.json');
    expect(parsed.library).toBe('vega');
    expect(parsed.version).toBe('v2.5.2');
});

test('parses vega-lite url correctly', function () {
    const parsed = parser('https://vega.github.io/schema/vega-lite/v1.3.1.json');
    expect(parsed.library).toBe('vega-lite');
    expect(parsed.version).toBe('v1.3.1');
});

test('parses url with alpha correctly', function () {
    const parsed = parser('https://vega.github.io/schema/vega-lite/v2.0.0-alpha.0.json');
    expect(parsed.library).toBe('vega-lite');
    expect(parsed.version).toBe('v2.0.0-alpha.0');
});

test('parses proxied url correctly', function () {
   const parsed = parser('https://www.proxy.net/,ProxInfo=.abc123FgHi789,SSL+schema/vega/v2.5.2.json');
   expect(parsed.library).toBe('vega');
   expect(parsed.version).toBe('v2.5.2');
});
