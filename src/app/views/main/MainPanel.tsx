
import { useAppSelector } from '../../hooks'
import { selectPlotLayout } from '../../../features/plot/plotSlice'
import styles from './MainPanel.module.css'
import { selectDataPoints } from '../../../features/plot/data/dataSlice';
import Plot from 'react-plotly.js';

export function MainPanel() {
  const layout = useAppSelector(selectPlotLayout);
  const data = useAppSelector(selectDataPoints);

  console.log(layout)

  return (
    <div className={styles.mainPanel}>
      <Plot 
        data={[{x: data.map(d => d.x), y: data.map(d => d.y), type: 'scatter'}]}
        layout={{...layout}}
        config={{displayModeBar: false}}
      />
      <pre><code>
        {JSON.stringify(layout, null, 2)}
      </code></pre>
      <hr/>
      <pre><code>
        {JSON.stringify(data, null, 2)}
      </code></pre>
    </div>
  )
}