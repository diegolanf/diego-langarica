import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { TranslocoHttpLoader } from '@diego-langarica/shared/infra/i18n';
import { provideTransloco } from '@ngneat/transloco';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideEffects(),
    provideHttpClient(),
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
