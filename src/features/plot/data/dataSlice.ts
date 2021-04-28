import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface DataPoint {
  x: number,
  y: number
}

export const dataSlice = createSlice({
  name: 'data',
  initialState: new Array<DataPoint>(),
  reducers: {
    addDataPoint: (state: DataPoint[], action: PayloadAction<DataPoint>) => { state.push(action.payload) }
  }
})