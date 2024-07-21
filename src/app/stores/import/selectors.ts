import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ImportState } from './reducers';

const selectImportState = createFeatureSelector<ImportState>('import');

export const selectPhase1Completed = createSelector(
  selectImportState,
  (state: ImportState) => state.phase_1_started
);

export const selectPhase2Completed = createSelector(
  selectImportState,
  (state: ImportState) => state.phase_2_started
);

export const selectPhase3Completed = createSelector(
  selectImportState,
  (state: ImportState) => state.phase_3_started
);
