import { Action, createReducer, on } from '@ngrx/store';
import { importPhase1, importPhase2, importPhase3 } from './actions';

export interface ImportState {
  init: boolean;
  phase_1_started: boolean;
  phase_2_started: boolean;
  phase_3_started: boolean;
}

export const initialState = {
  init: false,
  phase_1_started: false,
  phase_2_started: false,
  phase_3_started: false,
};

const featureReducer = createReducer(
  initialState,
  on(importPhase1, state => ({ ...state, init: true, phase_1_started: true })),
  on(importPhase2, state => ({ ...state, init: true, phase_2_started: true })),
  on(importPhase3, state => ({ ...state, init: true, phase_3_started: true })),
);

export function reducer(state: ImportState | undefined, action: Action) {
  return featureReducer(state, action);
}
