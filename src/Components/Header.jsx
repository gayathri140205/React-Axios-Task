// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-pink">
      <div className="container px-4 px-lg-5">
      

     
        <Link className="text-danger fs-3" to="/ListPages">
          <i className="fa-solid fa-list"></i>
        </Link>
      </div>
    </nav>

     //<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //</nav>   <div className="container">
    //     <NavLink className="navbar-brand" to="/">
    //     <img src="./video/logo.png" alt="logo" />
    //     </NavLink>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    //       <ul className="navbar-nav ml-auto mx-3">
    //         <h3><li className="nav-item">
    //           <NavLink
    //             to="/"
    //             className="nav-link"
    //             activeClassName="active"
    //           >
    //           <i class="fas fa-home"></i>
    //           </NavLink>
    //         </li></h3>
    //         <h3><li className="nav-item ">
    //           <NavLink
    //             to="/ListPages"
    //             className="nav-link text-danger"
    //             activeClassName="active"
    //           >
    //           <i class="fa-solid fa-list"></i>
    //           </NavLink>
    //         </li></h3>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Header;