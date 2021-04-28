
import { useAppSelector } from '../../hooks'
import { selectCount } from '../../../features/counter/counterSlice'
import { selectPlotLayout } from '../../../features/plot/plotSlice'
import styles from './MainPanel.module.css'


interface Title {
  text: string
}

interface PlotLayout {
  title: string
}

export function MainPanel() {
  const count = useAppSelector(selectCount);
  const layout = useAppSelector(selectPlotLayout);

  return (
    <div className={styles.mainPanel}>
      <pre><code>
        {JSON.stringify(layout, null, 2)}
      </code></pre>
    </div>
  )
}