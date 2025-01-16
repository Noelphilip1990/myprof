import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { render } from '@netlify/angular-runtime/common-engine';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
