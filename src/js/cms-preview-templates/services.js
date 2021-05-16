import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    return <div>
      <Jumbotron image={getAsset(entry.getIn(["data", "image"]))} title={entry.getIn(["data", "title"])} />

      <div className="bg-off-white pv4 ph3">
      	<div className="mw7 center">

      		<h2 className="f2 b lh-title mb3">{entry.getIn(['data', 'pricing', 'heading'])}</h2>
      		<p className="mw6">{entry.getIn(['data', 'pricing', 'description'])}</p>

      		<div className="flex-ns mhn2-ns mw7">
            {(entry.getIn(['data', 'pricing', 'plans']) || []).map((plan, index) => <div className="w-33-ns ph2" key={index}>
              <div className="ph2">

              	<h3 className="b f5 grey-3 tc lh-title mb3">{plan.get('plan')}</h3>

              	<p className="primary f1 b tc lh-title center">
              		<span className="f4">$</span>{plan.get('price')}
              	</p>

-              	<p className="b">{plan.get('description')}</p>

              	<ul>
                  {(plan.get('items') || []).map((item, index) => <li key={index}>
                    <p className={index + 1 !== plan.get('items').size ? "pb2 mb2 divider-grey" : null}>{item}</p>
                  </li>)}
              	</ul>

              </div>

            </div>)}
      		</div>
      	</div>
      </div>
    </div>;
  }
}
