import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { ReactNode } from "react"; // Import ReactNode type

interface LayoutProps {
  children: ReactNode; // Define the children prop with ReactNode type
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          maxWidth: "1320px", margin: "auto",
          boxShadow: "0 0 40px 10px rgba(204,204,204,.4)",
          borderLeft: "1px solid #dfdfdf", borderRight: "1px solid #dfdfdf"
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout;