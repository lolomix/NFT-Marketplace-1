import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo } from "../../atoms/Logo";

export default function Footer() {
  const styleIcon = { color: "white", fontSize: "1.5em" };
  const styleTitle = {
    textDecoration: "none",
    color: "#C93D8D",
    fontWeight: "bold",
  };
  const styleItem = { textDecoration: "none", color: "white" };

  return (
    <footer
      class="text-center text-lg-start text-light w-100 h-auto pt-2"
      style={{ backgroundColor: "#1f0443" }}
    >
      <section>
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <div className="mb-4">
                <Logo />
              </div>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <Link to="/Explore" style={styleTitle}>
                <h6 class="text-uppercase fw-bold mb-4">Explore</h6>
              </Link>
              <p>Digital Arts</p>
              <p>Photography</p>
              <p>Music</p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <Link to="/Explore" style={styleTitle}>
                <h6 class="text-uppercase fw-bold mb-4">Account</h6>
              </Link>
              <p>Login</p>
              <p>Register</p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <Link to="/Explore" style={styleTitle}>
                <h6 class="text-uppercase fw-bold mb-4">Activity</h6>
              </Link>
              <p>About Us</p>
              <p>Help</p>
              <p>Terms of Services</p>
              <p>Privacy Policy</p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <Link to="/Explore" style={styleTitle}>
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              </Link>
              <p>(022) 123 456</p>
              <p>Hello@nftcollection.com</p>
              <p>
                <FaFacebook style={styleIcon} size={20} className="me-2" />
                <FaTwitter style={styleIcon} size={20} className="me-2" />
                <FaYoutube style={styleIcon} size={20} className="me-2" />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center p-4 border-top opacity-50">
        <div style={styleItem}>© Copyright 2022 MiniProject Muchlisaryn</div>
      </div>
    </footer>
  );
}
