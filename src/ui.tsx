import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Base from './ModCSS/Base';
import SX from './ModCSS/SX';



function App (){
    return (
      <div>
        <Base />
        <SX />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('react-page'))
