import { ImageAvatar, StatusBadge, IconBadge } from "../../components";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import avatar1 from "../../assets/avatar1.jpg";
import avatar4 from "../../assets/avatar4.jpg";

const BadgeSection = () => {
  return (
    <section id="badge">
      <StatusBadge badgeColor="red">
        <ImageAvatar
          avatarSource={avatar1}
          avatarAlt="human pic"
          dimension="35px"
        />
      </StatusBadge>

      <StatusBadge badgeColor="red">
        <ImageAvatar
          avatarSource={avatar4}
          avatarAlt="human pic"
          dimension="120px"
        />
      </StatusBadge>
      <IconBadge badgeColor="red" badgeText="2" dimension="50">
        <ShoppingCartIcon />
      </IconBadge>
    </section>
  );
};

export default BadgeSection;
