import {createSelector} from '@ngrx/store';

export const selectLoginState = state => state.auth;

export const isLoggedIn = createSelector(
  selectLoginState,
  auth => auth.loggedIn
);
export const isLoggedOut = createSelector(
  selectLoginState,
  auth => !auth.loggedIn
);
