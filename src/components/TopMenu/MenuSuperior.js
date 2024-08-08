import React, { useContext } from 'react';
import ThemeSwitch from '../ThemeSwitch/Switcher';
import { UserContext } from '../../Pages/Aplication/Login/UserContext';
const Menu = () => {
  const { user, logout } = useContext(UserContext);
    return (
      <header className="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top">
        <div className="container px-3">
          <a href="#" className="navbar-brand pe-3">
            <img src="/img/logo.svg" width="47" alt="OldBarom" />
            Old Barom
          </a>
          <div id="navbarNav" className="offcanvas offcanvas-end">
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link">
                    Apps
                  </a>
                  <div className="dropdown-menu p-0">
                    <div className="d-lg-flex">
                      <div
                        className="mega-dropdown-column d-flex justify-content-center align-items-center rounded-3 rounded-end-0 px-0"
                        style={{
                          margin: "-1px",
                          "background-color": "#f3f6ff",
                        }}
                      >
                        <img src="/img/landings.jpg" alt="Landings" />
                      </div>
                      <div
                        className="mega-dropdown-column pt-lg-3 pb-lg-4"
                        style={{ "--si-mega-dropdown-column-width": "15rem" }}
                      >
                        <ul className="list-unstyled mb-0">
                          <li>
                            <a href="index.html" className="dropdown-item">
                              Template Intro Page
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-mobile-app-showcase-v1.html"
                              className="dropdown-item"
                            >
                              Mobile App Showcase v.1
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-mobile-app-showcase-v2.html"
                              className="dropdown-item"
                            >
                              Mobile App Showcase v.2
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-mobile-app-showcase-v3.html"
                              className="dropdown-item"
                            >
                              Mobile App Showcase v.3
                              <span className="badge bg-success ms-2">New</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-product.html"
                              className="dropdown-item d-flex align-items-center"
                            >
                              Product Landing
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-saas-v1.html"
                              className="dropdown-item"
                            >
                              SaaS v.1
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-saas-v2.html"
                              className="dropdown-item"
                            >
                              SaaS v.2
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-saas-v3.html"
                              className="dropdown-item"
                            >
                              SaaS v.3
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-saas-v4.html"
                              className="dropdown-item"
                            >
                              SaaS v.4
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-saas-v5.html"
                              className="dropdown-item"
                            >
                              SaaS v.5
                              <span className="badge bg-success ms-2">New</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-dropdown-column pt-lg-3 pb-lg-4">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <a
                              href="landing-startup.html"
                              className="dropdown-item d-flex align-items-center"
                            >
                              Startup
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-financial.html"
                              className="dropdown-item"
                            >
                              Financial Consulting
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-online-courses.html"
                              className="dropdown-item"
                            >
                              Online Courses
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-medical.html"
                              className="dropdown-item"
                            >
                              Medical
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-software-dev-agency-v1.html"
                              className="dropdown-item"
                            >
                              Software Dev Agency v.1
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-software-dev-agency-v2.html"
                              className="dropdown-item"
                            >
                              Software Dev Agency v.2
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-software-dev-agency-v3.html"
                              className="dropdown-item"
                            >
                              Software Dev Agency v.3
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-conference.html"
                              className="dropdown-item"
                            >
                              Conference
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-digital-agency.html"
                              className="dropdown-item"
                            >
                              Digital Agency
                            </a>
                          </li>
                          <li>
                            <a href="landing-blog.html" className="dropdown-item">
                              Blog Homepage
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link" data-bs-toggle="dropdown">
                    About Us
                  </a>
                  <div className="dropdown-menu">
                    <div className="d-lg-flex pt-lg-3">
                      <div className="mega-dropdown-column">
                        <h6 className="px-3 mb-2">About</h6>
                        <ul className="list-unstyled mb-3">
                          <li>
                            <a href="about-v1.html" className="dropdown-item py-1">
                              About v.1
                            </a>
                          </li>
                          <li>
                            <a href="about-v2.html" className="dropdown-item py-1">
                              About v.2
                            </a>
                          </li>
                          <li>
                            <a href="about-v3.html" className="dropdown-item py-1">
                              About v.3
                            </a>
                          </li>
                        </ul>
                        <h6 className="px-3 mb-2">Blog</h6>
                        <ul className="list-unstyled mb-3">
                          <li>
                            <a
                              href="blog-list-with-sidebar.html"
                              className="dropdown-item py-1"
                            >
                              List View with Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-grid-with-sidebar.html"
                              className="dropdown-item py-1"
                            >
                              Grid View with Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-list-no-sidebar.html"
                              className="dropdown-item py-1"
                            >
                              List View no Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-grid-no-sidebar.html"
                              className="dropdown-item py-1"
                            >
                              Grid View no Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-simple-feed.html"
                              className="dropdown-item py-1"
                            >
                              Simple Feed
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-single.html"
                              className="dropdown-item py-1"
                            >
                              Single Post
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-podcast.html"
                              className="dropdown-item py-1"
                            >
                              Podcast
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-dropdown-column">
                        <h6 className="px-3 mb-2">Portfolio</h6>
                        <ul className="list-unstyled mb-3">
                          <li>
                            <a
                              href="portfolio-grid.html"
                              className="dropdown-item py-1"
                            >
                              Grid View
                            </a>
                          </li>
                          <li>
                            <a
                              href="portfolio-list.html"
                              className="dropdown-item py-1"
                            >
                              List View
                            </a>
                          </li>
                          <li>
                            <a
                              href="portfolio-slider.html"
                              className="dropdown-item py-1"
                            >
                              Slider View
                            </a>
                          </li>
                          <li>
                            <a
                              href="portfolio-courses.html"
                              className="dropdown-item py-1"
                            >
                              Courses
                            </a>
                          </li>
                          <li>
                            <a
                              href="portfolio-single-project.html"
                              className="dropdown-item py-1"
                            >
                              Single Project
                            </a>
                          </li>
                          <li>
                            <a
                              href="portfolio-single-course.html"
                              className="dropdown-item py-1"
                            >
                              Single Course
                            </a>
                          </li>
                        </ul>
                        <h6 className="px-3 mb-2">Services</h6>
                        <ul className="list-unstyled mb-3">
                          <li>
                            <a
                              href="services-v1.html"
                              className="dropdown-item py-1"
                            >
                              Services v.1
                            </a>
                          </li>
                          <li>
                            <a
                              href="services-v2.html"
                              className="dropdown-item py-1"
                            >
                              Services v.2
                            </a>
                          </li>
                          <li>
                            <a
                              href="services-single-v1.html"
                              className="dropdown-item py-1"
                            >
                              Service Details v.1
                            </a>
                          </li>
                          <li>
                            <a
                              href="services-single-v2.html"
                              className="dropdown-item py-1"
                            >
                              Service Details v.2
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-dropdown-column">
                        <h6 className="px-3 mb-2">Pricing</h6>
                        <ul className="list-unstyled mb-3">
                          <li>
                            <a href="pricing.html" className="dropdown-item py-1">
                              Pricing Page
                            </a>
                          </li>
                        </ul>
                        <h6 className="px-3 mb-2">Contacts</h6>
                        <ul className="list-unstyled mb-3">
                          <li>
                            <a
                              href="contacts-v1.html"
                              className="dropdown-item py-1"
                            >
                              Contacts v.1
                            </a>
                          </li>
                          <li>
                            <a
                              href="contacts-v2.html"
                              className="dropdown-item py-1"
                            >
                              Contacts v.2
                            </a>
                          </li>
                          <li>
                            <a
                              href="contacts-v3.html"
                              className="dropdown-item py-1"
                            >
                              Contacts v.3
                            </a>
                          </li>
                        </ul>
                        <h6 className="px-3 mb-2">Specialty</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a href="404-v1.html" className="dropdown-item py-1">
                              404 Error v.1
                            </a>
                          </li>
                          <li>
                            <a href="404-v2.html" className="dropdown-item py-1">
                              404 Error v.2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="components/typography.html" className="nav-link">
                    My Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a href="docs/getting-started.html" className="nav-link">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            <div className="offcanvas-header border-top">
              <a href="/login" className="btn btn-primary w-100">
                Sign in
              </a>
            </div>
          </div>
          <ThemeSwitch />
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {user ? (
            <div className="dropdown ms-auto">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  src="/img/avatar/01.jpg"
                  alt="User"
                  className="rounded-circle"
                  width="32"
                />
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a href="components/typography.html" className="dropdown-item">
                  My Profile
                </a>
                <a href="docs/getting-started.html" className="dropdown-item">
                  Docs
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item" onClick={logout}>
                  Sign out
                </a>
              </div>
            </div>
          ) : (
            <a
              href="/login"
              className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex"
            >
              Sign in
            </a>
          )}
        </div>
      </header>
    );
}

export default Menu;