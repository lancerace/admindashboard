import React from "react";
import { Box, Card, Divider, Icon, Typography } from "@mui/material";

interface IProps {
    title: string;
    count: string;
    color: 'blue' | 'red' | 'green' | 'black';
    icon: string;
}

const StatisticsCard = (props: IProps) => {
    const color = {
        blue: "linear-gradient(195deg, #49a3f1, #1A73E8)",
        black: "linear-gradient(195deg, #42424a, #191919)",
        green: "linear-gradient(195deg, #66BB6A, #43A047)",
        red: "linear-gradient(195deg, #EC407A, #D81B60)"
    };


    return (
        <Card sx={{ overflow: 'visible', borderRadius: "0.75rem" }}>
            <Box display="flex" justifyContent="space-between" pt={1} px={2}>
                <Box
                    sx={{
                        background: color[props.color],
                        color: "#ffffff",
                        borderRadius: "0.75rem",
                        boxShadow: "0rem 0.25rem 1.25rem 0rem rgb(0 0 0 / 14%), 0rem 0.4375rem 0.625rem -0.3125rem rgb(0 187 212 / 40%)"
                    }}
                    borderRadius="xl"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="4rem"
                    height="4rem"
                    mt={-3}>
                    <Icon fontSize="medium" color="inherit">
                        {props.icon}
                    </Icon>
                </Box>


                <Box textAlign="right" lineHeight={1.25}>
                    <Typography variant="body1" sx={{
                        color: "#7b809a",
                        fontWeight: "300",
                        fontSize: "0.875rem"
                    }}>
                        {props.title}
                    </Typography>
                    <Typography sx={{
                        color: "#344767",
                        fontSize: "1.5rem",
                        fontWeight:"700"
                    }} variant="h4">{props.count}</Typography>
                </Box>
            </Box>

            <Divider sx={{
                margin: "1rem 0",
                opacity: 0.25,
                backgroundImage: "linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0))!important",
                borderBottom: "none",
                height: "0.0625rem"
            }} />

            <Box pb={2} px={2}>
            </Box>

        </Card>
    )
}
export default StatisticsCard;