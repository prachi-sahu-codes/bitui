import { FilledAlert } from "../../components";
import { InfoOutlined } from "@mui/icons-material";
import "../Css/code.css";
import "../Css/section.css";

const AlertSection = () => {
  return (
    <section id="alert" className="section-content">
      <h2 className="section-head">Alert</h2>
      <p className="section-text">Alerts are used to quickly notify users of important information without disrupting their current actions on a website or app.</p>
      <h3>Example of Alert Bars</h3>
      <p></p>
      <FilledAlert
        message="Hi this is warning"
        typeIcon={<InfoOutlined />}
        messageColor="black"
      />

      <div className="code-box">
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=one-dark&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false"
            style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </section>
  );
};

export default AlertSection;
