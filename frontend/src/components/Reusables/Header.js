import React, { AppState } from 'react';
import { Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row, Col, Dropdown, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../../actions/userActions';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import {
  BiUser,
  BiShoppingBag,
  BiHeart,
  BiDownArrowAlt,
  BiArrowFromTop,
  BiDownArrowCircle,
} from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import Logo from '../../images/amazon.svg';

const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const userLogin = useSelector((state) => state.userLogin);
  const cartInfo = useSelector((state) => state.cart);
  const { userInfo } = userLogin;

  // console.log("currency", currency)
  const logoutHandler = () => {
    dispatch(logout());
    toast.success('You are now logged out!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <header>
      <div className="header-info">
        <Container>
          <Row className="gy-3 align-items-center">
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="brand">
                <Link to="/" className="logo">
                  <img src={Logo} width="100px"></img>
                </Link>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="header-search-form">
                <Route
                  render={({ history }) => <SearchBox history={history} />}
                />
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="account-wish-cart">
                <div className="hi-cart">
                  <Link to="/cart">
                    <BiShoppingBag />
                    <div className="hi-cart-count">
                      {cartInfo.cartItems.length}
                    </div>
                  </Link>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    as={'span'}
                    className="hi-ac-dropdown"
                    style={{ marginLeft: '29px' }}
                  >
                    {userInfo ? (
                      <>
                        {' '}
                        <BiUser />{' '}
                        <span style={{ fontSize: '24px' }}>
                          {userInfo.name}{' '}
                          <BiDownArrowCircle></BiDownArrowCircle>
                        </span>{' '}
                      </>
                    ) : (
                      <BiUser />
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="hi-ac-dropdown-menu">
                    {userInfo ? (
                      <>
                        <LinkContainer to="/profile">
                          <Dropdown.Item>{t('Profile.1')}</Dropdown.Item>
                        </LinkContainer>
                        {userInfo.isAdmin && (
                          <>
                            <LinkContainer to="/admin/userlist">
                              <Dropdown.Item>{t('Users.1')}</Dropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/admin/productlist">
                              <Dropdown.Item>{t('Products.1')}</Dropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/admin/orderlist">
                              <Dropdown.Item>{t('Orders.1')}</Dropdown.Item>
                            </LinkContainer>
                          </>
                        )}
                        <Dropdown.Item as="button" onClick={logoutHandler}>
                          {t('Logout.1')}
                        </Dropdown.Item>
                      </>
                    ) : (
                      <>
                        <LinkContainer to="/login">
                          <Dropdown.Item>{t('SignIn.1')}</Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/register">
                          <Dropdown.Item>{t('SignUp.1')}</Dropdown.Item>
                        </LinkContainer>
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-top">
        <Container>
          <Row className="gy-3 align-items-center">
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="header-socials">
                <ul className="header-social-list">
                  <li className="header-social-list-item">
                    <a
                      target="_blank"
                      href="https://www.facebook.com//ubthighereducationinstitution"
                      className="header-social-link"
                      rel="noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="header-social-list-item">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/user/UBTPRISHTINA"
                      className="header-social-link"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                  <li className="header-social-list-item">
                    <a
                      href="https://www.instagram.com/ubt_official"
                      className="header-social-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="header-social-list-item">
                    <a
                      href="https://www.linkedin.com/school/ubt---university-for-business-and-technology/"
                      className="header-social-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="header-discount">
                <p className="header-discount-text">
                  {/* Free Shipping This Week Order Over - $75 */}
                  {t('freeShipping.1')}
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="header-currency-and-language">
                <div className="language-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="ht-dropdown"
                    >
                      {t('Language.1')}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="ht-dropdown-menu">
                      <Dropdown.Item href="/" onClick={() => handleClick('en')}>
                        English
                      </Dropdown.Item>
                      <Dropdown.Item href="/" onClick={() => handleClick('al')}>
                        Shqip
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-navbar">
        <Navbar bg="transparent" expand="md">
          <Container className="justify-content-center">
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="nav-toggler-btn"
            />
            <Navbar.Collapse
              id="navbarScroll"
              className="navbar-collapse-container"
            >
              <Nav className="m-auto my-2 my-lg-0">
                <LinkContainer to="/">
                  <Nav.Link className="header-nav-link">{t('Home.1')}</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/shop">
                  <Nav.Link className="header-nav-link">{t('Shop.1')}</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/aboutus">
                  <Nav.Link className="header-nav-link">
                    {t('AboutUs.1')}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact-us">
                  <Nav.Link className="header-nav-link">
                    {t('ContactUs.1')}
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
