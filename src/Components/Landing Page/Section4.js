import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export const Section4 = () => {
    return (
        <Box>
            <Box
                display="flex"
                justifyContent="space-between"
                sx={{
                    margin: "3rem 0rem",
                    width: "95%"
                }}
            >
                <Box
                    sx={{
                        width: "45%"
                    }}
                >
                    <img width="100%" height="auto" src={require("../../Assets/Gold.jpg")} alt="" />
                </Box>
                <Box
                    sx={{
                        width: "40%"
                    }}
                >
                    <Box
                        borderBottom="1px solid grey"
                    >
                        <Typography
                            variant="h3"
                            gutterBottom
                            sx={{
                                fontFamily: "Manrope",
                                fontWeight: "600"
                            }}
                        >
                            Silver
                        </Typography>
                    </Box>

                    {/* ITEM 1 */}
                    <Box
                        sx={{
                            padding: "1rem 0rem"
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    fontFamily: "Inter",
                                    fontWeight: "400"
                                }}
                            >
                                1. Fruit Juice
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                sx={{
                                    fontFamily: "Manrope",
                                }}
                            >
                                Chivita, Chi-Exotic, 5Alive Pulpy, Others.
                            </Typography>
                        </Box>

                        {/* ITEM 2 */}
                        <Box>
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    fontFamily: "Inter",
                                    fontWeight: "400"
                                }}
                            >
                                2. Cup Cakes
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                sx={{
                                    fontFamily: "Manrope",
                                }}
                            >
                                Vanilla, Red Velvet, Chocolate.
                            </Typography>
                        </Box>

                        {/* ITEM 3 */}
                        <Box>
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    fontFamily: "Inter",
                                    fontWeight: "400"
                                }}
                            >
                                3. Mug
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                sx={{
                                    fontFamily: "Manrope",
                                }}
                            >
                                Small, Medium or Large.
                            </Typography>
                        </Box>

                        {/* ITEM 4 */}
                        <Box>
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    fontFamily: "Inter",
                                    fontWeight: "400"
                                }}
                            >
                                4. Fruits
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                sx={{
                                    fontFamily: "Manrope",
                                }}
                            >
                                Bananas, Grapes, Oranges, Pine-Apple, Others.
                            </Typography>
                        </Box>

                        {/* ITEM 5 */}
                        <Box>
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    fontFamily: "Inter",
                                    fontWeight: "400"
                                }}
                            >
                                5. Chocolates
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                gutterBottom
                                sx={{
                                    fontFamily: "Manrope",
                                }}
                            >
                                Mars, Snickers, Eclairs, Others.
                            </Typography>
                        </Box>

                        {/* ITEM 6 */}
                        <Box
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Box>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{
                                        fontFamily: "Inter",
                                        fontWeight: "400"
                                    }}
                                >
                                    6. Greeting Cards
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    gutterBottom
                                    sx={{
                                        fontFamily: "Manrope",
                                    }}
                                >
                                    Xmas, Birthdays, Others.
                                </Typography>
                            </Box>
                            <Box
                                padding="1rem 0rem 0rem 0rem"
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#C0C0C0",
                                        color: "black"
                                    }}
                                >
                                    Order Now
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Section4