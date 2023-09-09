import {
  SolidButton,
  LinkButton,
  IconButton,
  FloatingActionButton,
  OutlineButton,
  ImageAvatar,
  LetterAvatar,
  StatusBadge,
  IconBadge,
  FilledAlert,
  BadgeCard,
  DismissCard,
  TextOverlayCard,
  TextOnlyCard,
  PrimaryCard,
  ShadowCard,
} from "../components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import cardImage from "../assets/cardImage.jpg";
import cardImage2 from "../assets/cardImage2.jpg";
import { InfoOutlined } from "@mui/icons-material";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";

const Documentation = () => {
  return (
    <div>
      {/* <h1>Button</h1>
        <SolidButton visuals={{}}>Solid Button</SolidButton>
        <LinkButton visuals={{}} reach="">Link Button</LinkButton> 
        <IconButton visuals={{}} icon={<ShoppingCartIcon/>}>Add to cart</IconButton>
        <FloatingActionButton title="Add"><AddIcon/></FloatingActionButton>
        <OutlineButton>Outline Button</OutlineButton> */}
      {/* <ImageAvatar
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

      <LetterAvatar avatarText="Aditya" avatarBg ="#00b4d8" dimension="35" />
      <LetterAvatar avatarText="Aditya" avatarBg ="#00b4d8" dimension="50" />
      <LetterAvatar avatarText="Aditya" avatarBg ="#00b4d8" dimension="80" />
      <LetterAvatar avatarText="Aditya" avatarBg ="#00b4d8" dimension="120" /> */}
      {/* 
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
      <IconBadge badgeColor="red" badgeText="2" dimension="50"><ShoppingCartIcon/></IconBadge> */}

      {/* <FilledAlert message="Hi this is warning" typeIcon={<InfoOutlined/>} messageColor="black"/> */}

      {/* <BadgeCard
        badgeIcon={<LocalFireDepartmentOutlinedIcon />}
        badgeMessage="Hot"
        badgeColor="#a80824"
        visuals={{ padding: "0", backgroundColor: "#f3f3f3", maxHeight:"360px", minHeight:"360px" }}
      >
        <img
          src={cardImage}
          width="100% "
          height="180px"
          style={{ objectFit: "cover", borderRadius: "5px 5px 0 0" }}
        />
        <div style={{ padding: "6px 10px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>
              <p>Xpros-V2 White </p>VaporMax
            </h4>
            <h4>$229</h4>
          </div>
          <p style={{ fontSize: "11px", padding: "10px 0", fontWeight:"500" }}>Select a size</p>
          <ul style={{listStyle:"none", display:"flex", gap:"8px"}}>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>5</li>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>6</li>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>7</li>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>8</li>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>9</li>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>10</li>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>11</li>
          </ul>
          <p style={{fontSize: "11px", color:"#3e3e3e", padding:"6px 0"}}>Lorem Ipsum is simply dummy text of the printing.</p>
          <button style={{width:"100%", padding:"3px", marginTop:"5px", backgroundColor:"#69b096", color:"#fff", border:"none", borderRadius:"4px", fontWeight:"600"}}>Add to cart</button>
        </div>
      </BadgeCard> */}

      {/* <DismissCard visuals={{ padding: "0", backgroundColor: "#f3f3f3", maxHeight:"360px", minHeight:"360px" }} dismissBgColor="transparent" dismissColor="black">
      <img
          src={cardImage}
          width="100%"
          height="180px"
          style={{ objectFit: "cover", borderRadius: "5px 5px 0 0" }}
        />
        <div style={{ padding: "6px 10px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>
              <p>Xpros-V2 White </p>VaporMax
            </h4>
            <h4>$229</h4>
          </div>
          <p style={{ fontSize: "11px", padding: "10px 0", fontWeight:"500" }}>Select a size</p>
          <ul style={{listStyle:"none", display:"flex", gap:"8px"}}>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>5</li>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>6</li>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>7</li>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>8</li>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>9</li>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>10</li>
            <li style={{padding:"0 5px", fontSize:"12px", border:"1px solid #c9c9c9", borderRadius:"3px", color:"#3e3e3e" }}>11</li>
          </ul>
          <p style={{fontSize: "11px", color:"#3e3e3e", padding:"6px 0"}}>Lorem Ipsum is simply dummy text of the printing.</p>
          <button style={{width:"100%", padding:"3px", marginTop:"5px", backgroundColor:"#69b096", color:"#fff", border:"none", borderRadius:"4px", fontWeight:"600"}}>Add to cart</button>
        </div>
      </DismissCard> */}

      <DismissCard
        visuals={{
          textAlign: "center",
          maxHeight: "max-content",
          minHeight: "max-content",
        }}
      >
        <h4 style={{ padding: "10px 0 0" }}>Meetups near you</h4>
        <p style={{ fontSize: "12px", color: "#3e3e3e", padding: "6px 0" }}>
          Meetups close to my location
        </p>
        <button
          style={{
            fontSize: "11px",
            padding: "9px 18px",
            margin: "10px 0 15px",
            backgroundColor: "#0096c7",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontWeight: "600",
          }}
        >
          View Locations
        </button>
      </DismissCard>

      <TextOverlayCard imageSource={cardImage2}>
        <h4>Image Gradient</h4>
        <p style={{ fontSize: "12px", margin: "10px 0" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button
          style={{
            border: "none",
            borderRadius: "12px",
            padding: " 4px 10px",
            fontWeight: "600",
            fontSize: "10px",
          }}
        >
          Find out more
        </button>
      </TextOverlayCard>

      <TextOnlyCard
        visuals={{ maxHeight: "max-content", minHeight: "max-content" }}
        bgColor="#edf6f9"
      >
        <p style={{ fontSize: "12px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            margin: "10px 0 0",
          }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "#00b4d8",
              borderRadius: "12px",
              padding: " 4px 10px",
              fontWeight: "600",
              fontSize: "10px",
              color: "#fff",
            }}
          >
            Read more
          </button>
          <button
            style={{
              border: "1px solid #00b4d8",
              backgroundColor: "transparent",
              borderRadius: "12px",
              padding: " 4px 10px",
              fontWeight: "600",
              fontSize: "10px",
              color: "#00b4d8",
            }}
          >
            Bookmark
          </button>
        </div>
      </TextOnlyCard>

      <PrimaryCard
        imageSource={cardImage2}
        direction="true"
        imageVisuals={{
          width: "200px",
          height: "200px",
          borderRadius: "8px 8px 0 0",
        }}
        visuals={{ width: "200px", backgroundColor: "#edf6f9" }}
      >
        <h4>Lorem Ipsum</h4>
        <p style={{ fontSize: "11px", color: "#3e3e3e", padding: "6px 0" }}>
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <button
          style={{
            padding: "3px 9px",
            marginTop: "5px",
            backgroundColor: "#69b096",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontWeight: "600",
          }}
        >
          Read more
        </button>
      </PrimaryCard>

      <PrimaryCard
        imageSource={cardImage2}
        imageVisuals={{
          width: "200px",
          height: "200px",
          borderRadius: "8px 0 0 8px",
        }}
        visuals={{ width: "500px", backgroundColor: "#edf6f9" }}
      >
        <h2 style={{ padding: "15px 0 0" }}>Lorem Ipsum</h2>
        <p style={{ fontSize: "13px", color: "#3e3e3e", padding: "6px 0" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type. Lorem
          Ipsum is simply dummy text.
        </p>
        <button
          style={{
            padding: "3px 9px",
            marginTop: "5px",
            backgroundColor: "#69b096",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontWeight: "600",
          }}
        >
          Read more
        </button>
      </PrimaryCard>

      <ShadowCard shadowType="inner" visuals={{ maxHeight: "max-content", minHeight: "max-content" }}>
        {" "}
        <p style={{ fontSize: "12px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            margin: "10px 0 0",
          }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "#00b4d8",
              borderRadius: "12px",
              padding: " 4px 10px",
              fontWeight: "600",
              fontSize: "10px",
              color: "#fff",
            }}
          >
            Read more
          </button>
          <button
            style={{
              border: "1px solid #00b4d8",
              backgroundColor: "transparent",
              borderRadius: "12px",
              padding: " 4px 10px",
              fontWeight: "600",
              fontSize: "10px",
              color: "#00b4d8",
            }}
          >
            Bookmark
          </button>
        </div>
      </ShadowCard>
      <ShadowCard visuals={{ maxHeight: "max-content", minHeight: "max-content" }}> <p style={{ fontSize: "12px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            margin: "10px 0 0",
          }}
        >
          <button
            style={{
              border: "none",
              backgroundColor: "#00b4d8",
              borderRadius: "12px",
              padding: " 4px 10px",
              fontWeight: "600",
              fontSize: "10px",
              color: "#fff",
            }}
          >
            Read more
          </button>
          <button
            style={{
              border: "1px solid #00b4d8",
              backgroundColor: "transparent",
              borderRadius: "12px",
              padding: " 4px 10px",
              fontWeight: "600",
              fontSize: "10px",
              color: "#00b4d8",
            }}
          >
            Bookmark
          </button>
        </div></ShadowCard>
    </div>
  );
};

export default Documentation;
