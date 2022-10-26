import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { gql, useLazyQuery } from "@apollo/client";
import Navbar from "../../component/molecules/Navbar";
import Footer from "../../component/molecules/Footer/Index";
import LoadingSvg from "../../component/atoms/Loading";
import { Logo } from "../../component/atoms/Logo";
import PageContainer from "../../component/PageContainer";

const GetUser = gql`
  query MyQuery($_eq: String, $_eq1: String) {
    login(where: { email: { _eq: $_eq }, password: { _eq: $_eq1 } }) {
      id
      email
      password
    }
  }
`;

export default function Login() {
  const baseError = { email: "" };
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [erorMasage, setErorMassage] = useState(baseError);
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.com+)*$/;
  const [getData, { data, loading, error }] = useLazyQuery(GetUser);
  let Navigate = useNavigate();

  useEffect(() => {
    if (data?.login.length === 1) {
      if (loading) {
        <LoadingSvg />;
      }
      Swal.fire({
        icon: "success",
        title: "Login Berhasil",
      });
      return Navigate("/");
    }
  });

  if (error) {
    <h1>Eror</h1>;
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    getData({ variables: { _eq: email, _eq1: password } });
    if (!regexEmail.test(email)) {
      setErorMassage({
        ...erorMasage,
        [email]: Swal.fire({
          icon: "error",
          title: "Email tidak valid",
        }),
      });
    }
    if (password === "") {
      Swal.fire({
        icon: "error",
        title: "Password Wajib di isi",
      });
    }
    if (email !== "" || password !== "") {
      Swal.fire({
        icon: "error",
        title: "Form Masih Kosong",
      });
    }
  };

  if (loading) {
    <LoadingSvg />;
  }

  return (
    <div style={{ background: "#1F0443", width: "100%", height: "100%" }}>
      <Navbar />
      <PageContainer>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col">
            <div style={{ backgroundColor: "#361561", borderRadius: " 20px " }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/NFT-art.jpg?alt=media&token=1d0f4ac4-c277-421a-9819-7a672b830c26"
                    alt="login form"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-light">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="fw-bold mb-0">
                          <Logo />
                        </span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3">Login</h5>

                      {data ? (
                        <div className="alert bg-danger">
                          <span>Error! </span>Anda Belum terdaftar!
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="form-outline mb-4 mt-4">
                        <label className="form-label" for="form2Example17">
                          Email
                        </label>
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg form"
                          value={email}
                          onChange={onChangeEmail}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example27">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg form"
                          value={password}
                          onChange={onChangePassword}
                          required
                        />
                      </div>

                      <div className="row pb-4">
                        <div className="col-12 col-md-8">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            for="exampleCheck1"
                          >
                            Remember Me
                          </label>
                        </div>
                        <div className="col-6 col-md-4 d-flex justify-content-end ">
                          <Link to="$" style={{ textDecoration: "none" }}>
                            <div className="Forgot-pw">Forgot password?</div>
                          </Link>
                        </div>
                      </div>

                      <div className="mb-4 btn-login">
                        <div
                          type="button"
                          className="btn btn-lg text-light"
                          onClick={onLogin}
                        >
                          Login
                        </div>
                      </div>

                      <div className="mt-5">
                        <p>
                          Don't have an account?{" "}
                          <Link
                            to="/Register"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="Register">Register here</div>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
      <Footer />
    </div>
  );
}
