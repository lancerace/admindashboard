import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Sidenav from './components/Sidenav';
import { Grid } from '@mui/material';
import routes from './routes';
import './app.css';

function App() {

  const getRoutes = (allRoutes: any) =>
    allRoutes.map((route: any) => {
      if (route.route) {
        return <Route path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  return (
    <Grid container className='container'>

      <Grid item md={1}>
        <Sidenav routes={routes}></Sidenav>
      </Grid>

      <Grid item md container>
        <Grid item md={1}></Grid>
        <Grid item md style={{ paddingLeft: "5%", paddingRight: "3%", paddingTop: "2em" }}>
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default App;
