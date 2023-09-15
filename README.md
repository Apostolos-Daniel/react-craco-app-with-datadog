# react-craco-app-with-datadog
An example of how a react app created with craco can be observed with Datadog

## Starting

Create a react application using `create-react-app` but then replace it with `craco` configuration.

```
npx create-react-app my-app
cd my-app
npm start
```

Replace `react-scripts ` with `craco `

`npm i -D @craco/craco`

`touch craco.config.js`

Include 

```
module.exports = {
    webpack: {
      alias: {
        "@components": "./src/components"
      }
    }
  };
  
```


### Documentation

1. https://github.com/facebook/create-react-app
2. https://github.com/dilanx/craco
3. https://craco.js.org/docs/

