import { AxisControls } from '../../../features/plot/axis/AxisControls'
import { PlotTopSettings } from '../../../features/plot/PlotTopSettings'
import { AxisOpt } from '../../../features/plot/plotSlice'
import styles from './Sidebar.module.css'
import { DataPoints } from '../../../features/plot/data/DataPoints'
import logo from '../../../logo.svg'

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src={logo} alt="logo"/>
      <PlotTopSettings />
      <AxisControls axis={AxisOpt.HORIZ}/>
      <AxisControls axis={AxisOpt.VERT}/>
      <DataPoints />
    </div>
  )
}