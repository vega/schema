# schema

JSON schema for Vega and Vega-Lite

## Url format

```
https://vega.github.io/schema/[library]/[version].json
```

* `[library]` can be `vega` or `vega-lite`
* `[version]` defines the version of the library for which you get the schema. Underspecified versions match the latest version of the unspecified part. For example v1 matches the latest major release, v1.1 matches the latest minor release, and v1.1.1 matches an exact version. For example https://vega.github.io/schema/vega/v2.json will serve https://vega.github.io/schema/vega/v2.6.5.json.
