import * as React from 'react'
import * as ReactDOM from 'react-dom'
import VisualEditor from './components/VisualEditor/VisualEditor'
import Controller from './components/Controller/Controller'
import ModTable from './components/ModTable/ModTable'
import KeyButtons from './components/KeyButtons/KeyButtons'
function App (){
    return (
      <div>
        <KeyButtons />
        {/*<Controller />
        <ModTable />
        <VisualEditor />*/}
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('react-page'))
