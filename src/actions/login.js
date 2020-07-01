import { ACTION_LOGIN, ACTION_LOGOUT } from './actionTypes';

export const login = (address) => ({ type: ACTION_LOGIN, data: address });
export const logout = () => ({ type: ACTION_LOGOUT });
