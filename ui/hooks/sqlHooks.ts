import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { generateSQL} from '../redux/settings-menu/settingsReducer';

export const useSqlGenerator = () =>{
    const dispatch = useAppDispatch();
    
    const generator = (database) =>{
        dispatch(generateSQL(false));    
        let sql = "";
        for(const table of database){
            sql += `CREATE TABLE ${table.title[0]}(\n`
            for(const col of table.cols){
                sql += `\t${col.id[0]}`
                sql += ` ${col.dataType[0]}`
                for(const constraints of col.constraints[0]){
                    console.log(constraints, 'constraints', col.constraints, 'all constraints');
                    sql += ` ${constraints}`;

                }
                if (col.pk[0] !== 'N/A' && col.pk)
                    sql += ` PRIMARY KEY (${col.id[0]})`;
                if (col.fk[0] !== 'N/A' && col.fk)
                    sql += ` FOREIGN KEY (${col.id[0]})`

                sql += ',\n'
            } 
            sql = sql.slice(0, sql.length - 1);
            sql+= '\n);\n'
        }
        console.log(sql);
        dispatch(generateSQL(true));
        return sql;
    }
    return generator;
}

