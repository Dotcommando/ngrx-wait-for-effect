import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as fromStore1Actions from '../store1/actions';
import * as fromStore3Actions from './actions';

@Injectable()
export class Store3Effects {
  syncWithFeat1Action2$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore1Actions.feat1Action2),
      map(() => fromStore3Actions.depOnFeat1Action1({ value: 'completed' }))
    )
  );

  constructor(private actions$: Actions) {}
}
