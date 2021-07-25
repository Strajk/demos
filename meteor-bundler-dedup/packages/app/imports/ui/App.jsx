import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import moment from "moment"
import * as utils from "utils"

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <dl>
      <dt>Moment from app package</dt>
      <dd>{moment().format()}</dd>

      <dt>Moment from utils package</dt>
      <dd>{utils.formatDate()}</dd>
    </dl>

    <hr/>

    <Hello/>
    <Info/>
  </div>
);
