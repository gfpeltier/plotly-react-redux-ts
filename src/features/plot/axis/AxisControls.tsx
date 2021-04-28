import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { AxisOpt, selectPlotAxisTitle, AxisPayload, setAxisTitle } from '../plotSlice'

export interface AxisCtrlProps {
  axis: AxisOpt
}

export function AxisControls(props: AxisCtrlProps) {

  const title = useAppSelector(selectPlotAxisTitle(props.axis))
  const dispatch = useAppDispatch();

  const [sTitle, setStTitle] = useState(title)

  return (
    <div>
      <h3>{props.axis} Axis Controls</h3>
      <hr/>
      <Form.Group controlId="plotTitle">
        <Form.Label>Horizontal Axis Title</Form.Label>
        <Form.Control 
          type="text" 
          value={sTitle} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStTitle(e.target.value)}
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) => 
            dispatch(setAxisTitle({axis: props.axis, data: sTitle} as AxisPayload<string>))} 
        />
      </Form.Group>
    </div>
  )
}