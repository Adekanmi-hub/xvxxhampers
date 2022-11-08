import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Landing Page/Navbar'
import Section1 from '../Components/Landing Page/Section1'
import Section2 from '../Components/Landing Page/Section2'
import Section3 from '../Components/Landing Page/Section3'
import Section4 from '../Components/Landing Page/Section4'
import Section5 from '../Components/Landing Page/Section5'
import Section6 from '../Components/Landing Page/Section6'
import Footer from '../Components/Landing Page/Footer'

export const Landing = () => {
    return (
        <Box>
            <Box
                sx={{
                    padding: {
                        xl: "2rem 3rem"
                    },
                }}
            >
                <Navbar />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </Box>
            <Section6 />
            <Footer />
        </Box>
    )
}

export default Landing