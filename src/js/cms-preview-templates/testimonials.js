import React from "react";
import Jumbotron from "./components/jumbotron";

export default class TestimonialsPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return <div>
      <Jumbotron image={getAsset(entry.getIn(["data", "image"]))} title={entry.getIn(["data", "title"])} />
      <div className="pb4">
        {(entry.getIn(['data', 'testimonials']) || []).map((testimonial, index) => <div className="center mb3 ph3" key={index}>
        	<blockquote className="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
        		<p className="f4 mb0">“{testimonial.get('quote')}”</p>
        		<cite className="tr db grey-3">{testimonial.get('author')}</cite>
        	</blockquote>
        </div>)}
      </div>
    </div>;
  }
}
