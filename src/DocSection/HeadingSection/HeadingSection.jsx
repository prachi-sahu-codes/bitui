import React from 'react';
import { Heading } from '../../components';

const HeadingSection = () => {
  return (
    <section id="heading" className="section-content">
      <h2 className="section-head">Heading</h2>
      <p className="section-text">Headings are text elements used to denote section titles or headings within a document or webpage, typically organized hierarchically from H1 (highest importance) to H6 (lowest importance).</p>
      
      <h3 className="section-subhead">Props</h3>
      <p>Props available for the Alert Component :</p>
      <ul>
        <li className="section-li">
          <h4 className="section-subhead-head">variant</h4>
          <p>
            This helps in choosing appropriate heading tags.
          </p>
          <div className="section-prop-type">
            <h4>Type: </h4>
            <p className="section-type-value">"h1" | "h2" | "h3" | "h4" | "h5" | "h6"</p>
          </div>
          <div className="section-prop-type">
            <h4>Default: </h4> <p className="section-type-value">"h1"</p>
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
          <p>The content of the heading component.</p>
          <div className="section-prop-type">
            <h4>Type: </h4>{" "}
            <p className="section-type-value">node</p>
          </div>
          <hr className="horizontal-line" />
        </li>
       
      </ul>

      <div>
        <h3 className="section-subhead margin-top-1em">Example of Headings</h3>
        <p>
        You can create a headings with your own custom styles.
        </p>
      </div>
      <div className="all-component-block padding-1em">
        <Heading variant="h1">This is h1 heading.</Heading>
        <Heading variant="h2">This is h2 heading.</Heading>
        <Heading variant="h3">This is h3 heading.</Heading>
        <Heading variant="h4">This is h4 heading.</Heading>
        <Heading variant="h5">This is h5 heading.</Heading>
        <Heading variant="h6">This is h6 heading.</Heading>
      </div>
      <div className="code-box">
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=a11y-dark&wt=none&l=javascript&width=913.5&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CHeading%2520variant%253D%2522h1%2522%253EThis%2520is%2520h1%2520heading.%253C%252FHeading%253E%250A%253CHeading%2520variant%253D%2522h2%2522%253EThis%2520is%2520h2%2520heading.%253C%252FHeading%253E%250A%253CHeading%2520variant%253D%2522h3%2522%253EThis%2520is%2520h3%2520heading.%253C%252FHeading%253E%250A%253CHeading%2520variant%253D%2522h4%2522%253EThis%2520is%2520h4%2520heading.%253C%252FHeading%253E%250A%253CHeading%2520variant%253D%2522h5%2522%253EThis%2520is%2520h5%2520heading.%253C%252FHeading%253E%250A%253CHeading%2520variant%253D%2522h6%2522%253EThis%2520is%2520h6%2520heading.%253C%252FHeading%253E"
            style={{ border: 0, transform: "scale(1)", overflow: "hidden" }}
            className='small-code'
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
      </div>
    </section>
  )
}

export default HeadingSection;
