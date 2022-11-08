import React from 'react'
import { Box, Typography } from '@mui/material'


export const Header = () => {
    return (
        <Box
        borderBottom="2px solid black"
        >
            <Box
                display="flex"
                justifyContent="space-between"
            >
                <Box>
                    <Typography
                        sx={{
                            fontWeight: "800",
                            typography: {
                                xl: "h6"
                            },
                        }}
                    >
                        TheGiftHouse
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    width="20%"
                >
                    <Typography>
                        About Us
                    </Typography>

                    <Typography>
                        Contact Us
                    </Typography>

                    <Typography>
                        Login
                    </Typography>

                    <Typography>
                        Cart
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Header