import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Controller from './components/Controller/Controller';
import Tables from './components/VisualTableRepresentation/Tables';
import {Provider} from 'react-redux';
import store from './redux/store';


function App (){
    return (
      <Provider store = {store}>
        <div>
          <Controller />
          <Tables />
        </div>
      </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('react-page'))
