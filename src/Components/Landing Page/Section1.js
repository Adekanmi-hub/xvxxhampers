import { Box, Typography } from '@mui/material'
import React from 'react'

export const Section1 = () => {
    return (
        <Box
            padding="1rem 0rem"
            borderBottom="2px solid black"
        >
            <Box
                textAlign="center"
            >
                <Typography
                    variant="h3"
                    fontFamily="Inter"
                    fontWeight="500"
                >
                    Welcome To GiftHouse
                </Typography>
                <Typography
                    variant="subtitle1"
                >
                    Putting Smiles On Your Faces.
                </Typography>
            </Box>
            <Box>
                <img width="100%" height="auto" src={require("../../Assets/hpbg.jpg")} alt="" />
            </Box>
        </Box>
    )
}

export default Section1