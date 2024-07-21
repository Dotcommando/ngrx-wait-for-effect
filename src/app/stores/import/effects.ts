import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, withLatestFrom, switchMap, of, forkJoin } from 'rxjs';
import * as fromImportActions from './actions';
import * as fromStore1Actions from '../store1/actions';
import * as fromStore2Actions from '../store2/actions';
import * as fromStore3Actions from '../store3/actions';
import * as fromStore1Selectors from '../store1/selectors';
import * as fromStore2Selectors from '../store2/selectors';
import * as fromStore3Selectors from '../store3/selectors';
import { Action } from '@ngrx/store';

@Injectable()
export class ImportEffects {
  constructor(private actions$: Actions, private store: Store) {}

  startImport$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromImportActions.importPhase1),
      switchMap(() =>
        of(
          fromStore1Actions.feat1Action1(),
          fromStore1Actions.feat1Action2(),
          fromStore1Actions.feat1Action3(),
        )
      )
    )
  );

  phase1Completed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromStore1Actions.feat1Action1,
        fromStore1Actions.feat1Action2,
        fromStore1Actions.feat1Action3,
        fromStore3Actions.depOnFeat1Action1,
      ),
      withLatestFrom(
        this.store.select(fromStore1Selectors.selectFeat1Action1),
        this.store.select(fromStore1Selectors.selectFeat1Action2),
        this.store.select(fromStore1Selectors.selectFeat1Action3),
        this.store.select(fromStore3Selectors.selectSyncWithFeat1Action2),
      ),
      map(([action, feat1Action1Completed, feat1Action2Completed, feat1Action3Completed, syncWithFeat1Action2Completed]): Action => {
        console.log('');
        console.log('feat1Action1Completed', feat1Action1Completed);
        console.log('feat1Action2Completed', feat1Action2Completed);
        console.log('feat1Action3Completed', feat1Action3Completed);
        console.log('syncWithFeat1Action2Completed', syncWithFeat1Action2Completed);
        if (feat1Action1Completed && feat1Action2Completed && feat1Action3Completed && syncWithFeat1Action2Completed) {
          return fromImportActions.importPhase2();
        }
        return { type: '[No Op] Phase 1 is not completed' };
      })
    )
  );

  phase2Start$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromImportActions.importPhase2),
      switchMap(() =>
        of(
          fromStore2Actions.feat2Action1(),
          fromStore2Actions.feat2Action2(),
          fromStore2Actions.feat2Action3(),
        )
      )
    )
  );

  phase2Completed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromStore2Actions.feat2Action1,
        fromStore2Actions.feat2Action2,
        fromStore2Actions.feat2Action3,
      ),
      withLatestFrom(
        this.store.select(fromStore2Selectors.selectFeat2Action1),
        this.store.select(fromStore2Selectors.selectFeat2Action2),
        this.store.select(fromStore2Selectors.selectFeat2Action3),
      ),
      map(([action, feat2Action1Completed, feat2Action2Completed, feat2Action3Completed]): Action => {
        if (feat2Action1Completed && feat2Action2Completed && feat2Action3Completed) {
          return fromImportActions.importPhase3();
        }
        return { type: '[No Op] Phase 2 is not completed' };
      })
    )
  );

  phase3Start$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromImportActions.importPhase3),
      switchMap(() =>
        of(
          fromStore3Actions.feat3Action1(),
          fromStore3Actions.feat3Action2(),
          fromStore3Actions.feat3Action3(),
        )
      )
    )
  );

  phase3Completed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        fromStore3Actions.feat3Action1,
        fromStore3Actions.feat3Action2,
        fromStore3Actions.feat3Action3,
      ),
      withLatestFrom(
        this.store.select(fromStore3Selectors.selectFeat3Action1),
        this.store.select(fromStore3Selectors.selectFeat3Action2),
        this.store.select(fromStore3Selectors.selectFeat3Action3)
      ),
      map(([action, feat3Action1Completed, feat3Action2Completed, feat3Action3Completed]): Action => {
        if (feat3Action1Completed && feat3Action2Completed && feat3Action3Completed) {
          return { type: '[No Op] Phase 3 completed' };
        }
        return { type: '[No Op] Phase 3 is not completed' };
      })
    )
  );
}
