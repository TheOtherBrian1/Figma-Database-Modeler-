import * as React from 'react'
import * as ReactDOM from 'react-dom'
import VisualEditor from './components/VisualTableRepresentation/VisualEditor/VisualEditor'
import Controller from './components/Controller/Controller'
import ModTable from './components/Controller/ModTable/ModTable'
import {Provider} from 'react-redux';
import store from './redux/store';


function App (){
    return (
      <Provider store = {store}>
        <div>
          <Controller />
          <ModTable />
          <VisualEditor />
        </div>
      </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('react-page'))
