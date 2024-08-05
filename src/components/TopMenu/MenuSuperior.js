import React, { useEffect } from 'react';
import ThemeSwitch from '../ThemeSwitch/Switcher';
import FontAwesome from 'react-fontawesome';

function MenuSuperior() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/theme.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        </div>
      </div>
    </header>
  );
}

export default MenuSuperior;