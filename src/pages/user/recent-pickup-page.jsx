import React from 'react';
import RecentPickup from '../../components/user/pickups/recent-pickups';
import UserNavBar from '../../components/user/layout/user-navbar';

const RecentPickupsPage = () => {
  return (
    <div>
        <UserNavBar />
        <RecentPickup />
    </div>
  )
}

export default RecentPickupsPage