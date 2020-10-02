import React, { useState } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Modal from "../../Components/UI/Modal/Modal";
import Waitlist from "../../Components/Wailtlist/Waitlist";

const Layout = (props) => {
  const [open, setOpen] = useState(false);
  const modalOpenHandler = () => {
    setOpen(true);
  };
  const modalCloseHandler = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} modalCloseHandler={modalCloseHandler}>
        <Waitlist />
      </Modal>
      <Navbar />
      {props.children}
      <NewsLetter clicked={modalOpenHandler} />
      <Footer />
    </>
  );
};

export default Layout;
