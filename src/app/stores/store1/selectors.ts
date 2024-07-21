import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Feature1State } from './reducers';

const selectFeature1State = createFeatureSelector<Feature1State>('feature1');

export const selectFeat1Action1 = createSelector(
  selectFeature1State,
  (state: Feature1State) => state.feat_1_action_1_started
);

export const selectFeat1Action2 = createSelector(
  selectFeature1State,
  (state: Feature1State) => state.feat_1_action_2_started
);

export const selectFeat1Action3 = createSelector(
  selectFeature1State,
  (state: Feature1State) => state.feat_1_action_3_started
);
