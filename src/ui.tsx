import * as React from 'react'
import * as ReactDOM from 'react-dom'
import VisualEditor from './components/VisualEditor/VisualEditor'
import Controller from './components/Controller/Controller'
import ModTable from './components/ModTable/ModTable'
import Test from './Test';
function App (){
    return (
      <div>
        <Test />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('react-page'))
