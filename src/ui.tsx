import * as React from 'react'
import * as ReactDOM from 'react-dom'
import VisualEditor from './components/VisualEditor/VisualEditor'
import Controller from './components/Controller/Controller'
function App (){
  
    return (
      <div>
        <Controller />
        <VisualEditor />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('react-page'))
