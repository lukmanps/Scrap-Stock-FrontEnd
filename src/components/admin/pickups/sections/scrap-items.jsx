import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, InputAdornment } from '@mui/material'
import axios from '../../../../config/axios';

const ScrapItems = (props) => {
    const { pickupId } = props;
    const [scraps, setScraps] = useState([]);

    useEffect(() => {
        axios.get('/admin/get-selected-scraps?id=' + pickupId)
            .then((response) => {
                setScraps(response?.data);
            })
            .catch((err) => {
                console.log(err, " :AXIOS ERROR");
            })
    }, []);
    return (
        <Box>
            <Card>
                <CardContent>
                    <Box>
                        <Typography variant='h6'>Scraps Selected</Typography>
                    </Box>
                    <Box >

                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        No.
                                    </TableCell>
                                    <TableCell>
                                        Scrap
                                    </TableCell>
                                    <TableCell>
                                        Category
                                    </TableCell>
                                    <TableCell>
                                        Price
                                    </TableCell>
                                    <TableCell>
                                        Qty
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            {scraps.map((scrap, index) => (
                                <TableBody key={index}>
                                    <TableCell>
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>
                                        {scrap.scrap.scrap}
                                    </TableCell>
                                    <TableCell>
                                        {scrap.scrap.category}
                                    </TableCell>
                                    <TableCell>
                                        {scrap.scrap.price} /kg
                                    </TableCell>
                                    <TableCell>
                                        {scrap.qty} kg
                                    </TableCell>
                                </TableBody>
                            ))}
                        </Table>


                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ScrapItems