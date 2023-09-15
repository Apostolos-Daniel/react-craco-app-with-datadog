import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { datadogRum } from '@datadog/browser-rum';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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
