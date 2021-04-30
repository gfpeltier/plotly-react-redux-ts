import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from "reselect";
import { RootState } from "../../app/store";
import * as Plotly from 'plotly.js'
import { stat } from 'node:fs';


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
  width: number,
  height: number,
}

const initialState: Partial<Plotly.Layout> = {
  margin: {t: 50, l: 20, r: 20, b: 80},
  title: {text: "My Title"},
  'xaxis.title': "MyHorizTitle",
  'yaxis.title': "MyVertTitle",
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
      if (state.title && typeof(state.title) !== 'string') {
        state.title.text = action.payload
      } else {
        state.title = {text: action.payload}
      }
    },
    setAxisTitle: (state, action: PayloadAction<AxisPayload<string>>) => {
      if (action.payload.axis === AxisOpt.HORIZ) {
        state['xaxis.title'] = action.payload.data
      } else {
        state['yaxis.title'] = action.payload.data
      }
    },
  },
})

export const { setPlotTitle, setAxisTitle } =  plotLayoutSlice.actions

export const selectPlotLayout = (state: RootState) => state.layout

export const selectPlotTitle = createSelector(
  [selectPlotLayout],
  (layout: Partial<Plotly.Layout>) => {
    if (typeof(layout.title) !== 'string') return layout.title?.text
    return ""
  }
)

export const selectHorizAxis = createSelector(
  [selectPlotLayout],
  (layout: Partial<Plotly.Layout>) => layout.xaxis
)

export const selectHorizAxisTitle = createSelector(
  [selectPlotLayout],
  (layout: Partial<Plotly.Layout>) => layout['xaxis.title']
)

export const selectVertAxis = createSelector(
  [selectPlotLayout],
  (layout: Partial<Plotly.Layout>) => layout.yaxis
)

export const selectVertAxisTitle = createSelector(
  [selectPlotLayout],
  (layout: Partial<Plotly.Layout>) => layout['yaxis.title']
)

export function selectPlotAxisTitle(axis: AxisOpt) {
  return axis === AxisOpt.HORIZ ? selectHorizAxisTitle : selectVertAxisTitle
}

export default plotLayoutSlice.reducer