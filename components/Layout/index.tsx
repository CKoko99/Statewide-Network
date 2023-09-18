import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          maxWidth: "2560px", margin: "auto", borderLeft: "1px solid #dfdfdf",
          borderRight: "1px solid #dfdfdf"
        }}
      >
        {children}
      </Box>
    </>
  )
}

export default Layout;