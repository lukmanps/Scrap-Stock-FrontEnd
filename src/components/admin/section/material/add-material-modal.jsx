import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Box,
    Paper,
    Select,
    MenuItem,
    InputLabel,
    InputAdornment
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { addMaterial } from '../../APIs/submitData/submitAPI';
import axios from '../../../../config/axios';



const dialogStyle = {
    paper: {
        backgroundColor: '#1E1E1E', // Replace 'your-desired-background-color' with your preferred color
    },
};

const AddMaterialModal = ({ open, onClose, onAddProduct }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
      };

    const onSubmit = (formData, event) => {
        // Perform any additional validation if needed
        event.preventDefault();

        const data = {
            category: category,
            ...formData
            
        }
        console.log(data, "::DATA");
        axios.post('/admin/add-scrap', data)
        .then((response)=>{
            if(response.data?.status === false){
                toast.error(response.data?.message);
                onClose();
            } else {
                toast.success('Scrap added successfully!');
                reset();
                onClose();
            }
        })
        
        
    };

    return (
        <Box sx={{ backgroundColor: '#1E1E1E' }}>
            <Toaster />
            <Dialog open={open} onClose={onClose} PaperProps={{
                style: dialogStyle.paper,
            }}>
                <DialogTitle color={'white'}>Add Product</DialogTitle>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <DialogContent>
                        <DialogContentText color='white' mb={3}>
                            Please enter the details of the new product.
                        </DialogContentText>


                        <Box>
                            <InputLabel id="demo-simple-select-autowidth-label" marginBottom={5}>Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Category"
                                onChange={handleChange}
                            >
                                <MenuItem value='Plastic'>Plastic</MenuItem>
                                <MenuItem value='Paper'>Paper</MenuItem>
                                <MenuItem value='Metal'>Metal</MenuItem>
                                <MenuItem value='E-waste'>E-waste</MenuItem>
                                <MenuItem value='other'>Other</MenuItem>
                            </Select>
                        </Box>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="product-name"
                            label="Material"
                            type="text"
                            fullWidth
                            {...register('scrap', {
                                required: 'Enter a valid material'
                            })}
                            error={Boolean(errors.scrap)}
                            helperText={errors.scrap ? errors.scrap.message : ''}
                        />
                        <TextField
                            className='text-field'
                            margin="dense"
                            id="product-price"
                            label="Price"
                            type="number"
                            fullWidth
                            color='primary'
                            InputProps={{
                                startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            }}
                            {...register('price', {
                                required: 'Enter Price'
                            })}
                            error={Boolean(errors.price)}
                            helperText={errors.price ? errors.price.message : ''}
                        />

                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'block' }}
                            id="image-input"
                        />



                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Cancel
                        </Button>
                        <Button type='submit' color="primary" variant='outlined'>
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>

    );
};

export default AddMaterialModal;
