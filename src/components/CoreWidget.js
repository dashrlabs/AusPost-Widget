/** Do not rename this file **/
import React from 'react';

export default class auspostWidget extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    settings: React.PropTypes.object.isRequired,
  };

  static id = 'auspost';
  static widgetName = 'Auspost Tracking Widget';
  static sizes = [[2, 1], [2, 2], [2,3]];

  render() {
    return (
      <div className="container">
        <ul className="uk-list uk-list-striped track-container">
          <li>
            <div className="uk-flex uk-flex-column">
              <div className="uk-flex-item-1 uk-flex">
                <div className="uk-flex-item-none">
                  <i className="uk-icon-home uk-text-success"></i>
                  <span className="uk-margin-small-left status uk-text-success">Delivered</span>
                </div>
                <div className="uk-flex-item-1 uk-flex uk-flex-right uk-margin-small-right date">
                  31 Mar
                </div>
              </div>
              <div className="uk-flex-item-1 uk-margin-left address gray">
                Mount Waverley, VIC
              </div>
            </div>
          </li>
          <li>
            <div className="uk-flex uk-flex-column">
              <div className="uk-flex-item-1 uk-flex">
                <div className="uk-flex-item-none">
                  <i className="uk-icon-truck gray"></i>
                  <span className="uk-margin-small-left status gray">In Transit</span>
                </div>
                <div className="uk-flex-item-1 uk-flex uk-flex-right uk-margin-small-right date">
                  5:00 PM
                </div>
              </div>
              <div className="uk-flex-item-1 uk-margin-left address gray">
                Glen Waverley, VIC
              </div>
            </div>
          </li>
          <li>
            <div className="uk-flex uk-flex-column">
              <div className="uk-flex-item-1 uk-flex">
                <div className="uk-flex-item-none">
                  <i className="uk-icon-truck gray"></i>
                  <span className="uk-margin-small-left status gray">In Transit</span>
                </div>
                <div className="uk-flex-item-1 uk-flex uk-flex-right uk-margin-small-right date">
                  5:30 AM
                </div>
              </div>
              <div className="uk-flex-item-1 uk-margin-left address gray">
                Sydney, NSW
              </div>
            </div>
          </li>
          <li>
            <div className="uk-flex uk-flex-column">
              <div className="uk-flex-item-1 uk-flex">
                <div className="uk-flex-item-none">
                  <i className="uk-icon-truck gray"></i>
                  <span className="uk-margin-small-left status gray">In Transit</span>
                </div>
                <div className="uk-flex-item-1 uk-flex uk-flex-right uk-margin-small-right date">
                  28 Mar
                </div>
              </div>
              <div className="uk-flex-item-1 uk-margin-left address gray">
                Singapore
              </div>
            </div>
          </li>
          <li>
            <div className="uk-flex uk-flex-column">
              <div className="uk-flex-item-1 uk-flex">
                <div className="uk-flex-item-none">
                  <i className="uk-icon-truck gray"></i>
                  <span className="uk-margin-small-left status gray">In Transit</span>
                </div>
                <div className="uk-flex-item-1 uk-flex uk-flex-right uk-margin-small-right date">
                  27 Mar
                </div>
              </div>
              <div className="uk-flex-item-1 uk-margin-left address gray">
                Item received from Sender
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
