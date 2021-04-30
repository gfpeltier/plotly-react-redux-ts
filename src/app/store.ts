import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import layoutReducer from '../features/plot/plotSlice';
import dataReducer from '../features/plot/data/dataSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    layout: layoutReducer,
    data: dataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
