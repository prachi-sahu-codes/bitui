import { FilledAlert } from "../../components";
import { InfoOutlined } from "@mui/icons-material";

const AlertSection = () => {
  return (
    <section id="alert">
      <FilledAlert
        message="Hi this is warning"
        typeIcon={<InfoOutlined />}
        messageColor="black"
      />
    </section>
  );
};

export default AlertSection;
