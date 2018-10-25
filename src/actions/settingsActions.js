import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTERATION
} from './types';

export const setDisabledBalanceOnAdd = () => {
  return {
    type: DISABLE_BALANCE_ON_ADD
  };
};

export const setDisabledBalanceOnEdit = () => {
  return {
    type: DISABLE_BALANCE_ON_EDIT
  };
};

export const setAllowRegisteration = () => {
  return {
    type: ALLOW_REGISTERATION
  };
};
