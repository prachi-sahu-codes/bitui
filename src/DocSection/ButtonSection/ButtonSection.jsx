import React from "react";
import {
    SolidButton,
    LinkButton,
    IconButton,
    FloatingActionButton,
    OutlineButton,
  
  } from "../../components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";

const ButtonSection = () => {
  return (
    <section id="button">
      <h1>Button</h1>
      <SolidButton visuals={{}}>Solid Button</SolidButton>
      <LinkButton visuals={{}} reach="">
        Link Button
      </LinkButton>
      <IconButton visuals={{}} icon={<ShoppingCartIcon />}>
        Add to cart
      </IconButton>
      <FloatingActionButton title="Add">
        <AddIcon />
      </FloatingActionButton>
      <OutlineButton>Outline Button</OutlineButton>
    </section>
  );
};

export default ButtonSection;
