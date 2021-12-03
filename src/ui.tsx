import * as React from 'react'
import * as ReactDOM from 'react-dom'
import VisualEditor from './components/VisualEditor/VisualEditor'
import Controller from './components/Controller/Controller'
import ModTable from './components/ModTable/ModTable'
function App (){
    return (
      <div>
        <Controller />
        <ModTable />
        <VisualEditor />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('react-page'))
