import React from "react";
import "./index.css";

const Heading = (props) => {
  const { children, visuals, variant } = props;
  switch (variant) {
    case "h1": {
      return <h1 style={{ ...visuals }} className="heading-1">{children}</h1>
    }
    case "h2": {
      return <h2 style={{ ...visuals }} className="heading-2">{children}</h2>
    }
    case "h3": {
      return <h3 style={{ ...visuals }} className="heading-3">{children}</h3>
    }
    case "h4": {
      return <h4 style={{ ...visuals }} className="heading-4">{children}</h4>
    }
    case "h5": {
      return <h5 style={{ ...visuals }} className="heading-5">{children}</h5>
    }
    case "h6": {
      return <h6 style={{ ...visuals }} className="heading-6">{children}</h6>
    }
    default: {
      return <h1 style={{ ...visuals }} className="heading-1">{children}</h1>
    }
  }
};

export default Heading;
