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
      <p className="section-text">
        Buttons are interactive UI elements that users can click or tap to
        trigger actions, such as submitting a form, navigating to a different
        page, or performing an operation. There are <strong>5</strong> types of
        Button components available{" "}
        <em className="bold-500">
          Solid Button, Link Button, Icon Button, Floating Action Button and
          Outline Button.
        </em>
      </p>

      <h3 className="section-subhead">Props</h3>
      <div>
        <p>Props available for the Button Component :</p>
        <ul>
          <li className="section-li">
            <h4 className="section-subhead-head">children</h4>
            <p>The content of the component.</p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">node</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">visuals</h4>
            <p>
              To modify or enhance the component's styles, you have the option
              to override existing styles or add your own custom styles.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">object</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">title</h4>
            <p>
              This serves to inform users about what action will be taken when
              the button is activated in case of Floating action button
              component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">string</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">icon</h4>
            <p>
              This allows us to set a custom icon for the Icon button component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">node</p>
            </div>
            <hr className="horizontal-line" />
          </li>
        </ul>
      </div>

      <h3 className="section-subhead margin-top-1em">Example of Buttons</h3>
      <p>You can create a button with your own custom text and dimensions.</p>
      <div className="all-component padding-1em">
        <SolidButton>Solid Button</SolidButton>
        <LinkButton reach="https://github.com/prachi-sahu-codes">
          Link Button
        </LinkButton>
        <IconButton icon={<ShoppingCartIcon />}>Add to cart</IconButton>
        <FloatingActionButton title="Add">
          <AddIcon />
        </FloatingActionButton>
        <OutlineButton>Outline Button</OutlineButton>
      </div>
      <div className="code-box margin-1em">
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CSolidButton%253ESolid%2520Button%253C%252FSolidButton%253E%250A%253CLinkButton%2520reach%253D%2522https%253A%252F%252Fgithub.com%252Fprachi-sahu-codes%2522%253E%250A%2520%2520Link%2520Button%250A%253C%252FLinkButton%253E%250A%253CIconButton%2520icon%253D%257B%253CShoppingCartIcon%2520%252F%253E%257D%253E%250A%2520%2520Add%2520to%2520cart%250A%253C%252FIconButton%253E%250A%253CFloatingActionButton%2520title%253D%2522Add%2522%253E%250A%2520%2520%253CAddIcon%2520%252F%253E%250A%253C%252FFloatingActionButton%253E%250A%253COutlineButton%253EOutline%2520Button%253C%252FOutlineButton%253E"
            style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </section>
  );
};

export default ButtonSection;
