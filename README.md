# [Schema](https://github.com/vega/schema)

JSON schema for [Vega](https://vega.github.io/schema/vega/v5.json) and [Vega-Lite](https://vega.github.io/schema/vega-lite/v4.json).

## Url format

```
https://vega.github.io/schema/[library]/[version].json
```

* `[library]` can be `vega` or `vega-lite`
* `[version]` defines the version of the library for which you get the schema. Underspecified versions match the latest version of the unspecified part. For example `v1` matches the latest major release, `v1.1` matches the latest minor release, and `v1.1.1` matches an exact version. For example https://vega.github.io/schema/vega/v2.json will serve https://vega.github.io/schema/vega/v2.6.5.json.

## Script

We are releasing an npm package [`vega-schema-url-parser`](https://www.npmjs.com/package/vega-schema-url-parser) with a method to correctly extract the library and version from the schema url. The code for this module is on the [`parser`](https://github.com/vega/schema/tree/parser) branch.
