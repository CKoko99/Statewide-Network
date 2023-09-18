import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          maxWidth: "2560px", margin: "auto", borderLeft: "1px solid #b1b1b1",
          borderRight: "1px solid #b1b1b1"
        }}
      >
        {children}
      </Box>
    </>
  )
}

export default Layout;