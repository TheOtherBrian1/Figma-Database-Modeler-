import * as React from 'react'
import * as ReactDOM from 'react-dom'
import VisualEditor from './components/VisualEditor/VisualEditor'
import Controller from './components/Controller/Controller'
import ModTable from './components/ModTable/ModTable'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import combineReducers from'./redux/combinedReducers';


const store = createStore(combineReducers);
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
