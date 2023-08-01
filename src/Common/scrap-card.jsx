import React from 'react'

const ScrapCard = (props) => {
    const {scrapItem} = props;
    return (
        <>
            <Card sx={{ borderRadius: '15px' }}>
                <CardContent>
                    <Typography variant='h5' align='left'>
                        {scrapItem.scrap}
                    </Typography>
                    <Typography variant='body1'>&#8377; {scrapItem.price} /kg</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Checkbox
                        name={scrapItem._id}
                        onChange={(e) => handleCheckBoxChange(e)}
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                    />
                    <TextField
                        type='text'
                        size='small'
                        label='Qty'
                        value={textFieldValue[index]}
                        onChange={(event) => handleTextfield(index, event.target.value)}
                        sx={{ width: '7rem' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }} />
                </CardActions>
            </Card>
        </>
    )
}

export default ScrapCard