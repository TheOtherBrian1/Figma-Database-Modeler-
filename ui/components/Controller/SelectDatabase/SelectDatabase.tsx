import * as React from 'react';
import Box from '@mui/material/Box/';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useAppDispatch} from '../../../hooks/reduxHooks';
import {selectDatabase} from '../../../redux/settings-menu/settings'
import store from '../../../redux/store';



export default function SelectDatabase() {
  const dispatch = useAppDispatch();
  return (
    <Autocomplete
      id="databases"
      fullWidth = {true}
      options={databases}
      autoHighlight
      onChange= {(e,c:{img:string, label:string})=>dispatch(selectDatabase(c.label))}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={option.img}
            alt=""
          />
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a database"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}

const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
];


const databases = [
  {
    img: 'https://cloud-object-storage-a5-cos-static-web-hosting-rc0.s3.us-east.cloud-object-storage.appdomain.cloud/mongodb.svg',
    label: 'mongodb'
  },
  {
    img: 'https://cloud-object-storage-a5-cos-static-web-hosting-rc0.s3.us-east.cloud-object-storage.appdomain.cloud/postgresql.png',
    label: 'postgresql'
  },
  {
    img: 'https://cloud-object-storage-a5-cos-static-web-hosting-rc0.s3.us-east.cloud-object-storage.appdomain.cloud/mysql.svg',
    label: 'mysql'
  },
  {
    img: 'https://cloud-object-storage-a5-cos-static-web-hosting-rc0.s3.us-east.cloud-object-storage.appdomain.cloud/access.png',
    label: 'access'
  },
  {
    img: 'https://cloud-object-storage-a5-cos-static-web-hosting-rc0.s3.us-east.cloud-object-storage.appdomain.cloud/oracle.png',
    label: 'oracle'
  },
  {
    img: 'https://cloud-object-storage-a5-cos-static-web-hosting-rc0.s3.us-east.cloud-object-storage.appdomain.cloud/sql-server.svg',
    label: 'sql server'
  }
]