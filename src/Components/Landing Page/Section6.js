import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material"
import background from "../../Assets/HamperWorld1.jpg"

function Section6() {
    return (
        <Box
            sx={{
                padding: {
                    xs: "2.5rem 1.5rem",
                    sm: "2.5rem 3rem",
                    md: "2.5rem 6rem",
                    lg: "2.5rem 12rem 5rem 12rem",
                    xl: "4rem 10rem 5rem 10rem",
                },
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
                
            }}
        >
            <Box backgroundColor="#F9FAFB" borderRadius="10px">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{
                        flexDirection: {
                            xs: "column",
                            lg: "row",
                        },
                        alignItems: {
                            sm: "center",
                        },
                        padding: {
                            xs: "4rem 3rem",
                            sm: "4rem 5rem",
                            xl: "4rem 8rem",
                        },
                        textAlign: {
                            xs: "center",
                            sm: "left",
                        },
                    }}
                >
                    <Box>
                        <Typography variant="h5" fontWeight="600">
                            Join 2,000+ Subscribers
                        </Typography>
                        <Typography
                            marginTop="1rem"
                            variant="body1"
                            color="#667085"
                            fontWeight="500"
                        >
                            Stay in the loop with everything you need to know.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginTop: {
                                xs: "2rem",
                                md: "3rem",
                                lg: "0",
                            },
                        }}
                    >
                        <Box
                            display="flex"
                            sx={{
                                flexDirection: {
                                    xs: "column",
                                    sm: "row",
                                },
                            }}
                        >
                            <Box borderRadius="20px">
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    label="Enter your email"
                                    fullWidth
                                    id="email"
                                    // value={formik.values.email}
                                    // onChange={formik.handleChange("email")}
                                    sx={{
                                        width: {
                                            xs: "100%",
                                            sm: "16rem",
                                            md: "16rem",
                                            xl: "20rem",
                                        },
                                    }}
                                />
                            </Box>
                            <Box
                                color="#002E5F"
                                sx={{
                                    marginTop: {
                                        xs: "1rem",
                                        sm: "0",
                                    },
                                    marginLeft: {
                                        xs: "0",
                                        sm: "1rem",
                                    },
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#002E5F",
                                        color: "white",
                                    }}
                                    // onClick={e => {
                                    //     formik.handleSubmit(e)
                                    // }}
                                >
                                    Subscribe
                                </Button>
                            </Box>
                        </Box>
                        <Box>
                            <Typography
                                marginTop="0.5rem"
                                variant="body2"
                                color="#667085"
                                fontWeight="500"
                            >
                                We care about your data in our <a href="/">privacy policy</a>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Section6