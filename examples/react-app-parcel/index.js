import {annoyingLog} from '../../packages/annoy-utils/lib/annoy-utils'
import React from 'react'
import ReactDOM from 'react-dom'
import {BasicButton} from '../../packages/buttons/lib/buttons'

annoyingLog()

const App = () => (
  <div>
    <h2>react app</h2>
    <BasicButton onClick={annoyingLog}>The Buttonnnn!</BasicButton>
  </div>
)

ReactDOM.render(<App />, document.querySelector('#react-root'))