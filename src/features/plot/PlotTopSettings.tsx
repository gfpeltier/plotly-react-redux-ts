import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPlotTitle, setPlotTitle } from './plotSlice';

export function PlotTopSettings() {

  const plotTitle = useAppSelector(selectPlotTitle) || ""
  const dispatch = useAppDispatch()
  const [pTitle, setPTitle] = useState(plotTitle)

  return (
    <div>
      <h3>Plot Settings</h3>
      <hr/>
      <Form.Group controlId="plotTitle">
        <Form.Label>Plot Title</Form.Label>
        <Form.Control 
          type="text" 
          value={pTitle} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPTitle(e.target.value)} 
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setPlotTitle(pTitle))}/>
      </Form.Group>
    </div>
  )
}