import React from 'react';
import UsersList from '../../components/admin/UsersList';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const UserManagement = () => {
    const adminInfo = useSelector((state) => state.adminInfo);
    return (
        <div>
            <UsersList />
        </div>
    )
}

export default UserManagement;