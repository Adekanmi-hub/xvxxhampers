import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import TextField from "@mui/material/TextField"
import Divider from "@mui/material/Divider"
import { FiPhone, FiMail } from "react-icons/fi"
import { ImLocation2 } from "react-icons/im"

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: {
          xs: "3rem 1.5rem",
          sm: "3rem 3rem",
          md: "3rem 4.5rem",
          lg: "3rem 6rem",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "50%",
              sm: "33.33%",
              md: "25%",
            },
            mb: {
              xs: "1.5rem",
              md: "0rem",
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#FFFFFF", fontWeight: "700", cursor: "pointer" }}
            gutterBottom
          >
            TheGiftHouse
          </Typography>
          <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
            Our purpose is to help our customers reach out to their loved ones through our services.
          </Typography>
        </Box>

        <Box
          sx={{
            width: {
              xs: "45%",
              sm: "30%",
              md: "auto",
            },
            mb: {
              xs: "1.5rem",
              sm: "0rem",
            },
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "#FFFFFF" }}>
            COMPANY
          </Typography>
          <List component="ul" sx={{ color: "#FFFFFF" }} dense>
            <ListItem
              sx={{ display: "list-item", cursor: "pointer" }}
              disableGutters
            >
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem
              sx={{ display: "list-item", cursor: "pointer" }}
              disableGutters
            >
              <ListItemText primary="FAQs" />
            </ListItem>
          </List>
        </Box>

        <Box
          sx={{
            width: {
              xs: "50%",
              sm: "30%",
              md: "auto",
            },
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "#FFFFFF" }}>
            HELP
          </Typography>
          <List component="ul" sx={{ color: "#FFFFFF" }} dense>
            <ListItem
              sx={{ display: "list-item", cursor: "pointer" }}
              disableGutters
            >
              <ListItemText primary="Customer Support" />
            </ListItem>
            <ListItem
              sx={{ display: "list-item", cursor: "pointer" }}
              disableGutters
            >
              <ListItemText primary="Terms & Conditions" />
            </ListItem>
            <ListItem
              sx={{ display: "list-item", cursor: "pointer" }}
              disableGutters
            >
              <ListItemText primary="Privacy Policy" />
            </ListItem>
          </List>
        </Box>

        <Box
          component="form"
          sx={{
            width: {
              xs: "45%",
              sm: "33.33%",
              md: "25%",
            },
          }}
        >
          <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
            NEWSLETTER
          </Typography>
          <TextField
            id="email"
            fullWidth
            size="small"
            placeholder="Enter your email address"
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "0.5rem",
              mt: "1rem",
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF7801",
              "&:hover": {
                backgroundColor: "#FF7801",
              },
              width: "100%",
              mt: "1rem",
              fontSize: {
                xs: "10px",
                sm: "14px",
              },
            }}
          >
            Subscribe Now
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          py: "1rem",
          px: { xs: "1rem", md: "0rem" },
          mt: "1rem",
        }}
      >
        <Box
          sx={{
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            mr: "1rem",
            mt: {
              xs: "0.5rem",
              sm: "0rem",
            },
          }}
        >
          <FiPhone />
          <Typography
            variant="body2"
            sx={{ ml: "0.5rem" }}
            color="inherit"
            underline="hover"
          >
            Hotline: +234 xxxx xxx xxxx
          </Typography>
        </Box>
        <Box
          sx={{
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            mr: "1rem",
            mt: {
              xs: "0.5rem",
              sm: "0rem",
            },
          }}
        >
          <ImLocation2 />
          <Typography
            variant="body2"
            sx={{ ml: "0.5rem" }}
            color="inherit"
            underline="hover"
          >
            Nigeria
          </Typography>
        </Box>
        <Box
          sx={{
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            mt: {
              xs: "0.5rem",
              sm: "0rem",
            },
          }}
        >
          <FiMail />
          <Typography
            variant="body2"
            sx={{ ml: "0.5rem" }}
            color="inherit"
            underline="hover"
          >
            info@thegifthouse.com
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: { xs: 0, md: "1rem" },
            bottom: { xs: "1rem", md: "0.5rem" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            width: { md: "125px" },
            height: { xs: "125px", md: "auto" },
          }}
        >
          <Box
            href="https://twitter.com"
            underline="none"
            target="_blank"
          >
            <img src={require("../../Assets/Twitter.png")} alt="twitter" />
          </Box>
          <Box
            href="/"
            underline="none"
            target="_blank"
          >
            <img src={require("../../Assets/Facebook.png")} alt="facebook" />
          </Box>

          <Box
            href="/"
            underline="none"
            target="_blank"
          >
            <img src={require("../../Assets/Instagram.png")} alt="instagram" />
          </Box>
          <Box
            href="/"
            underline="none"
            target="_blank"
          >
            <img
              src={require("../../Assets/LinkedIn.png")}
              alt="linkedin"
              width="28px"
              height="28px"
            />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "#FFFFFF" }} />

      <Typography
        variant="body2"
        sx={{ color: "#FFFFFF", mt: "1rem", textAlign: "center" }}
      >
        &#169; Copyright 2022, All Rights Reserved by TheGiftHouse
      </Typography>
    </Box>
  )
}

export default Footer
