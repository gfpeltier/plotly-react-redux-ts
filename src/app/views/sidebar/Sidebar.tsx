import { AxisControls } from '../../../features/plot/axis/AxisControls'
import { PlotTopSettings } from '../../../features/plot/PlotTopSettings'
import { AxisOpt } from '../../../features/plot/plotSlice'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <PlotTopSettings />
      <AxisControls axis={AxisOpt.HORIZ}/>
      <AxisControls axis={AxisOpt.VERT}/>
    </div>
  )
}