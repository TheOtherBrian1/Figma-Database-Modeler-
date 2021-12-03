import * as React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import {Table, Col} from '../../redux/tableReducer';


const VisualEditor = ()=>{
    const tableList = useAppSelector(state=>state.tableReducer);

    return(
        {
            tableList.map((table:Table, tableIndex)=>
                <TableGrid>
                    <Title />
                    {
                        table.col.map((block:Col, ColIndex)=>
                            <ColumnBlock>
                                <Id />
                                <DataType />
                                <Constraints />
                                <KeyButtons />
                            </ColumnBlock>
                        )
                    }
                </TableGrid>
            )
        }
        </div>
    )
}

export default VisualEditor;
