/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
  loading: false,
  success: false,
  tasks: [],
  errorMessage: '',
  token: null
};

const taskSlice = createSlice({
  name: 'task',
  initialState,

  reducers: {
    createTask(state) {
      state.loading = true;
    },
    createTaskSuccess(state, action) {
      console.log('reducer', action.payload.data);
      return {
        ...state,
        loading: false,
        success: true,
        tasks: [...state.tasks, action.payload.data]
      };
    },
    createTaskFail(state) {
      state.loading = false;
    },
    getTasks(state) {
      state.loading = true;
    },
    getTasksSuccess(state, action) {
      return {
        ...state,
        loading: false,
        success: true,
        tasks: action.payload.data
      };
    },
    getTasksFail(state) {
      state.loading = false;
    },

    updateTask(state) {
      state.loading = true;
    },
    updateTaskSuccess(state, action) {
      return {
        ...state,
        loading: false,
        success: true,
        tasks: state.tasks.map(el =>
          el._id === action.payload.data.id
            ? { ...el, ...action.payload.data.site }
            : el
        )
      };
    },
    updateTaskFail(state) {
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

export const { actions, reducer } = taskSlice;
// export const {
//   signup, signupSuccess, signupFail, signIn, signInSuccess, signInFail
// } = actions;
