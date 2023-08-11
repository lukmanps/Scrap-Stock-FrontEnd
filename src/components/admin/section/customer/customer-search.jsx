import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';
import { useState } from 'react';

const CustomersSearch = (props) => {
  const {setSearch, search} = props

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <Card sx={{ p: 2 }}>
    <OutlinedInput
      defaultValue=""
      fullWidth
      value={search}
      onChange={handleChange}
      placeholder="Search customer"
      startAdornment={(
        <InputAdornment position="start">
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <MagnifyingGlassIcon />
          </SvgIcon>
        </InputAdornment>
      )}
      sx={{ maxWidth: 500 }}
    />
  </Card>
  )
};

export default CustomersSearch;