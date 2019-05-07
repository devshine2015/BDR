import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    // changeToDark: PropTypes.func.isRequired,
    // changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    // const { changeToDark, changeToLight } = this.props;
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Dashboard" icon="home" route="/dashboard" onClick={this.hideSidebar} />
          <SidebarLink title="Datenquellen" icon="file-empty" route="/data/sources" onClick={this.hideSidebar} />
          <SidebarCategory title="Auftragsübersicht" icon="list">
            <SidebarLink title="Pseudonymisierung" route="/order/pseudo" onClick={this.hideSidebar} />
            <SidebarLink title="Datenqualität" route="/order/data" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Data Analytics" icon="chart-bars">
            <SidebarLink title="Data1" route="/data/1" onClick={this.hideSidebar} />
            <SidebarLink title="Data2" route="/data/2" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Mein Benutzerkonto" icon="user">
            <SidebarLink title="user1" route="/account/1" onClick={this.hideSidebar} />
            <SidebarLink title="user2" route="/account/2" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>

        <ul className="sidebar__block">
          <SidebarLink title="Abmelden" icon="exit" route="/log_in" onClick={this.hideSidebar} />
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
