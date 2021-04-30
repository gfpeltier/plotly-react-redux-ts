import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";


export interface DataPoint {
  x: number,
  y: number
}

export const dataSlice = createSlice({
  name: 'data',
  initialState: new Array<DataPoint>(),
  reducers: {
    addDataPoint: (state: DataPoint[], action: PayloadAction<DataPoint>) => { state.push(action.payload) },
    deleteDataPoint: (state: DataPoint[], action: PayloadAction<number>) => { state.splice(action.payload, 1) },
  }
})

export const { addDataPoint, deleteDataPoint } = dataSlice.actions

export const selectDataPoints = (state: RootState) => state.data

export default dataSlice.reducer