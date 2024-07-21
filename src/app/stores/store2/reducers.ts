import { Action, createReducer, on } from '@ngrx/store';
import { feat2Action1, feat2Action2, feat2Action3 } from './actions';

export interface Feature2State {
  init: boolean;
  feat_2_action_1_started: boolean;
  feat_2_action_2_started: boolean;
  feat_2_action_3_started: boolean;
}

export const initialFeature1State: Feature2State = {
  init: true,
  feat_2_action_1_started: false,
  feat_2_action_2_started: false,
  feat_2_action_3_started: false,
};

const featureReducer = createReducer(
  initialFeature1State,
  on(feat2Action1, state => ({ ...state, feat_2_action_1_started: true, init: false })),
  on(feat2Action2, state => ({ ...state, feat_2_action_2_started: true, init: false })),
  on(feat2Action3, state => ({ ...state, feat_2_action_3_started: true, init: false }))
);

export function reducer(state: Feature2State | undefined, action: Action) {
  return featureReducer(state, action);
}
