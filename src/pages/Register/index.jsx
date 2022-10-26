import { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import Navbar from "../../component/molecules/Navbar";
import Footer from "../../component/molecules/Footer/Index";
import LoadingSvg from "../../component/atoms/Loading";
import { Logo } from "../../component/atoms/Logo";
import Button from "../../component/atoms/Buttons";
import PageContainer from "../../component/PageContainer";

const insertRegister = gql`
  mutation MyMutation($object: login_insert_input!) {
    insert_login_one(object: $object) {
      id
    }
  }
`;

export function Register() {
  const baseError = {
    email: "",
  };

  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [erorMasage, setErorMassage] = useState(baseError);
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.com+)*$/;
  const [insert, { loading }] = useMutation(insertRegister);

  const onChangeFirstName = (e) => {
    let value = e.target.value;
    setfirstName(value);
  };

  const onChangeLastName = (e) => {
    let value = e.target.value;
    setLastName(value);
  };

  const onChangeEmail = (e) => {
    let value = e.target.value;
    setEmail(value);
  };

  const onChangePassword = (e) => {
    let value = e.target.value;
    setPassword(value);
  };

  const onChangeConfirmPassword = (e) => {
    let value = e.target.value;
    setConfirmPassword(value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    insert({
      variables: {
        object: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
      },
    });
  };

  if (loading) {
    <LoadingSvg />;
  }

  return (
    <div>
      <section style={{ background: "#1F0443", width: "100%", height: "100%" }}>
        <Navbar />
        <PageContainer>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col ">
              <div
                style={{ backgroundColor: "#361561", borderRadius: " 20px " }}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/NFT-art.jpg?alt=media&token=1d0f4ac4-c277-421a-9819-7a672b830c26"
                      className="img-fluid"
                      alt="image"
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

                        <div className="row">
                          <div className="form-outline mb-4 col">
                            <label className="form-label" for="form2Example17">
                              First Name
                            </label>
                            <input
                              type="text"
                              id="form2Example17"
                              className="form-control form-control-lg form"
                              value={firstName}
                              onChange={onChangeFirstName}
                            />
                          </div>
                          <div className="col">
                            <label className="form-label" for="form2Example17">
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="form2Example17"
                              className="form-control form-control-lg form"
                              value={lastName}
                              onChange={onChangeLastName}
                            />
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example27">
                            Email
                          </label>
                          <input
                            type="email"
                            id="form2Example27"
                            className="form-control form-control-lg form"
                            value={email}
                            onChange={onChangeEmail}
                            required
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
                          />
                        </div>

                        <div className="form-outline mb-5">
                          <label className="form-label" for="form2Example27">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg form"
                            value={ConfirmPassword}
                            onChange={onChangeConfirmPassword}
                          />
                        </div>

                        <div className="mt-4 btn-login">
                          <Button
                            className="btn btn-lg text-light"
                            onClick={onRegister}
                            children="Register"
                          />
                        </div>

                        <div className="mt-5">
                          <p>
                            Already Registered?{" "}
                            <Link
                              to="/Login"
                              style={{ textDecoration: "none" }}
                            >
                              <a className="">Login Now</a>
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
      </section>
    </div>
  );
}
