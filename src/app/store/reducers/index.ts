import { MessageReducer, messageFeatureKey } from './message.reducer';
import {
  registerMemberReducer,
  registerMemberFeatureKey
} from './register-member.reducer';
import { themeFeatureKey, themeReducer } from './theme.reducer';

export const appReducers = {
  [registerMemberFeatureKey]: registerMemberReducer,
  [messageFeatureKey]: MessageReducer,
  [themeFeatureKey]: themeReducer
};
