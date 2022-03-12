import React from 'react';
import { Grid } from '@mui/material';
import StatisticsCard from '../../components/Card';

const Dashboard = (props: any) => {

    return (
        <Grid container spacing={2}>
            <Grid item md={3}>
            <StatisticsCard title="Today's user" count="200"  icon="leaderboard" color="blue"></StatisticsCard>
            </Grid>

            <Grid item md={3}>
            <StatisticsCard title="Calls" count="2,300"  icon="leaderboard" color="green"></StatisticsCard>
            </Grid>

            <Grid item md={3}>
            <StatisticsCard title="Revenue" count="34k"  icon="leaderboard" color="red"></StatisticsCard>
            </Grid>

            <Grid item md={3}>
            <StatisticsCard title="Number of cases" count="+91"  icon="leaderboard" color="black"></StatisticsCard>
            </Grid>
        </Grid>
    )
}


export default Dashboard;