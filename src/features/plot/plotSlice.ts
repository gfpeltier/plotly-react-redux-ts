import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from "reselect";
import { RootState } from "../../app/store";


export enum AxisOpt {
  VERT="Vertical",
  HORIZ="Horizontal"
}

export interface Title {
  text: string
}

export interface PlotAxis {
  orientation: AxisOpt,
  title: Title
}

export interface PlotLayout {
  title: Title,
  xaxis: PlotAxis,
  yaxis: PlotAxis,
}

const initialState: PlotLayout = {
  title: {text: "MyTitle"},
  xaxis: {
    orientation: AxisOpt.HORIZ,
    title: {text: "MyHorizTitle"}
  },
  yaxis: {
    orientation: AxisOpt.VERT,
    title: {text: "MyHorizTitle"}
  },
}

export interface AxisPayload<T> {
  axis: AxisOpt,
  data: T
}

const plotLayoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setPlotTitle: (state, action: PayloadAction<string>) => {
      state.title.text = action.payload
    },
    setAxisTitle: (state, action: PayloadAction<AxisPayload<string>>) => {
      if (action.payload.axis == AxisOpt.HORIZ) {
        state.xaxis.title.text = action.payload.data
      } else {
        state.yaxis.title.text = action.payload.data
      }
    },
  },
})

export const { setPlotTitle, setAxisTitle } =  plotLayoutSlice.actions

export const selectPlotLayout = (state: RootState) => state.layout

export const selectPlotTitle = createSelector(
  [selectPlotLayout],
  (layout: PlotLayout) => layout.title.text
)

export const selectHorizAxis = createSelector(
  [selectPlotLayout],
  (layout: PlotLayout) => layout.xaxis
)

export const selectHorizAxisTitle = createSelector(
  [selectHorizAxis],
  (axis: PlotAxis) => axis.title.text
)

export const selectVertAxis = createSelector(
  [selectPlotLayout],
  (layout: PlotLayout) => layout.yaxis
)

export const selectVertAxisTitle = createSelector(
  [selectVertAxis],
  (axis: PlotAxis) => axis.title.text
)

export function selectPlotAxisTitle(axis: AxisOpt) {
  return axis == AxisOpt.HORIZ ? selectHorizAxisTitle : selectVertAxisTitle
}

export default plotLayoutSlice.reducer