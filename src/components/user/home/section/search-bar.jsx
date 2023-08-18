import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import GlobalTheme from '../../../../Theme/GlobalTheme';

const SearchBar = (props) => {
    const { setSearch, search } = props

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <ThemeProvider theme={GlobalTheme}>
            <Card sx={{ p: 2, bgcolor: '#1b1b1b' }} >
                <OutlinedInput
                    defaultValue=""
                    fullWidth
                    value={search}
                    onChange={handleChange}
                    placeholder="Search Scrap"
                    startAdornment={(
                        <InputAdornment position="start">
                            <SvgIcon
                                color="action"
                                fontSize="small"
                            >
                                <MagnifyingGlassIcon color='#018A44'/>
                            </SvgIcon>
                        </InputAdornment>
                    )}
                    sx={{ maxWidth: 500 }}
                />
            </Card>
        </ThemeProvider>
    )
};

export default SearchBar;