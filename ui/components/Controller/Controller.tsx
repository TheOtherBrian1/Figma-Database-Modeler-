import * as React from 'react';
import './Controller.css';
import SelectDatabase from './SelectDatabase/SelectDatabase';
import SelectTable from './SelectTable/SelectTable';
import DownloadCodeButtons from './DownloadCodeButtons/DownloadCodeButtons';

const Controller = () => {
    return(
    <div id = 'controller'>
        <div>
            <SelectDatabase />
        </div>
        <div>
            <SelectTable />
        </div>
        <div className = "organizeButtons">
            <DownloadCodeButtons />
        </div>
    </div>
    )
}

export default Controller;