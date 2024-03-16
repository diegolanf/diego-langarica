import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { TranslocoHttpLoader } from '@dl/shared/infra/i18n';
import { provideTransloco } from '@ngneat/transloco';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideClientHydration(),
    provideEffects(),
    provideHttpClient(withFetch()),
    provideRouter(appRoutes),
    provideStore(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'es'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
