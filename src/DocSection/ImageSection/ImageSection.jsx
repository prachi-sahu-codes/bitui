import React from "react";
import { ResponsiveImage, RoundedImage } from "../../components";

const ImageSection = () => {
  return (
    <section id="image" className="section-content">
      <h2 className="section-head">Image</h2>
      <p className="section-text">
        A responsive image is one that adjusts its size and proportions to fit
        various screen sizes and devices seamlessly.
      </p>
      <h2>Responsive Image :</h2>
      <p className="section-text">
        An Image Avatar displays a user's profile picture.
      </p>

      <h3 className="section-subhead">Props</h3>
      <p>Props available for the Responsive Image Component :</p>
      <ul>
        <li className="section-li">
          <h4 className="section-subhead-head">imageSource</h4>
          <p className="section-subhead-info">
            Used for providing URL of the image inside responsive image
            component.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>

          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">imageAlt</h4>
          <p>
            Used for providing alt attribute for the rendered image element
            inside responsive image component.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>
          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">visuals</h4>
          <p>
            To modify or enhance the component's styles, you have the option to
            override existing styles or add your own custom styles.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">object</p>
          </div>
          <hr className="horizontal-line" />
        </li>
      </ul>

      <div>
        <h3 className="section-subhead margin-top-1em">
          Example of Responsive Image
        </h3>
        <p>
          You can create an responsive image with your own custom image and
          dimensions.
        </p>
      </div>
      <div className="all-component flex-end padding-1em">
        <ResponsiveImage
          imageSource="https://images.unsplash.com/photo-1529573813483-53bd9ede667e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          imageAlt="Scenery"
        />
      </div>

      <div className="code-box margin-1em">
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CResponsiveImage%2520imageSource%253D%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1529573813483-53bd9ede667e%253Fixlib%253Drb-1.2.1%2526ixid%253DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D1173%2526q%253D80%2522%2520imageAlt%253D%2522Scenery%2522%252F%253E"
            style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
            className="small-code"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>

      <h2 className="margin-top-2em">Rounded Image :</h2>
      <p className="section-text">
        Rounded image is an image with its sharp corners or edges softened or
        curved using CSS, often creating a circular or oval shape for a more
        visually appealing effect.
      </p>

      <h3 className="section-subhead">Props</h3>
      <p>Props available for the Rounded Image Component :</p>
      <ul>
        <li className="section-li">
          <h4 className="section-subhead-head">imageSource</h4>
          <p className="section-subhead-info">
            Used for providing URL of the image inside responsive image
            component.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>
          <hr className="horizontal-line" />
        </li>

        <li className="section-li">
          <h4 className="section-subhead-head">imageAlt</h4>
          <p>
            Used for providing alt attribute for the rendered image element
            inside responsive image component.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>
          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">dimension</h4>
          <p>This changes the dimensions of the rounded image component.</p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>
          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">visuals</h4>
          <p>
            To modify or enhance the component's styles, you have the option to
            override existing styles or add your own custom styles.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">object</p>
          </div>
          <hr className="horizontal-line" />
        </li>
      </ul>

      <div>
        <h3 className="section-subhead margin-top-1em">
          Example of Rounded Image
        </h3>
        <p>
          You can create both rounded and squared images by adjusting the border
          radius property in visuals.
        </p>
      </div>
      <div className="all-component flex-end padding-1em">
        <RoundedImage
          imageSource="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
          imageAlt="Scenery"
          dimension="120px"
        />
        <RoundedImage
          imageSource="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
          imageAlt="Scenery"
          dimension="90px"
          visuals={{ borderRadius: "20px" }}
        />
        <RoundedImage
          imageSource="https://images.unsplash.com/photo-1504714146340-959ca07e1f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
          imageAlt="Scenery"
          dimension="60px"
          visuals={{ borderRadius: "5px" }}
        />
      </div>
      <div className="code-box">
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CRoundedImage%2520imageSource%253D%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1504714146340-959ca07e1f38%253Fixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%25253D%25253D%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D1925%2526q%253D80%2522%2520imageAlt%253D%2522Scenery%2522%2520dimension%253D%2522120px%2522%252F%253E%250A%253CRoundedImage%2520imageSource%253D%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1504714146340-959ca07e1f38%253Fixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%25253D%25253D%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D1925%2526q%253D80%2522%2520imageAlt%253D%2522Scenery%2522%2520dimension%253D%252290px%2522%2520visuals%253D%257B%257BborderRadius%253A%252220px%2522%257D%257D%252F%253E%250A%253CRoundedImage%2520imageSource%253D%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1504714146340-959ca07e1f38%253Fixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%25253D%25253D%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D1925%2526q%253D80%2522%2520imageAlt%253D%2522Scenery%2522%2520dimension%253D%252260px%2522%2520visuals%253D%257B%257BborderRadius%253A%25225px%2522%257D%257D%252F%253E"
            style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </section>
  );
};

export default ImageSection;
