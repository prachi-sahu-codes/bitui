import { ImageAvatar, LetterAvatar } from "../../components";

const AvatarSection = () => {
  return (
    <section id="avatar" className="section-content">
      <h2 className="section-head">Avatar</h2>
      <p className="section-text">
        Avatars are small user profile images used to represent individuals or
        entities. They provide a visual identity and recognition in
        applications. There are <strong>2</strong> types of Avatars available <em className="bold-500">Image Avatar and
        Letter Avatar.</em>
      </p>
      <h2>Image Avatar :</h2>
      <p className="section-text">
        An Image Avatar displays a user's profile picture.
      </p>

      <h3 className="section-subhead">Props</h3>
      <p>Props available for the Image Avatar Component :</p>
      <ul>
        <li className="section-li">
          <h4 className="section-subhead-head">avatarSource</h4>
          <p className="section-subhead-info">
            Used for providing URL of the image inside Avatar component.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>

          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">avatarAlt</h4>
          <p>
            Used for providing alt attribute for the rendered img element inside
            Avatar component.
          </p>
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
        <li className="section-li">
          <h4 className="section-subhead-head">dimension</h4>
          <p>This changes the dimensions of the Avatar component.</p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>
          <hr className="horizontal-line" />
        </li>
      </ul>

      <div>
        <h3 className="section-subhead margin-top-1em">Example of Image Avatars</h3>
        <p>
          You can create an avatar with your own custom image and dimensions.
        </p>
      </div>
      <div className="all-component flex-end padding-1em">
        <ImageAvatar
          avatarSource="https://i.imgur.com/JtLvjcv.jpg"
          avatarAlt="human pic"
          dimension="120px"
        />
        <ImageAvatar
          avatarSource="https://i.imgur.com/JtLvjcv.jpg"
          avatarAlt="human pic"
          dimension="80px"
        />
        <ImageAvatar
          avatarSource="https://i.imgur.com/JtLvjcv.jpg"
          avatarAlt="human pic"
          dimension="50px"
        />
        <ImageAvatar
          avatarSource="https://i.imgur.com/JtLvjcv.jpg"
          avatarAlt="human pic"
          dimension="35px"
        />
      </div>

      <div className="code-box margin-1em">
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=auto&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CImageAvatar%250A%2520%2520avatarSource%253D%2522https%253A%252F%252Fi.imgur.com%252FJtLvjcv.jpg%2522%250A%2520%2520avatarAlt%253D%2522human%2520pic%2522%250A%2520%2520dimension%253D%2522120px%2522%250A%252F%253E%250A%253CImageAvatar%250A%2520%2520avatarSource%253D%2522https%253A%252F%252Fi.imgur.com%252FJtLvjcv.jpg%2522%250A%2520%2520avatarAlt%253D%2522human%2520pic%2522%250A%2520%2520dimension%253D%252280px%2522%250A%252F%253E%250A%253CImageAvatar%250A%2520%2520avatarSource%253D%2522https%253A%252F%252Fi.imgur.com%252FJtLvjcv.jpg%2522%250A%2520%2520avatarAlt%253D%2522human%2520pic%2522%250A%2520%2520dimension%253D%252250px%2522%250A%252F%253E%250A%253CImageAvatar%250A%2520%2520avatarSource%253D%2522https%253A%252F%252Fi.imgur.com%252FJtLvjcv.jpg%2522%250A%2520%2520avatarAlt%253D%2522human%2520pic%2522%250A%2520%2520dimension%253D%252235px%2522%250A%252F%253E"
            style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>

      <h2 className="margin-top-2em">Letter Avatar :</h2>
      <p className="section-text">
      Letter Avatar represents a user with their initials or a custom text
        label.
      </p>

      <h3 className="section-subhead">Props</h3>
      <p>Props available for the Letter Avatar Component :</p>
      <ul>
        <li className="section-li">
          <h4 className="section-subhead-head">avatarText</h4>
          <p className="section-subhead-info">
            Used to provide the text from which the Avatar component selects and
            displays two initials.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>

          <hr className="horizontal-line" />
        </li>

        <li className="section-li">
          <h4 className="section-subhead-head">avatarBg</h4>
          <p>This changes the background color of the Avatar component.</p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>

          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">textColor</h4>
          <p>This changes the color of the text in the Avatar component.</p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>

          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">dimension</h4>
          <p>This changes the dimensions of the Avatar component.</p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">string</p>
          </div>
          <hr className="horizontal-line" />
        </li>
      </ul>

      <div>
        <h3 className="section-subhead margin-top-1em">Example of Letter Avatars</h3>
        <p>
          You can create an avatar with your own text, background-color and dimensions.
        </p>
      </div>
      <div className="all-component flex-end padding-1em">
        <LetterAvatar avatarText="Aditya" avatarBg="#00b4d8" dimension="120" />
        <LetterAvatar avatarText="Aditya" avatarBg="#00b4d8" dimension="80" />
        <LetterAvatar avatarText="Aditya" avatarBg="#00b4d8" dimension="50" />
        <LetterAvatar avatarText="Aditya" avatarBg="#00b4d8" dimension="35" />
      </div>

      <div className="code-box">
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=auto&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CLetterAvatar%2520avatarText%253D%2522Aditya%2522%2520avatarBg%253D%2522%252300b4d8%2522%2520dimension%253D%2522120%2522%2520%252F%253E%250A%253CLetterAvatar%2520avatarText%253D%2522Aditya%2522%2520avatarBg%253D%2522%252300b4d8%2522%2520dimension%253D%252280%2522%2520%252F%253E%250A%253CLetterAvatar%2520avatarText%253D%2522Aditya%2522%2520avatarBg%253D%2522%252300b4d8%2522%2520dimension%253D%252250%2522%2520%252F%253E%250A%253CLetterAvatar%2520avatarText%253D%2522Aditya%2522%2520avatarBg%253D%2522%252300b4d8%2522%2520dimension%253D%252235%2522%2520%252F%253E"
            style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
            className="small-code"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </section>
  );
};

export default AvatarSection;
