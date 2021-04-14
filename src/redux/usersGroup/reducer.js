/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
  loading: false,
  success: false,
  groups: [],
  errorMessage: '',
  token: null
};

const siteSlice = createSlice({
  name: 'group',
  initialState,

  reducers: {
    createUserGroup(state) {
      state.loading = true;
    },
    createUserGroupSuccess(state, action) {
      console.log('reducer group', action.payload.data);
      return {
        ...state,
        loading: false,
        success: true,
        groups: [...state.groups, action.payload.data]
      };
    },
    createUserGroupFail(state) {
      state.loading = false;
    },
    getUserGroup(state) {
      state.loading = true;
    },
    getUserGroupSuccess(state, action) {
      return {
        ...state,
        laoding: false,
        success: true,
        groups: action.payload.data
      };
    },
    getUserGroupFail(state) {
      state.loading = false;
    },

    updateUserGroup(state) {
      state.loading = true;
    },
    updateUserGroupSuccess(state, action) {
      return {
        ...state,
        laoding: false,
        success: true,
        groups: state.groups.map(el =>
          el._id === action.payload.data.id
            ? { ...el, ...action.payload.data.group }
            : el
        )
      };
    },
    updateUserGroupFail(state) {
      state.loading = false;
    },
    reset(state) {
      return {
        ...state,
        loading: false,
        success: false
      };
    }
  }
});

export const { actions, reducer } = siteSlice;
