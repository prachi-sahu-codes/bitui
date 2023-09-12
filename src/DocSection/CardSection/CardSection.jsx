import {
  BadgeCard,
  DismissCard,
  TextOverlayCard,
  TextOnlyCard,
  PrimaryCard,
  ShadowCard,
} from "../../components";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";

const shoeSizes = [5, 6, 7, 8, 9, 10, 11];

const CardSection = () => {
  return (
    <section id="card" className="section-content">
      <h2 className="section-head">Card</h2>
      <p className="section-text">
        Cards are self-contained containers used to display content or
        information, often used for presenting grouped data or as a part of a
        layout structure. There are <strong>6</strong> types of cards available{" "}
        <em className="bold-500">
          Badge Card, Dismiss Card, Text-overlay Card, Text-only Card, Primary
          Card and Shadow Card.
        </em>
      </p>
      <div>
        <h2>Badge Card :</h2>
        <p className="section-text">
          A card element with a badge typically used to highlight or display
          additional information or status.
        </p>

        <h3 className="section-subhead">Props</h3>
        <p>Props available for the Badge Card Component :</p>
        <ul>
          <li className="section-li">
            <h4 className="section-subhead-head">badgeIcon</h4>
            <p>
              Used for providing icon for the badge inside Badge card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">node</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">badgeMessage</h4>
            <p>
              Used for providing text for the badge inside Badge card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">string</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">badgeColor</h4>
            <p>
              Used for providing background color for the badge inside Badge
              card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">string</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">badgeVisuals</h4>
            <p>
              To modify or enhance the badge's styles, you have the option to
              override existing styles or add your own custom styles.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">object</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">visuals</h4>
            <p>
              To modify or enhance the card component's styles, you have the
              option to override existing styles or add your own custom styles.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">object</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">children</h4>
            <p className="section-subhead-info">
              The content of the card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">node</p>
            </div>
            <hr className="horizontal-line" />
          </li>
        </ul>

        <div>
          <h3 className="section-subhead margin-top-1em">
            Example of Badge Card
          </h3>
          <p>
            You can create an badge card with your own custom image, content and
            dimensions.
          </p>
        </div>
        <div className="all-component flex-end padding-1em">
          <BadgeCard
            badgeIcon={<LocalFireDepartmentOutlinedIcon />}
            badgeMessage="Hot"
            badgeColor="#a80824"
            visuals={{
              padding: "0",
              backgroundColor: "#f3f3f3",
              maxHeight: "360px",
              minHeight: "360px",
            }}
          >
            <img
              src="https://i.imgur.com/GR5bsrw.jpg"
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
              <p
                style={{
                  fontSize: "11px",
                  padding: "10px 0",
                  fontWeight: "500",
                }}
              >
                Select a size
              </p>
              <ul style={{ listStyle: "none", display: "flex", gap: "8px" }}>
                {shoeSizes.map((size, index) => (
                  <li
                    style={{
                      padding: "0 5px",
                      fontSize: "12px",
                      border: "1px solid #c9c9c9",
                      borderRadius: "3px",
                      color: "#3e3e3e",
                    }}
                    key={index}
                  >
                    {size}
                  </li>
                ))}
              </ul>
              <p
                style={{ fontSize: "11px", color: "#3e3e3e", padding: "6px 0" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <button
                style={{
                  width: "100%",
                  padding: "3px",
                  marginTop: "5px",
                  backgroundColor: "#69b096",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                }}
              >
                Add to cart
              </button>
            </div>
          </BadgeCard>
        </div>

        <div className="code-box margin-1em">
          <code>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CBadgeCard%250A%2520%2520%2520%2520%2520%2520%2520%2520badgeIcon%253D%257B%253CLocalFireDepartmentOutlinedIcon%2520%252F%253E%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520badgeMessage%253D%2522Hot%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520badgeColor%253D%2522%2523a80824%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520visuals%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%25220%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522%2523f3f3f3%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520maxHeight%253A%2520%2522360px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520minHeight%253A%2520%2522360px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fi.imgur.com%252FGR5bsrw.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520width%253D%2522100%2525%2520%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520height%253D%2522180px%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%2520objectFit%253A%2520%2522cover%2522%252C%2520borderRadius%253A%2520%25225px%25205px%25200%25200%2522%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520style%253D%257B%257B%2520padding%253A%2520%25226px%252010px%25200%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520style%253D%257B%257B%2520display%253A%2520%2522flex%2522%252C%2520justifyContent%253A%2520%2522space-between%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EXpros-V2%2520White%2520%253C%252Fp%253EVaporMax%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253E%2524229%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontSize%253A%2520%252211px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%252210px%25200%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522500%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Select%2520a%2520size%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%2520style%253D%257B%257B%2520listStyle%253A%2520%2522none%2522%252C%2520display%253A%2520%2522flex%2522%252C%2520gap%253A%2520%25228px%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257BshoeSizes.map%28%28size%252C%2520index%29%2520%253D%253E%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%25220%25205px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontSize%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%25221px%2520solid%2520%2523c9c9c9%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%25223px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%25233e3e3e%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520key%253D%257Bindex%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bsize%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%29%29%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520style%253D%257B%257B%2520fontSize%253A%2520%252211px%2522%252C%2520color%253A%2520%2522%25233e3e3e%2522%252C%2520padding%253A%2520%25226px%25200%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520width%253A%2520%2522100%2525%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%25223px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520marginTop%253A%2520%25225px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522%252369b096%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%2523fff%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%2522none%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%25224px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522600%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Add%2520to%2520cart%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252FBadgeCard%253E"
              style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </code>
        </div>
      </div>

      <div className="margin-top-2em">
        <h2>Dismiss Card :</h2>
        <p className="section-text">
          A card component that allows users to dismiss or close it, often used
          for notifications or alerts.
        </p>

        <h3 className="section-subhead">Props</h3>
        <p>Props available for the Dismiss Card Component :</p>
        <ul>
          <li className="section-li">
            <h4 className="section-subhead-head">dismissIcon</h4>
            <p>
              Used for providing dismiss icon for the Dismiss card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">node</p>
            </div>
            <hr className="horizontal-line" />
          </li>

          <li className="section-li">
            <h4 className="section-subhead-head">dismissBgColor</h4>
            <p>
              Used for providing background color for the icon inside Dismiss
              card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">string</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">dismissColor</h4>
            <p>Used for providing icon color inside Dismiss card component.</p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">string</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">visuals</h4>
            <p>
              To modify or enhance the card component's styles, you have the
              option to override existing styles or add your own custom styles.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">object</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">children</h4>
            <p className="section-subhead-info">
              The content of the card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">node</p>
            </div>
            <hr className="horizontal-line" />
          </li>
        </ul>

        <div>
          <h3 className="section-subhead margin-top-1em">
            Example of Dismiss Card
          </h3>
          <p>
            You can create an dismiss card with your own custom icon, image,
            content and dimensions.
          </p>
        </div>
        <div className="all-component flex-end padding-1em">
          <DismissCard
            visuals={{
              padding: "0",
              backgroundColor: "#f3f3f3",
              maxHeight: "360px",
              minHeight: "360px",
            }}
            dismissBgColor="transparent"
            dismissColor="black"
          >
            <img
              src="https://i.imgur.com/GR5bsrw.jpg"
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
              <p
                style={{
                  fontSize: "11px",
                  padding: "10px 0",
                  fontWeight: "500",
                }}
              >
                Select a size
              </p>
              <ul style={{ listStyle: "none", display: "flex", gap: "8px" }}>
                {shoeSizes.map((size, index) => (
                  <li
                    style={{
                      padding: "0 5px",
                      fontSize: "12px",
                      border: "1px solid #c9c9c9",
                      borderRadius: "3px",
                      color: "#3e3e3e",
                    }}
                    key={index}
                  >
                    {size}
                  </li>
                ))}
              </ul>
              <p
                style={{ fontSize: "11px", color: "#3e3e3e", padding: "6px 0" }}
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
              <button
                style={{
                  width: "100%",
                  padding: "3px",
                  marginTop: "5px",
                  backgroundColor: "#69b096",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: "600",
                }}
              >
                Add to cart
              </button>
            </div>
          </DismissCard>

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
        </div>

        <div className="code-box">
          <code>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CDismissCard%250A%2520%2520%2520%2520%2520%2520%2520%2520visuals%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%25220%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522%2523f3f3f3%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520maxHeight%253A%2520%2522360px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520minHeight%253A%2520%2522360px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520dismissBgColor%253D%2522transparent%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520dismissColor%253D%2522black%2522%250A%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fi.imgur.com%252FGR5bsrw.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520width%253D%2522100%2525%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520height%253D%2522180px%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%2520objectFit%253A%2520%2522cover%2522%252C%2520borderRadius%253A%2520%25225px%25205px%25200%25200%2522%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520style%253D%257B%257B%2520padding%253A%2520%25226px%252010px%25200%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520style%253D%257B%257B%2520display%253A%2520%2522flex%2522%252C%2520justifyContent%253A%2520%2522space-between%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EXpros-V2%2520White%2520%253C%252Fp%253EVaporMax%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253E%2524229%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontSize%253A%2520%252211px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%252210px%25200%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522500%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Select%2520a%2520size%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%2520style%253D%257B%257B%2520listStyle%253A%2520%2522none%2522%252C%2520display%253A%2520%2522flex%2522%252C%2520gap%253A%2520%25228px%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257BshoeSizes.map%28%28size%252C%2520index%29%2520%253D%253E%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%25220%25205px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontSize%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%25221px%2520solid%2520%2523c9c9c9%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%25223px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%25233e3e3e%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520key%253D%257Bindex%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257Bsize%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%29%29%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520style%253D%257B%257B%2520fontSize%253A%2520%252211px%2522%252C%2520color%253A%2520%2522%25233e3e3e%2522%252C%2520padding%253A%2520%25226px%25200%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520width%253A%2520%2522100%2525%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%25223px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520marginTop%253A%2520%25225px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522%252369b096%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%2523fff%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%2522none%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%25224px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522600%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Add%2520to%2520cart%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252FDismissCard%253E"
              style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </code>
        </div>

        <div className="code-box margin-top-2em">
          <code>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CDismissCard%250A%2520%2520%2520%2520%2520%2520%2520%2520visuals%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520textAlign%253A%2520%2522center%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520maxHeight%253A%2520%2522max-content%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520minHeight%253A%2520%2522max-content%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%2520style%253D%257B%257B%2520padding%253A%2520%252210px%25200%25200%2522%2520%257D%257D%253EMeetups%2520near%2520you%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520style%253D%257B%257B%2520fontSize%253A%2520%252212px%2522%252C%2520color%253A%2520%2522%25233e3e3e%2522%252C%2520padding%253A%2520%25226px%25200%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Meetups%2520close%2520to%2520my%2520location%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontSize%253A%2520%252211px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%25229px%252018px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520margin%253A%2520%252210px%25200%252015px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522%25230096c7%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%2523fff%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%2522none%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%25224px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522600%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520View%2520Locations%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252FDismissCard%253E"
              style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </code>
        </div>
      </div>

      <div className="margin-top-2em">
        <h2>Text-overlay Card :</h2>
        <p className="section-text">
          A card with text content overlaid on an image or background, often
          used for displaying captions or descriptions.
        </p>

        <h3 className="section-subhead">Props</h3>
        <p>Props available for the Text-overlay Card Component :</p>
        <ul>
          <li className="section-li">
            <h4 className="section-subhead-head">imageSource</h4>
            <p>
              Used for providing image link for the Text-overlay card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">string</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">imageAlt</h4>
            <p>
              Used for providing alt attribute for the rendered img element
              inside Text-overlay card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">string</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">imageVisuals</h4>
            <p>
              To modify or enhance the image element's styles, you have the
              option to override existing styles or add your own custom styles.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">object</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">overlayVisuals</h4>
            <p>
              To modify or enhance the overlaid content's styles, you have the
              option to override existing styles or add your own custom styles.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">object</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">visuals</h4>
            <p>
              To modify or enhance the overall card component's styles, you have
              the option to override existing styles or add your own custom
              styles.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">object</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">children</h4>
            <p className="section-subhead-info">
              The overlaid content of the card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">node</p>
            </div>
            <hr className="horizontal-line" />
          </li>
        </ul>

        <div>
          <h3 className="section-subhead margin-top-1em">
            Example of Text-overlay Card
          </h3>
          <p>
            You can create an text-overlay card with your own custom image,
            content and dimensions.
          </p>
        </div>
        <div className="all-component flex-end padding-1em">
          <TextOverlayCard imageSource="https://i.imgur.com/SngAACF.jpg">
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
        </div>

        <div className="code-box margin-1em">
          <code>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CTextOverlayCard%2520imageSource%253D%2522https%253A%252F%252Fi.imgur.com%252FSngAACF.jpg%2522%253E%250A%253Ch4%253EImage%2520Gradient%253C%252Fh4%253E%250A%253Cp%2520style%253D%257B%257B%2520fontSize%253A%2520%252212px%2522%252C%2520margin%253A%2520%252210px%25200%2522%2520%257D%257D%253E%250A%2520%2520Lorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing%2520and%2520typesetting%250A%2520%2520industry.%250A%253C%252Fp%253E%250A%253Cbutton%250A%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520border%253A%2520%2522none%2522%252C%250A%2520%2520%2520%2520borderRadius%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520padding%253A%2520%2522%25204px%252010px%2522%252C%250A%2520%2520%2520%2520fontWeight%253A%2520%2522600%2522%252C%250A%2520%2520%2520%2520fontSize%253A%2520%252210px%2522%252C%250A%2520%2520%257D%257D%250A%253E%250A%2520%2520Find%2520out%2520more%250A%253C%252Fbutton%253E%250A%253C%252FTextOverlayCard%253E"
              style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </code>
        </div>
      </div>

      <div className="margin-top-2em">
        <h2>Text-only Card :</h2>
        <p className="section-text">
          A card that contains text content without any images or other media,
          commonly used for presenting textual information.
        </p>

        <h3 className="section-subhead">Props</h3>
        <p>Props available for the Text-only Card Component :</p>
        <ul>
          <li className="section-li">
            <h4 className="section-subhead-head">bgColor</h4>
            <p>
              Used for providing background color for the Text-only card
              component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">string</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">visuals</h4>
            <p>
              To modify or enhance the overall card component's styles, you have
              the option to override existing styles or add your own custom
              styles.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">object</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">children</h4>
            <p className="section-subhead-info">
              The content of the Text-only card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">node</p>
            </div>
            <hr className="horizontal-line" />
          </li>
        </ul>

        <div>
          <h3 className="section-subhead margin-top-1em">
            Example of Text-only Card
          </h3>
          <p>
            You can create an text-only card with your own content and styling.
          </p>
        </div>
        <div className="all-component flex-end padding-1em">
          <TextOnlyCard
            visuals={{
              maxHeight: "max-content",
              minHeight: "max-content",
              padding: "1.5em",
              minWidth: "300px",
              maxWidth: "300px",
            }}
            bgColor="#edf6f9"
          >
            <p style={{ fontSize: "14px", marginBottom: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div
              style={{
                display: "flex",
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
                  fontSize: "12px",
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
                  fontSize: "12px",
                  color: "#00b4d8",
                }}
              >
                Bookmark
              </button>
            </div>
          </TextOnlyCard>
        </div>

        <div className="code-box margin-1em">
          <code>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CTextOnlyCard%250A%2520%2520%2520%2520%2520%2520%2520%2520visuals%253D%257B%257B%2520maxHeight%253A%2520%2522max-content%2522%252C%2520minHeight%253A%2520%2522max-content%2522%252C%2520padding%253A%25221.5em%2522%252C%2520minWidth%253A%2522300px%2522%252C%2520maxWidth%253A%2522300px%2522%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520bgColor%253D%2522%2523edf6f9%2522%250A%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520style%253D%257B%257B%2520fontSize%253A%2520%252214px%2522%252C%2520marginBottom%253A%25221em%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing%2520and%2520typesetting%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520industry.%2520Lorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing%2520and%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520typesetting%2520industry.%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520display%253A%2520%2522flex%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520gap%253A%2520%252210px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520margin%253A%2520%252210px%25200%25200%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%2522none%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522%252300b4d8%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%2522%25204px%252010px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522600%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontSize%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%2523fff%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Read%2520more%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%25221px%2520solid%2520%252300b4d8%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522transparent%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%2522%25204px%252010px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522600%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontSize%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%252300b4d8%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Bookmark%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252FTextOnlyCard%253E"
              style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </code>
        </div>
      </div>

      <div className="margin-top-2em">
        <h2 className="margin-top-2em">Primary Card :</h2>
        <p className="section-text">
          A Primary card which can either be vertical or horizontal. A vertical
          card stacks content top to bottom, while a horizontal card arranges
          content side by side.
        </p>

        <h3 className="section-subhead">Props</h3>
        <p>Props available for the Primary Card Component :</p>
        <ul>
          <li className="section-li">
            <h4 className="section-subhead-head">imageSource</h4>
            <p>Used for providing image URL for the Primary card component.</p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">string</p>
            </div>
            <hr className="horizontal-line" />
          </li>

          <li className="section-li">
            <h4 className="section-subhead-head">imageAlt</h4>
            <p>
              Used for providing alt attribute for the rendered img element
              inside Primary card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">string</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">imageVisuals</h4>
            <p>
              To modify or enhance the image element's styles, you have the
              option to override existing styles or add your own custom styles.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">string</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">direction</h4>
            <p>
              Used to specify the orientation (horizontal or vertical) of the
              Primary card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4>{" "}
              <p className="section-type-value">"true" | "false"</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">visuals</h4>
            <p>
              To modify or enhance the card component's styles, you have the
              option to override existing styles or add your own custom styles.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">object</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">children</h4>
            <p className="section-subhead-info">
              The content of the card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">node</p>
            </div>
            <hr className="horizontal-line" />
          </li>
        </ul>

        <div>
          <h3 className="section-subhead margin-top-1em">
            Example of Primary Card
          </h3>
          <p>
            You can create a primary card with your own custom image, content
            and styling.
          </p>
        </div>
        <div className="all-component flex-end padding-1em">
          <PrimaryCard
            imageSource="https://i.imgur.com/SngAACF.jpg"
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
            imageSource="https://i.imgur.com/SngAACF.jpg"
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
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type. Lorem Ipsum is simply dummy text.
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
        </div>

        <div className="code-box">
          <code>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CPrimaryCard%250A%2520%2520%2520%2520%2520%2520%2520%2520imageSource%253D%2522https%253A%252F%252Fi.imgur.com%252FSngAACF.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520direction%253D%2522true%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520imageVisuals%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520width%253A%2520%2522200px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520height%253A%2520%2522200px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%25228px%25208px%25200%25200%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520visuals%253D%257B%257B%2520width%253A%2520%2522200px%2522%252C%2520backgroundColor%253A%2520%2522%2523edf6f9%2522%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253ELorem%2520Ipsum%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520style%253D%257B%257B%2520fontSize%253A%2520%252211px%2522%252C%2520color%253A%2520%2522%25233e3e3e%2522%252C%2520padding%253A%2520%25226px%25200%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing.%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%25223px%25209px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520marginTop%253A%2520%25225px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522%252369b096%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%2523fff%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%2522none%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%25224px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522600%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Read%2520more%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252FPrimaryCard%253E"
              style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </code>
        </div>

        <div className="code-box margin-top-2em">
          <code>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CPrimaryCard%250A%2520%2520%2520%2520%2520%2520%2520%2520imageSource%253D%2522https%253A%252F%252Fi.imgur.com%252FSngAACF.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520imageVisuals%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520width%253A%2520%2522200px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520height%253A%2520%2522200px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%25228px%25200%25200%25208px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520visuals%253D%257B%257B%2520width%253A%2520%2522500px%2522%252C%2520backgroundColor%253A%2520%2522%2523edf6f9%2522%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%2520style%253D%257B%257B%2520padding%253A%2520%252215px%25200%25200%2522%2520%257D%257D%253ELorem%2520Ipsum%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520style%253D%257B%257B%2520fontSize%253A%2520%252213px%2522%252C%2520color%253A%2520%2522%25233e3e3e%2522%252C%2520padding%253A%2520%25226px%25200%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing%2520and%2520typesetting%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520industry.%2520Lorem%2520Ipsum%2520has%2520been%2520the%2520industry%27s%2520standard%2520dummy%2520text%2520ever%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520since%2520the%25201500s%252C%2520when%2520an%2520unknown%2520printer%2520took%2520a%2520galley%2520of%2520type.%2520Lorem%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Ipsum%2520is%2520simply%2520dummy%2520text.%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%25223px%25209px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520marginTop%253A%2520%25225px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522%252369b096%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%2523fff%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%2522none%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%25224px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522600%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Read%2520more%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252FPrimaryCard%253E"
              style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </code>
        </div>
      </div>

      <div className="margin-top-2em">
        <h2 className="margin-top-2em">Shadow Card :</h2>
        <p className="section-text">
          A card element with shadow or depth effects applied to create a visual
          separation from the background, adding a sense of elevation or depth
          to the card.
        </p>

        <h3 className="section-subhead">Props</h3>
        <p>Props available for the Shadow Card Component :</p>
        <ul>
          <li className="section-li">
            <h4 className="section-subhead-head">shadowType</h4>
            <p>
              Used for deciding whether shadow will be inset or outer for the
              shadow card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4>{" "}
              <p className="section-type-value">"inset" | "outer"</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">visuals</h4>
            <p>
              To modify or enhance the card component's styles, you have the
              option to override existing styles or add your own custom styles.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">object</p>
            </div>
            <hr className="horizontal-line" />
          </li>
          <li className="section-li">
            <h4 className="section-subhead-head">children</h4>
            <p className="section-subhead-info">
              The content of the card component.
            </p>
            <div className="section-prop-type">
              <h4>Type: </h4> <p className="section-type-value">node</p>
            </div>
            <hr className="horizontal-line" />
          </li>
        </ul>

        <div>
          <h3 className="section-subhead margin-top-1em">
            Example of Shadow Card
          </h3>
          <p>
            You can create a shadow card with your own content and styling.
          </p>
        </div>
        <div className="all-component flex-end padding-1em">
          <ShadowCard
            visuals={{ maxHeight: "max-content", minHeight: "max-content" }}
          >
            <p style={{ fontSize: "14px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                margin: "18px 0 0",
              }}
            >
              <button
                style={{
                  border: "none",
                  backgroundColor: "#00b4d8",
                  borderRadius: "12px",
                  padding: " 4px 10px",
                  fontWeight: "600",
                  fontSize: "12px",
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
                  fontSize: "12px",
                  color: "#00b4d8",
                }}
              >
                Bookmark
              </button>
            </div>
          </ShadowCard>

          <ShadowCard
            shadowType="inset"
            visuals={{ maxHeight: "max-content", minHeight: "max-content" }}
          >
            <p style={{ fontSize: "14px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "18px 0 0",
              }}
            >
              <button
                style={{
                  border: "none",
                  backgroundColor: "#00b4d8",
                  borderRadius: "12px",
                  padding: " 4px 10px",
                  fontWeight: "600",
                  fontSize: "12px",
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
                  fontSize: "12px",
                  color: "#00b4d8",
                }}
              >
                Bookmark
              </button>
            </div>
          </ShadowCard>
        </div>

        <div className="code-box">
          <code>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CShadowCard%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520visuals%253D%257B%257B%2520maxHeight%253A%2520%2522max-content%2522%252C%2520minHeight%253A%2520%2522max-content%2522%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520style%253D%257B%257B%2520fontSize%253A%2520%252214px%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing%2520and%2520typesetting%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520industry.%2520Lorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing%2520and%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520typesetting%2520industry.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520display%253A%2520%2522flex%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520justifyContent%253A%2520%2522space-between%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520gap%253A%2520%252210px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520margin%253A%2520%252218px%25200%25200%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%2522none%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522%252300b4d8%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%2522%25204px%252010px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522600%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontSize%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%2523fff%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Read%2520more%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%25221px%2520solid%2520%252300b4d8%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522transparent%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%2522%25204px%252010px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522600%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontSize%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%252300b4d8%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Bookmark%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FShadowCard%253E"
              style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </code>
        </div>

        <div className="code-box margin-top-2em">
          <code>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CShadowCard%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520shadowType%253D%2522inset%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520visuals%253D%257B%257B%2520maxHeight%253A%2520%2522max-content%2522%252C%2520minHeight%253A%2520%2522max-content%2522%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520style%253D%257B%257B%2520fontSize%253A%2520%252214px%2522%2520%257D%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing%2520and%2520typesetting%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520industry.%2520Lorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing%2520and%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520typesetting%2520industry.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520display%253A%2520%2522flex%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520justifyContent%253A%2520%2522space-between%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520margin%253A%2520%252218px%25200%25200%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%2522none%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522%252300b4d8%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%2522%25204px%252010px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522600%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontSize%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%2523fff%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Read%2520more%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520style%253D%257B%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520border%253A%2520%25221px%2520solid%2520%252300b4d8%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520backgroundColor%253A%2520%2522transparent%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520borderRadius%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520padding%253A%2520%2522%25204px%252010px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontWeight%253A%2520%2522600%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520fontSize%253A%2520%252212px%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520color%253A%2520%2522%252300b4d8%2522%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257D%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Bookmark%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252FShadowCard%253E"
              style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </code>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
