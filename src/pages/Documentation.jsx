import { SolidButton, LinkButton, IconButton, FloatingActionButton, OutlineButton, ImageAvatar } from "../components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

const Documentation = () =>{
    return <div>
        {/* <h1>Button</h1>
        <SolidButton visuals={{}}>Solid Button</SolidButton>
        <LinkButton visuals={{}} reach="">Link Button</LinkButton> 
        <IconButton visuals={{}} icon={<ShoppingCartIcon/>}>Add to cart</IconButton>
        <FloatingActionButton title="Add"><AddIcon/></FloatingActionButton>
        <OutlineButton>Outline Button</OutlineButton> */}
<ImageAvatar avatarSource={avatar} avatarAlt="dog selfie" dimension="40px"/>
<ImageAvatar avatarSource={avatar2} avatarAlt="dog selfie" dimension="60px"/>
<ImageAvatar avatarSource={avatar3} avatarAlt="dog selfie" dimension="80px"/>
        
    </div>
}

export default Documentation;