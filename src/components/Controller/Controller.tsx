import * as React from 'react';
import './Controller.css';
import SelectDatabase from './SelectDatabase/SelectDatabase';
import SelectTable from './SelectTable/SelectTable';
import DownloadCodeButtons from './DownloadCodeButtons/DownloadCodeButtons';

const Controller = ()=>{

    return(
    <div id = 'controller'>
        <SelectDatabase />
        <SelectTable />
        <DownloadCodeButtons />
        {/*<input type = 'search' id = 'search-tables' placeholder = 'Search Tables' />
        <select>
            <option>PostgreSQL</option>
            <option>Access</option>
            <option>MySQL</option>
            <option>Redis</option>
            <option>MongoDB</option>
        </select>
        <ul>
            <li>search tables</li>
            <li>preferred database</li>
            <li>test selected</li>
            <li>download selected</li>
            <li>download model</li>
            <li>Add Row</li>
            <li>warn before row deletion</li>
        </ul>
    */}
    </div>
    )
}

export default Controller;