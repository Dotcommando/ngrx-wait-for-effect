import { createAction, props } from '@ngrx/store';

export const feat3Action1 = createAction('[3 Feature] Action 1');
export const feat3Action2 = createAction('[3 Feature] Action 2');
export const feat3Action3 = createAction('[3 Feature] Action 3');
export const depOnFeat1Action1 = createAction('[3 Feature] Action Which Depends On Action 1 Feature 1', props<{ value: string }>());
