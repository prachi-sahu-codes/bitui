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
    <section id="button" className="section-content">
      <h2 className="section-head">Buttons</h2>
      <p className="section-text">Buttons are interactive UI elements that users can click or tap to trigger actions, such as submitting a form, navigating to a different page, or performing an operation.</p>
      <h3>Example of Buttons</h3>
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
