import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { selectDataPoints, addDataPoint, deleteDataPoint } from './dataSlice';
import styles from './DataPoints.module.css';

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export function DataPoints() {

  const dispatch = useAppDispatch();
  const currentData = useAppSelector(selectDataPoints)
  const [currX, setCurrX] = useState(0.0)
  const [currY, setCurrY] = useState(0.0)

  return (
    <div>
      <h3>Plot Data</h3>
      <hr/>
      <Form.Group controlId="xCoord">
        <Form.Label>Data Point X Coord</Form.Label>
        <Form.Control
          type="number"
          value={currX}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrX(+e.target.value)} />
      </Form.Group>
      <Form.Group controlId="yCoord">
        <Form.Label>Data Point Y Coord</Form.Label>
        <Form.Control
          type="number"
          value={currY}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrY(+e.target.value)} />
      </Form.Group>
      <Button onClick={(e) => dispatch(addDataPoint({x: currX, y: currY}))}>Add Data Point</Button>
      <hr/>
      <ul className={styles.pointsList}>
        {currentData.map((value, index) => {
          return <li key={"dpt" + index}>x: {value.x}, y: {value.y} <span onClick={(e) => dispatch(deleteDataPoint(index))}>x</span></li>
        })}
      </ul>
    </div>
  )
}