import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Feature3State } from './reducers';

const selectFeature3State = createFeatureSelector<Feature3State>('feature3');

export const selectFeat3Action1 = createSelector(
  selectFeature3State,
  (state: Feature3State) => state.feat_3_action_1_started
);

export const selectFeat3Action2 = createSelector(
  selectFeature3State,
  (state: Feature3State) => state.feat_3_action_2_started
);

export const selectFeat3Action3 = createSelector(
  selectFeature3State,
  (state: Feature3State) => state.feat_3_action_3_started
);

export const selectSyncWithFeat1Action2 = createSelector(
  selectFeature3State,
  (state: Feature3State) => state.dependency_of_feat_1_action_1 === 'completed'
);
