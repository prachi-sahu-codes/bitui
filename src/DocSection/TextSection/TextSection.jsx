import React from 'react';
import { Text } from '../../components';

const TextSection = () => {
  return (
    <section id="text" className="section-content">
      <h2 className="section-head">Text</h2>
      <p className="section-text">Text refers to any written or displayed content on a webpage or app, including paragraphs, labels, descriptions, and other textual information that communicates with users.</p>
       
      <h3 className="section-subhead">Props</h3>
      <p>Props available for the Text Component :</p>
      <ul>
        <li className="section-li">
          <h4 className="section-subhead-head">variant</h4>
          <p>
            This helps in choosing appropriate tags for text.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4>
            <p className="section-type-value">"p" | "span" | "strong" | "em" | "code" | "dfn" | "cite" | "abbr" | "blockquote" | "div"</p>
          </div>
          <div className="section-prop-type">
            <h4>Default: </h4> <p className="section-type-value">"p"</p>
          </div>
          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">visuals</h4>
          <p>To modify or enhance the component's styles, you have the option to override existing styles or add your own custom styles.</p>
          <div className="section-prop-type">
            <h4>Type: </h4> <p className="section-type-value">object</p>
          </div>
          <hr className="horizontal-line" />
        </li>
        <li className="section-li">
          <h4 className="section-subhead-head">children</h4>
          <p>The content of the text component.</p>
          <div className="section-prop-type">
            <h4>Type: </h4>{" "}
            <p className="section-type-value">node</p>
          </div>
          <hr className="horizontal-line" />
        </li>
       
      </ul>

      <div>
        <h3 className="section-subhead margin-top-1em">Example of Text</h3>
        <p>
        You can create a text with your own custom styles.
        </p>
      </div>
      <div className="all-component-block padding-1em">
       <Text variant="cite">This is text using <strong>cite</strong> element.</Text>
       <Text variant="abbr">This is text using <strong>abbr</strong> element.</Text>
       <Text variant="blockquote">This is text using <strong>blockquote</strong> element.</Text>
       <Text variant="div">This is text using <strong>div</strong> element.</Text>
       <Text variant="span">This is text using <strong>span</strong> element.</Text>
      </div>
      <div className="code-box">
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CText%2520variant%253D%2522cite%2522%253EThis%2520is%2520text%2520using%2520%253Cstrong%253Ecite%253C%252Fstrong%253E%2520element.%253C%252FText%253E%250A%253CText%2520variant%253D%2522abbr%2522%253EThis%2520is%2520text%2520using%2520%253Cstrong%253Eabbr%253C%252Fstrong%253E%2520element.%253C%252FText%253E%250A%253CText%2520variant%253D%2522blockquote%2522%253EThis%2520is%2520text%2520using%2520%253Cstrong%253Eblockquote%253C%252Fstrong%253E%2520element.%253C%252FText%253E%250A%253CText%2520variant%253D%2522div%2522%253EThis%2520is%2520text%2520using%2520%253Cstrong%253Ediv%253C%252Fstrong%253E%2520element.%253C%252FText%253E%250A%253CText%2520variant%253D%2522span%2522%253EThis%2520is%2520text%2520using%2520%253Cstrong%253Espan%253C%252Fstrong%253E%2520element.%253C%252FText%253E"
            style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
            className='small-code'
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </section>
  )
}

export default TextSection;
