import {
  SolidButton,
  LinkButton,
  IconButton,
  FloatingActionButton,
  OutlineButton,
  ImageAvatar,
  LetterAvatar,
} from "../components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";

const Documentation = () => {
  return (
    <div>
      {/* <h1>Button</h1>
        <SolidButton visuals={{}}>Solid Button</SolidButton>
        <LinkButton visuals={{}} reach="">Link Button</LinkButton> 
        <IconButton visuals={{}} icon={<ShoppingCartIcon/>}>Add to cart</IconButton>
        <FloatingActionButton title="Add"><AddIcon/></FloatingActionButton>
        <OutlineButton>Outline Button</OutlineButton> */}
      <ImageAvatar
        avatarSource={avatar1}
        avatarAlt="dog selfie"
        dimension="35px"
      />
      <ImageAvatar
        avatarSource={avatar2}
        avatarAlt="dog selfie"
        dimension="50px"
      />
      <ImageAvatar
        avatarSource={avatar3}
        avatarAlt="dog selfie"
        dimension="80px"
      />
      <ImageAvatar
        avatarSource={avatar4}
        avatarAlt="dog selfie"
        dimension="120px"
      />

      <LetterAvatar avatarText="Aditya" avatarBg ="#00b4d8" dimension="35" />
      <LetterAvatar avatarText="Aditya" avatarBg ="#00b4d8" dimension="50" />
      <LetterAvatar avatarText="Aditya" avatarBg ="#00b4d8" dimension="80" />
      <LetterAvatar avatarText="Aditya" avatarBg ="#00b4d8" dimension="120" />
    </div>
  );
};

export default Documentation;
