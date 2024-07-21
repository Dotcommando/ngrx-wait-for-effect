import { Action, createReducer, on } from '@ngrx/store';
import { depOnFeat1Action1, feat3Action1, feat3Action2, feat3Action3 } from './actions';

export interface Feature3State {
  init: boolean;
  feat_3_action_1_started: boolean;
  feat_3_action_2_started: boolean;
  feat_3_action_3_started: boolean;
  dependency_of_feat_1_action_1: string;
}

export const initialFeature1State: Feature3State = {
  init: true,
  feat_3_action_1_started: false,
  feat_3_action_2_started: false,
  feat_3_action_3_started: false,
  dependency_of_feat_1_action_1: 'inited',
};

const featureReducer = createReducer(
  initialFeature1State,
  on(feat3Action1, state => ({ ...state, feat_3_action_1_started: true, init: false })),
  on(feat3Action2, state => ({ ...state, feat_3_action_2_started: true, init: false })),
  on(feat3Action3, state => ({ ...state, feat_3_action_3_started: true, init: false })),
  on(depOnFeat1Action1, (state, { value }) => ({
    ...state,
    init: false,
    dependency_of_feat_1_action_1: value,
  })),
);

export function reducer(state: Feature3State | undefined, action: Action) {
  return featureReducer(state, action);
}
