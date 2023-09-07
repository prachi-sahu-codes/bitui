import { SolidButton, LinkButton, IconButton, FloatingActionButton, OutlineButton } from "../components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';

const Documentation = () =>{
    return <div>
        <SolidButton visuals={{}}>Solid Button</SolidButton>
        <LinkButton visuals={{}} reach="">Link Button</LinkButton> 
        <IconButton visuals={{}} icon={<ShoppingCartIcon/>}>Add to cart</IconButton>
        <FloatingActionButton title="Add"><AddIcon/></FloatingActionButton>
        <OutlineButton>Outline Button</OutlineButton>
    </div>
}

export default Documentation;