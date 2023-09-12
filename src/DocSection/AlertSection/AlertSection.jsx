import { FilledAlert } from "../../components";
import "../Css/code.css";
import "../Css/section.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AlertSection = () => {
  return (
    <section id="alert" className="section-content">
      <h2 className="section-head">Alert</h2>
      <p className="section-text">
        Alerts are used to quickly notify users of important information without
        disrupting their current actions on a website or app.
      </p>

      <h3 className="section-subhead">Props</h3>
      <p>Props available for the Alert Component :</p>
      <ul>
        <li className="section-li">
          <h4 className="section-subhead-head">alertType</h4>
          <p className="section-subhead-info">
            This changes color and icon of the component. It has 4 options
            success, error, warning and info and also supports custom type.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4>{" "}
            <p className="section-type-value">
              "error" | "success" | "warning" | "info" | string
            </p>
          </div>
          <div className="section-prop-type">
            <h4>Default: </h4> <p className="section-type-value">"success"</p>
          </div>
          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">message</h4>
          <p>The message of the Alert component.</p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>
          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">isIcon</h4>
          <p>
            This handles icon of the Alert component. Whether to show the icon
            or not based on value passed.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4>{" "}
            <p className="section-type-value">"true" | "false"</p>
          </div>
          <div className="section-prop-type">
            <h4>Default: </h4> <p className="section-type-value">"true"</p>
          </div>
          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">typeBg</h4>
          <p>This changes the color of the Alert component.</p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>
          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">typeIcon</h4>
          <p>This allows us to set a custom icon for the Alert component.</p>
          <div className="section-prop-type">
            <h4>Type: </h4>{" "}
            <p className="section-type-value">node</p>
          </div>
          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">messageColor</h4>
          <p>
            This allows us to set a custom text color for the Alert component.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>
          <hr className="horizontal-line" />
        </li>
      </ul>

      <div>
        <h3 className="section-subhead margin-top-1em">Example of Alert Bars</h3>
        <p>
          Alerts are available in 4 types- success alert, error alert, warning
          alert and info alert. In addition to these four options, you can
          create a custom alert with your own custom icon, text color, and
          background color.
        </p>
      </div>
      <div className="all-component padding-1em">
        <FilledAlert message="Hi this is success alert!!!" />
        <FilledAlert alertType="error" message="Hi this is error alert!!!" />
        <FilledAlert
          alertType="warning"
          message="Hi this is warning alert!!!"
        />
        <FilledAlert alertType="info" message="Hi this is info alert!!!" />
        <FilledAlert
          alertType="custom"
          message="Product added to the cart!"
          typeBg="#99582a"
          typeIcon={<ShoppingCartIcon />}
          messageColor="#ffe6a7"
        />
      </div>
      <div className="code-box">
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CFilledAlert%2520message%253D%2522Hi%2520this%2520is%2520success%2520alert%21%21%21%2522%2520%252F%253E%250A%253CFilledAlert%2520alertType%253D%2522error%2522%2520message%253D%2522Hi%2520this%2520is%2520error%2520alert%21%21%21%2522%2520%252F%253E%250A%253CFilledAlert%2520alertType%253D%2522warning%2522%2520message%253D%2522Hi%2520this%2520is%2520warning%2520alert%21%21%21%2522%2520%252F%253E%250A%253CFilledAlert%2520alertType%253D%2522info%2522%2520message%253D%2522Hi%2520this%2520is%2520info%2520alert%21%21%21%2522%2520%252F%253E%250A%253CFilledAlert%250A%2520%2520alertType%253D%2522custom%2522%250A%2520%2520message%253D%2522Product%2520added%2520to%2520the%2520cart%21%2522%250A%2520%2520typeBg%253D%2522%252399582a%2522%250A%2520%2520typeIcon%253D%257B%253CShoppingCartIcon%2520%252F%253E%257D%250A%2520%2520messageColor%253D%2522%2523ffe6a7%2522%250A%2520%252F%253E"
            style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </section>
  );
};

export default AlertSection;
