import * as React from 'react';
import Box from '@mui/material/Box/';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function SelectDatabase() {
  return (
    <Autocomplete
      id="databases"
      sx={{ width: 300 }}
      options={databases}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {console.log(option)}
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
    label: 'MongoDB'
  },
  {
    img: 'https://cloud-object-storage-a5-cos-static-web-hosting-rc0.s3.us-east.cloud-object-storage.appdomain.cloud/postgresql.png',
    label: 'PostgreSQL'
  },
  {
    img: 'https://cloud-object-storage-a5-cos-static-web-hosting-rc0.s3.us-east.cloud-object-storage.appdomain.cloud/mysql.svg',
    label: 'MySQL'
  },
  {
    img: 'https://cloud-object-storage-a5-cos-static-web-hosting-rc0.s3.us-east.cloud-object-storage.appdomain.cloud/access.png',
    label: 'Access'
  },
  {
    img: 'https://cloud-object-storage-a5-cos-static-web-hosting-rc0.s3.us-east.cloud-object-storage.appdomain.cloud/oracle.png',
    label: 'Oracle'
  },
  {
    img: 'https://cloud-object-storage-a5-cos-static-web-hosting-rc0.s3.us-east.cloud-object-storage.appdomain.cloud/sql-server.svg',
    label: 'SQL Server'
  }
]