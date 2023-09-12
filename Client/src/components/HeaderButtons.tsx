import React from "react";
import Button from "./Button";
import { MdAddToPhotos } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";

function HeaderButtons() {
  return (
    <React.Fragment>
      <Button>
        <MdAddToPhotos ></MdAddToPhotos>
        <p>Create</p>
      </Button>
      <Button>
        <IoLogIn></IoLogIn>
        <p>Join</p>
      </Button>
    </React.Fragment>
  );
}

export default HeaderButtons;
