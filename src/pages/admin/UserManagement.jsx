import React from 'react';
import UsersList from '../../components/admin/UsersList';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Typography } from '@mui/material';
import CustomerManagement from '../../components/admin/customer-management/CustomerManagement';

export const UserManagement = () => {
    return (
        <div style={{width:'100%',height:'100vh'}}>
            <CustomerManagement/>
        </div>
    )
}

export default UserManagement;