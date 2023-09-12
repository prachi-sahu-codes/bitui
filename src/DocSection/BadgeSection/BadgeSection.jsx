import { ImageAvatar, StatusBadge, IconBadge } from "../../components";

import { ShoppingCart, ShoppingBag, Favorite } from "@mui/icons-material";

const BadgeSection = () => {
  return (
    <section id="badge" className="section-content">
      <h2 className="section-head">Badges</h2>
      <p className="section-text">
        Badges are small visual indicators, often containing numbers or labels,
        used to display notifications, counts, or additional information
        associated with an element. There are <strong>2</strong> types of Badges available
        <em className="bold-500">Status Badge and Icon Badge.</em>
      </p>

      <h2>Status Badge :</h2>
      <p className="section-text">
        An Status Badge displays a small visual indicators on user's profile
        picture.
      </p>

      <h3 className="section-subhead">Props</h3>
      <p>Props available for the Status Badge Component :</p>
      <ul>
        <li className="section-li">
          <h4 className="section-subhead-head">children</h4>
          <p className="section-subhead-info">
            The badge will be positioned in relation to this element.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">node</p>
          </div>

          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">badgeColor</h4>
          <p>Used for providing color of the badge in Badge component.</p>

          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>
          <hr className="horizontal-line" />
        </li>
      </ul>

      <div>
        <h3 className="section-subhead margin-top-1em">
          Example of Status Badges
        </h3>
        <p>
          {" "}
          You can create a Badge and position it within any element of your
          choice.
        </p>
      </div>
      <div className="all-component flex-end padding-1em">
        <StatusBadge badgeColor="green">
          <ImageAvatar
            avatarSource="https://i.imgur.com/je3QElF.jpg"
            avatarAlt="human pic"
            dimension="120px"
          />
        </StatusBadge>

        <StatusBadge badgeColor="green">
          <ImageAvatar
            avatarSource="https://i.imgur.com/je3QElF.jpg"
            avatarAlt="human pic"
            dimension="80px"
          />
        </StatusBadge>

        <StatusBadge badgeColor="green">
          <ImageAvatar
            avatarSource="https://i.imgur.com/je3QElF.jpg"
            avatarAlt="human pic"
            dimension="50px"
          />
        </StatusBadge>

        <StatusBadge badgeColor="green">
          <ImageAvatar
            avatarSource="https://i.imgur.com/je3QElF.jpg"
            avatarAlt="human pic"
            dimension="35px"
          />
        </StatusBadge>
      </div>

      <div className="code-box margin-1em">
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=auto&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CStatusBadge%2520badgeColor%253D%2522green%2522%253E%250A%2520%2520%253CImageAvatar%250A%2520%2520%2520%2520avatarSource%253D%2522https%253A%252F%252Fi.imgur.com%252Fje3QElF.jpg%2522%250A%2520%2520%2520%2520avatarAlt%253D%2522human%2520pic%2522%250A%2520%2520%2520%2520dimension%253D%2522120px%2522%250A%2520%2520%252F%253E%250A%253C%252FStatusBadge%253E%250A%250A%253CStatusBadge%2520badgeColor%253D%2522green%2522%253E%250A%2520%2520%253CImageAvatar%250A%2520%2520%2520%2520avatarSource%253D%2522https%253A%252F%252Fi.imgur.com%252Fje3QElF.jpg%2522%250A%2520%2520%2520%2520avatarAlt%253D%2522human%2520pic%2522%250A%2520%2520%2520%2520dimension%253D%252280px%2522%250A%2520%2520%252F%253E%250A%253C%252FStatusBadge%253E%250A%250A%253CStatusBadge%2520badgeColor%253D%2522green%2522%253E%250A%2520%2520%253CImageAvatar%250A%2520%2520%2520%2520avatarSource%253D%2522https%253A%252F%252Fi.imgur.com%252Fje3QElF.jpg%2522%250A%2520%2520%2520%2520avatarAlt%253D%2522human%2520pic%2522%250A%2520%2520%2520%2520dimension%253D%252250px%2522%250A%2520%2520%252F%253E%250A%253C%252FStatusBadge%253E%250A%250A%253CStatusBadge%2520badgeColor%253D%2522green%2522%253E%250A%2520%2520%253CImageAvatar%250A%2520%2520%2520%2520avatarSource%253D%2522https%253A%252F%252Fi.imgur.com%252Fje3QElF.jpg%2522%250A%2520%2520%2520%2520avatarAlt%253D%2522human%2520pic%2522%250A%2520%2520%2520%2520dimension%253D%252235px%2522%250A%2520%2520%252F%253E%250A%253C%252FStatusBadge%253E"
            style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>

      <h2 className="margin-top-2em">Icon Badge :</h2>
      <p className="section-text">
        Icon Badge contains numbers or labels to display counts, or additional
        information associated with an element.
      </p>

      <h3 className="section-subhead">Props</h3>
      <p>Props available for the Icon Badge Component :</p>
      <ul>
        <li className="section-li">
          <h4 className="section-subhead-head">children</h4>
          <p className="section-subhead-info">
            The badge will be positioned in relation to this element.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">node</p>
          </div>

          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">badgeColor</h4>
          <p>Used for providing color of the badge in Badge component.</p>

          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>
          <hr className="horizontal-line" />
        </li>

        <li className="section-li">
          <h4 className="section-subhead-head">badgeText</h4>
          <p>Used for providing text of the badge in Badge component.</p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>

          <hr className="horizontal-line" />
        </li>

        <li className="section-li">
          <h4 className="section-subhead-head">dimension</h4>
          <p>This changes the dimensions of the Badge component.</p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>
          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">visuals</h4>
          <p>
            To modify or enhance the component's styles, you have the option to
            override existing styles or add your own custom styles.
          </p>

          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">object</p>
          </div>
          <hr className="horizontal-line" />
        </li>
      </ul>
      <div>
        <h3 className="section-subhead margin-top-1em">
          Example of Icon Badges
        </h3>
        <p>
          {" "}
          You can create a Badge with your own text, background-color and
          dimensions.
        </p>
      </div>
      <div
        className="all-component flex-end padding-1em"
        style={{ color: "gray", gap: "2em" }}
      >
        <IconBadge badgeColor="red" badgeText="9" dimension="50">
          <ShoppingCart />
        </IconBadge>
        <IconBadge
          badgeColor="red"
          badgeText="99+"
          dimension="50"
          visuals={{ width: "42px", right: "-40%", borderRadius: "2em" }}
        >
          <ShoppingBag />
        </IconBadge>
        <IconBadge
          badgeColor="red"
          badgeText="999+"
          dimension="50"
          visuals={{ width: "50px", right: "-55%", borderRadius: "2em" }}
        >
          <Favorite />
        </IconBadge>
      </div>

      <div className="code-box margin-1em">
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=auto&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CIconBadge%2520badgeColor%253D%2522red%2522%2520badgeText%253D%25229%2522%2520dimension%253D%252250%2522%253E%250A%2520%2520%253CShoppingCart%2520%252F%253E%250A%253C%252FIconBadge%253E%250A%253CIconBadge%2520badgeColor%253D%2522red%2522%2520badgeText%253D%252299%252B%2522%2520dimension%253D%252250%2522%2520visuals%253D%257B%257Bwidth%253A%2520%252242px%2522%252C%2520right%253A%2522-40%2525%2522%252C%2520borderRadius%253A%2520%25222em%2522%257D%257D%253E%250A%2520%2520%253CShoppingBag%252F%253E%250A%253C%252FIconBadge%253E%250A%253CIconBadge%2520badgeColor%253D%2522red%2522%2520badgeText%253D%2522999%252B%2522%2520dimension%253D%252250%2522%2520visuals%253D%257B%257Bwidth%253A%2520%252250px%2522%252C%2520right%253A%2522-55%2525%2522%252C%2520borderRadius%253A%2520%25222em%2522%257D%257D%253E%250A%2520%2520%253CFavorite%2520%252F%253E%250A%253C%252FIconBadge%253E"
            style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </section>
  );
};

export default BadgeSection;
