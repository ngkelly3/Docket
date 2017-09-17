import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header className="intro-header">
        <div className="container">
          <div className="intro-message">
            <div className="container"></div>
            <h3>Points!</h3>
            <a href="#" className="btn btn-secondary btn-lg">
              <span className="network-name">Redeem cool prizes</span>
            </a>

          </div>
          <div className="container">
              <a href="#" className="btn btn-secondary btn-lg ">
                <span className="network-name">Schedule</span>
              </a>
              <a href="#" className="btn btn-secondary btn-lg ">
                <span className="network-name">Social</span>
              </a>
              <a href="#" className="btn btn-secondary btn-lg ">
                <span className="network-name">Progress</span>
              </a>

            </div>

        </div>
      </header>
    );
  }
}

export default Header;
