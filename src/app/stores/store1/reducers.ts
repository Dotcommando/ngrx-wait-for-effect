import { Action, createReducer, on } from '@ngrx/store';
import { feat1Action1, feat1Action2, feat1Action3 } from './actions';

export interface Feature1State {
  init: boolean;
  feat_1_action_1_started: boolean;
  feat_1_action_2_started: boolean;
  feat_1_action_3_started: boolean;
}

export const initialFeature1State: Feature1State = {
  init: true,
  feat_1_action_1_started: false,
  feat_1_action_2_started: false,
  feat_1_action_3_started: false,
};

const featureReducer = createReducer(
  initialFeature1State,
  on(feat1Action1, state => ({ ...state, feat_1_action_1_started: true, init: false })),
  on(feat1Action2, state => ({ ...state, feat_1_action_2_started: true, init: false })),
  on(feat1Action3, state => ({ ...state, feat_1_action_3_started: true, init: false }))
);

export function reducer(state: Feature1State | undefined, action: Action) {
  return featureReducer(state, action);
}
