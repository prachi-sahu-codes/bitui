import { ImageAvatar, LetterAvatar } from "../../components";

import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

const AvatarSection = () => {
  return (
    <section id="avatar">
      <ImageAvatar
        avatarSource={avatar1}
        avatarAlt="human pic"
        dimension="35px"
      />
      <ImageAvatar
        avatarSource={avatar2}
        avatarAlt="human pic"
        dimension="50px"
      />
      <ImageAvatar
        avatarSource={avatar3}
        avatarAlt="human pic"
        dimension="80px"
      />
      <ImageAvatar
        avatarSource={avatar4}
        avatarAlt="human pic"
        dimension="120px"
      />

      <LetterAvatar avatarText="Aditya" avatarBg="#00b4d8" dimension="35" />
      <LetterAvatar avatarText="Aditya" avatarBg="#00b4d8" dimension="50" />
      <LetterAvatar avatarText="Aditya" avatarBg="#00b4d8" dimension="80" />
      <LetterAvatar avatarText="Aditya" avatarBg="#00b4d8" dimension="120" />
    </section>
  );
};

export default AvatarSection;
