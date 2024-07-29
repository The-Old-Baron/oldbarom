import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
function SideMenu(){
  const [activeItem, setActiveItem] = useState('PublicInformations');

  // Função para atualizar o item ativo
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <>
      <aside className="col-lg-3 col-md-4 border-end pb-5 mt-n5">
        <div className="position-sticky top-0">
          <div className="text-center pt-5">
            <div className="d-table position-relative mx-auto mt-2 mt-lg-4 pt-5 mb-3">
              <img
                src="/img/avatar/18.jpg"
                className="d-block rounded-circle"
                width={120}
                alt="USER NAME"
              ></img>
              <button
                className="btn btn-icon btn-light bg-white btn-sm border rounded-circle shadow-sm position-absolute bottom-0 end-0 mt-4"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Change picture"
                aria-label="Change Picture"
              >
                <FontAwesomeIcon icon={["fas", "camera"]} />
              </button>
            </div>
            <h2 className="h5 mb-1">USER NAME</h2>
            <p className="mb-3 pb-3">email@example.com</p>
            <button
              className="btn btn-secondary w-100 d-md-none mt-n2 mb-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accountMenu"
            >
              <FontAwesomeIcon icon={["fas", "cog"]} className="me-2" />
              Account menu
              <FontAwesomeIcon icon={["fas", "angle-down"]} className="ms-2" />
            </button>
            <div
              id="account-menu"
              className="list-group list-group-flush collapse d-md-block"
            >
              <Link
                to="/core/Account/PublicInformations"
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  activeItem === "PublicInformations" ? "active" : ""
                }`}
                onClick={() => handleItemClick("PublicInformations")}
              >
                <FontAwesomeIcon icon={["fas", "passport"]} className="me-2" />
                Public informations
              </Link>
              <Link
                to="/core/Account/AccountDetails"
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  activeItem === "AccountDetails" ? "active" : ""
                }`}
                onClick={() => handleItemClick("AccountDetails")}
              >
                <FontAwesomeIcon icon={["fas", "user"]} className="me-2" />
                Account details
              </Link>
              <Link
                to="/core/Account/Apparence"
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  activeItem === "Apparence" ? "active" : ""
                }`}
                onClick={() => handleItemClick("Apparence")}
              >
                <FontAwesomeIcon icon={["fas", "palette"]} className="me-2" />
                Apparence
              </Link>
              <Link
                to="/core/Account/Notification"
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  activeItem === "Notification" ? "active" : ""
                }`}
                onClick={() => handleItemClick("Notification")}
              >
                <FontAwesomeIcon icon={["fas", "bell"]} className="me-2" />
                Notification
              </Link>
              <Link
                to="/core/Account/Email"
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  activeItem === "Email" ? "active" : ""
                }`}
                onClick={() => handleItemClick("Email")}
              >
                <FontAwesomeIcon icon={["fas", "envelope"]} className="me-2" />
                Email
              </Link>
              <Link
                to="/core/Account/Password"
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  activeItem === "Password" ? "active" : ""
                }`}
                onClick={() => handleItemClick("Password")}
              >
                <FontAwesomeIcon icon={["fas", "key"]} className="me-2" />
                Password
              </Link>
              <Link
                to="/core/Account/Sessions"
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  activeItem === "Sessions" ? "active" : ""
                }`}
                onClick={() => handleItemClick("Sessions")}
              >
                <FontAwesomeIcon icon={["fas", "desktop"]} className="me-2" />
                Sessions
              </Link>
              <Link
                to="/core/Account/Organizations"
                className={`list-group-item list-group-item-action d-flex align-items-center ${
                  activeItem === "Organizations" ? "active" : ""
                }`}
                onClick={() => handleItemClick("Organizations")}
              >
                <FontAwesomeIcon icon={["fas", "users"]} className="me-2" />
                Organizations
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideMenu;