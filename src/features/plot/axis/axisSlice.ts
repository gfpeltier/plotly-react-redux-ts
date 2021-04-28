import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { Title } from "../plotSlice";

// export enum AxisOpt {
//   VERT="Vertical",
//   HORIZ="Horizontal"
// }

// export interface AxisLayout {
//   title: Title
// }

// const initialState: Map<AxisOpt, AxisLayout> = new Map([
//   [ 
//     AxisOpt.HORIZ, 
//     {
//       title: {text: "MyHorizAxisTitle"}
//     }
//   ],
//   [
//     AxisOpt.VERT,
//     {
//       title: {text: "MyVertAxisTitle"}
//     }
//   ]
// ])

// export interface AxisPayload<T> {
//   axis: AxisOpt,
//   data: T
// }

// export const axisSlice = createSlice({
//   name: 'axis',
//   initialState,
//   reducers: {
//     setTitle: (state: Map<AxisOpt, AxisLayout>, action: PayloadAction<AxisPayload<string>>) => {
//       const ax = state.get(action.payload.axis)
//       if (ax) {
//         ax.title.text = action.payload.data
//       }
//     },
//   }
// })

// export const { setTitle } = axisSlice.actions

// export function selectAxisTitle(axisOpt: AxisOpt) {
//   return (state: RootState) => state.axes.get(axisOpt)?.title.text
// }

// export default axisSlice.reducer