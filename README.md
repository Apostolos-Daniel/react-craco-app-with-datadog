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

## Configure Datadog

Install Datadog's `broswer-rum` package theat sends RUM data to Datadog:

`npm i @datadog/browser-rum`

Import `datadogRum` at the top of `index.js`:

`import { datadogRum } from '@datadog/browser-rum';`

Initialise datadogRum with the right configuration:

```
datadogRum.init({
    applicationId: '272f4d04-f0d8-45cc-a2b5-5eb8d90452a4',
    clientToken: 'pub49cb6f6888ae43bb1eaf65288cee263f',
    site: 'datadoghq.eu',
    service:'react-app-craco',
    env:'local',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0', 
    sessionSampleRate:100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();
```

### Datadog Browser Logs

`npm install @datadog/browser-logs`

Import `datadogRum` at the top of `index.js`:

`import { datadogLogs } from '@datadog/browser-logs'`

Initialise datadogLogs with appropriate configuration:

```
datadogLogs.init({
  clientToken: 'pub49cb6f6888ae43bb1eaf65288cee263f',
  site: 'datadoghq.eu',
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
})

datadogLogs.logger.info("Hello World")
```