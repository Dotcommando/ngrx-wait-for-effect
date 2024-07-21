import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Feature2State } from './reducers';

const selectFeature2State = createFeatureSelector<Feature2State>('feature2');

export const selectFeat2Action1 = createSelector(
  selectFeature2State,
  (state: Feature2State) => state.feat_2_action_1_started
);

export const selectFeat2Action2 = createSelector(
  selectFeature2State,
  (state: Feature2State) => state.feat_2_action_2_started
);

export const selectFeat2Action3 = createSelector(
  selectFeature2State,
  (state: Feature2State) => state.feat_2_action_3_started
);
