# WARNING

- This is a prototype - it has not been tested. Do not rely on this in production.
- It _will_ change before it gets released, in particular, the naming will be sensible. 

# Build the dist file

1. Clone the repo
2. Run `npm ci`
3. Run `npx webpack`
4. Now your lib is ready in ./dist/bundle.js
5. Rename the `bundle.js` to `bar.js`

## Function definition

When you're ready to change the function, modify the /src/bar.js file and rebuild.

- Parameters are all objects in the form `{ t: <type>, v: <value> }`, eg: `{ t: "string", v: "hello world" }`
- The function should return a new object in the same form to be bound into the node in the xml model, eg: `return { t: "number", v: 5 };`

# Configure CHT Core

1. Make sure you're running CHT v4.x
2. Install the prototype release: `medic:medic:7824-arbitrary-js`
3. Create a new CouchDB doc with `"_id": "libs"` with the attachment `bar.js` from above
4. Upload a new form with a calculate field that calls the custom `test-api` xpath function, [example](https://github.com/medic/dtree-prototype/blob/main/form.xml).

## XForm definition

```xml
<bind nodeset="/data/avg" type="string" calculate="test-api('bar', /data/first , /data/second )" readonly="true()"/>
```

- The first parameter of the function is the name of the custom function to call as a string, eg: 'bar'.
- The remaining parameters are passed through to the custom function.
