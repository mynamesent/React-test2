import React, { Component } from "react";
import "../static/Header.css";
import { Menu, Responsive } from "semantic-ui-react";
import { Image, Icon, Sidebar, Segment } from "semantic-ui-react";
import Routing from "./routes";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import 'sweetalert2/src/sweetalert2.scss'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      visible: false
    };
  }

  handleButtonClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleSidebarHide = () => this.setState({ visible: false });

    NavLinkMenuBar = () => {
      return (
        <Menu.Menu position="left">
          <NavLink to="/places">
            <Menu.Item className="navBarMenu"></Menu.Item>
          </NavLink>
          <NavLink to="/events">
            <Menu.Item className="navBarMenu"></Menu.Item>
          </NavLink>
          <NavLink to="/meeting">
            <Menu.Item className="navBarMenu"></Menu.Item>
          </NavLink>
          <NavLink to="/gallery">
            <Menu.Item className="navBarMenu"></Menu.Item>
          </NavLink>
          <NavLink to="/activity">
            <Menu.Item className="navBarMenu"></Menu.Item>
          </NavLink>
          <NavLink to="/searchpage">
            <Menu.Item className="navBarMenu"></Menu.Item>
          </NavLink>
        </Menu.Menu>
      );
    };

  NavLinkMenuBar767 = () => {
    return (
      <Menu.Menu position="left">
        <NavLink to="/places">
          <Menu.Item className="navBarMenu"></Menu.Item>
        </NavLink>
        <NavLink to="/events">
          <Menu.Item className="navBarMenu"></Menu.Item>
        </NavLink>
        <NavLink to="/meeting">
          <Menu.Item className="navBarMenu"></Menu.Item>
        </NavLink>
        <NavLink to="/gallery">
          <Menu.Item className="navBarMenu"></Menu.Item>
        </NavLink>
        <NavLink to="/activity">
          <Menu.Item className="navBarMenu"></Menu.Item>
        </NavLink>
        <NavLink to="/searchpage">
          <Menu.Item className="navBarMenu">
          </Menu.Item>
        </NavLink>
      </Menu.Menu>
    );
  };

  NavLinkMenuBariPad = () => {
    return (
      <Menu.Menu position="left">
        <NavLink to="/places">
          <Menu.Item className="navBarMenu"></Menu.Item>
        </NavLink>
        <NavLink to="/events">
          <Menu.Item className="navBarMenu"></Menu.Item>
        </NavLink>
        <NavLink to="/meeting">
          <Menu.Item className="navBarMenu"></Menu.Item>
        </NavLink>
        <NavLink to="/gallery">
          <Menu.Item className="navBarMenu"></Menu.Item>
        </NavLink>
        <NavLink to="/activity">
          <Menu.Item className="navBarMenu"></Menu.Item>
        </NavLink>
        <NavLink to="/searchpage">
          <Menu.Item className="navBarMenu"></Menu.Item>
        </NavLink>
      </Menu.Menu>
    );
  };  

  hamburgerMenu = () => {
    return (
      <Menu.Item onClick={this.handleButtonClick}>
        <Icon
          inverted
          name="sidebar"
          size="large"
          onClick={this.handleSideBar}
        />
      </Menu.Item>
    );
  };

  sidebarMenu = () => {
    let tmp = "";
    if (Cookies.get("user") === undefined) {
      tmp = (
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={this.state.visible}
          width="thin"
          onClick={this.handleSidebarHide}
        >
          <NavLink to="/main">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>
          <NavLink to="/places">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>
          <NavLink to="/events">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>
          <NavLink to="/meeting">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>
          <NavLink to="/gallery">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>
          <NavLink to="/activity">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>
          <NavLink to="/searchpage">
          <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>          
        </NavLink>
          <NavLink to="/login">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>
          <NavLink to="/register">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>
        </Sidebar>
      );
    } else {
      tmp = (
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={this.state.visible}
          width="thin"
          onClick={this.handleSidebarHide}
        >
          <NavLink to="/main">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>

          <NavLink to="/places">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>

          <NavLink to="/events">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>

          <NavLink to="/meeting">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>

          <NavLink to="/gallery">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>

          <NavLink to="/activity">
            <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>
          </NavLink>

          <NavLink to="/searchpage">
          <Menu.Item as="a">
              <p className="sideMenuMobile"></p>
            </Menu.Item>         
        </NavLink>

          <NavLink to="/findbynear">
              <Menu.Item as="a">
                <p className="sideMenuMobile"></p>
              </Menu.Item>
            </NavLink>
            <NavLink to="/profile">
          <Menu.Item as="a">
            <p className="sideMenuMobile">
              ยินดีต้อนรับคุณ {Cookies.get("user")}
            </p>
          </Menu.Item>
          </NavLink>

          <Menu.Item as="a" onClick={this.logout}>
            <p className="sideMenuMobile"></p>
          </Menu.Item>
        </Sidebar>
      );
    }
    return tmp;
  };

  loginTab = () => {
    let tmp = "";
    if (Cookies.get("user") !== undefined) {
      tmp = (
        <Menu.Menu position="right" className="navBarMenuRight">
          <NavLink to="/findbynear">
            <Menu.Item>
              <p className="rightMenuBar"></p>
            </Menu.Item>
          </NavLink>
          <NavLink to="/profile">
            <Menu.Item className="welcome">
               {Cookies.get("user")} &nbsp;&nbsp;&nbsp;&nbsp;
              <Image src={Cookies.get("userAvatar")} avatar />
            </Menu.Item>
          </NavLink>
          <Menu.Item>
            <p className="rightMenuBar" onClick={this.logout}>
              
            </p>
          </Menu.Item>
        </Menu.Menu>
      );
    } else {
      tmp = (
        <Menu.Menu position="right">
          <NavLink to="/login">
            <Menu.Item>
              <p className="rightMenuBar"></p>
            </Menu.Item>
          </NavLink>
          <NavLink to="/register">
            <Menu.Item>
              <p className="rightMenuBar"></p>
            </Menu.Item>
          </NavLink>
        </Menu.Menu>
      );
    }
    return tmp;
  };

  logout = () => {
    Cookies.remove("user");
    Cookies.remove('role');
    Cookies.remove('avatar')
    this.setState({ redirect: true });
  };

  render() {
    let { redirect } = this.state;
    if (redirect && Cookies.get("user") === undefined) {
      window.location.replace("/");
    }
    return (
      <Segment.Group>
        <Responsive as={Segment} minWidth={1919}>
          <Menu inverted secondary>
            <NavLink to="/main">
            <Menu.Item header className="logoText">
EDit
            </Menu.Item>
          </NavLink>
            {this.NavLinkMenuBar()}
            {this.loginTab()}
          </Menu>
        </Responsive>
      {/* HD screen */}
        <Responsive as={Segment} minWidth={1025} maxWidth={1900}>
          <Menu inverted secondary>
          <NavLink to="/main">
            <Menu.Item header className="logoText">
            Edit
            </Menu.Item>
          </NavLink>
            {this.NavLinkMenuBar767()}
            {this.loginTab()}
          </Menu>
        </Responsive>
        <Responsive as={Segment} minWidth={0} maxWidth={1024}>
          <Menu secondary>
            {this.hamburgerMenu()}            
          </Menu>
          {/* {this.sidebarMenu()} */}
        </Responsive>
        <Routing />
      </Segment.Group>
    );
  }
}

export default Main;
