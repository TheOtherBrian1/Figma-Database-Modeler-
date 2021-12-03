
const databases = {
    //https://www.w3schools.com/sql/sql_datatypes.asp
    mySQL:{
        character:[
            'char',
            'varchar',
            'binary',
            'varbinary',
            'tinyblob',
            'tinytext',
            'text',
            'blob',
            'medium',
            'mediumtext',
            'mediumblob',
            'longblob',
            'enum: look into',
            'set: another annoyance'
        ],
        numeric:[
            'bit',
            'tinyint',
            'bool',
            'smallint',
            'mediumint',
            'int',
            'bigint',
            'float',
            'double',
            'double precision',
            'dec'
        ],
        date:[
            'date',
            'datetime',
            'timestamp',
            'time',
            'year'
        ],

    },
    //https://www.postgresql.org/docs/9.5/datatype.html
    postgresql: {
        dataTypes:{
            numeric: [
                "smallint",
                "integer",
                "bigint",
                "decimal",
                "numeric",
                "real",
                "double precision",
                "smallserial",
                "serial",
                "bigserial"
            ],
            monetary: [
                "money"
            ],
            character: [
                "varchar",
                "char",
                "text"
            ],
            binary:[
                "bytea"
            ],
            date:[
                "timestamp",
                "date",
                "time",
                "interval"
            ],
            boolean:[
                "boolean"
            ],
            enum:[
                "this requires special implementation that you're not going to prioritize"
            ],
            geometric:[
                "point",
                "line",
                "lseg",
                "box",
                "path",
                "polygon",
                "circle"
            ],
            "network address":[
                "cidr",
                "inet",
                "macaddr"
            ],
            bit:[
                "bit"
            ]
        }
    }
}