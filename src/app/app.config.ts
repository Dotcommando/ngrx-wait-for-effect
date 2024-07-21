import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import * as fromImportReducer from './stores/import/reducers';
import * as fromStore1Reducer from './stores/store1/reducers';
import * as fromStore2Reducer from './stores/store2/reducers';
import * as fromStore3Reducer from './stores/store3/reducers';
import { ImportEffects } from './stores/import/effects';
import { Store3Effects } from './stores/store3/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      import: fromImportReducer.reducer,
      feature1: fromStore1Reducer.reducer,
      feature2: fromStore2Reducer.reducer,
      feature3: fromStore3Reducer.reducer
    }),
    provideEffects([ImportEffects, Store3Effects]),
    provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
  ]
};
