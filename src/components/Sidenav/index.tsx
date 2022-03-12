import React from 'react';
import { useLocation, NavLink } from "react-router-dom";
import { Drawer, ListItemIcon, ListItemText, ListItem, List, Icon, Box, Theme } from '@mui/material';

const Sidenav = ({ routes }: any) => {
    const location = useLocation();
    //const pathname = location.pathname.replace("/", "");

    const renderRoutes = routes.map(({ name, icon, key, route }: any) => {
        return (
            <NavLink key={key} to={route} style={{ textDecoration: "none" }}>
                <ListItem component="li">
                    <Box sx={{
                        background: (location.pathname === route) ? "linear-gradient(195deg, #49a3f1, #1A73E8)" : "transparent",
                        color: "#ffffff",
                        alignItems: "center",
                        width: "100%",
                        padding: "0.5rem 0.625rem",
                        //margin: "0.09375rem 1rem",
                        borderRadius: "0.375rem",
                        display: "flex",
                        boxShadow: (location.pathname === route) ? "0rem 0.25rem 0.375rem -0.0625rem rgb(0 0 0 / 10%), 0rem 0.125rem 0.25rem -0.0625rem rgb(0 0 0 / 6%)" : null,
                        "&:hover, &:focus": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)"
                        }
                    }}>
                        <ListItemIcon sx={{
                            minWidth: '32px',
                            minHeight: '32px',
                            display: "grid",
                            placeItems: "center",
                            color: '#ffffff'
                        }}>
                            {typeof icon === "string" ? (
                                <Icon>{icon}</Icon>) : (icon)}
                        </ListItemIcon>
                        <ListItemText primary={name} sx={(theme: Theme) => {

                            const { typography } = theme;
                            const { fontWeightRegular, fontWeightLight } = typography;
                            return {
                                marginLeft: '10px',
                                "& span": {
                                    fontWeight: fontWeightRegular,
                                    fontSize: '0.875rem',
                                    lineHeight: 0,
                                },
                            }
                        }} />
                    </Box>
                </ListItem>
            </NavLink>)
    });

    return (
        <Drawer variant="permanent" anchor='left' sx={{
            '& .MuiDrawer-paper': {
                width: 250,
                left: 0,
                height: "calc(100vh - 2rem)",
                margin: "1em",
                borderRadius: "0.75em", position: "fixed", zIndex: 1200,
                background: "linear-gradient(195deg, #42424a, #191919)"
            },
        }}>
            <List>{renderRoutes}</List>
        </Drawer>

    )
}


export default Sidenav;