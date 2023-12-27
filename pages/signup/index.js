import React, { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import SignupForm from "../../components/SignupForm";

const Index = () => {
  const [isUserHovered, setIsUserHovered] = useState(false);
  const [isDesignerHovered, setIsDesignerHovered] = useState(false);
  const [s, sets] = useState("type");
  const handleSalesContact = () => {
    // Handle action when contacting sales
    console.log("Contact sales");
    // Add your logic to contact sales here
  };

  const handleFreeTrial = () => {
    // Handle action for getting a free trial
    console.log("Get free trial");
    // Add your logic for starting a free trial here
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <>
      <img
        src="/background.png"
        className="absolute z-0 h-screen w-screen"
        alt=""
      />
      {/* {s == "type" && (
        <div className="relative z-10 flex h-screen flex-col lg:flex-row">
          <div className="top-0 h-[50%] w-full bg-gray-400 opacity-10 duration-1000 lg:h-full lg:w-[50%] lg:opacity-10 lg:hover:opacity-20">
            <center>
              <div className="p-20">
                <h1 className="z-20 text-2xl text-white">Signup for users</h1>
                <button
                  className="m-10 bg-white px-10 py-3"
                  onClick={() => {
                    sets("user");
                  }}
                >
                  Signup
                </button>
              </div>
            </center>
          </div>
          <div className="top-0 h-[50%] w-full bg-gray-200 opacity-10 duration-1000 lg:h-full lg:w-[50%] lg:opacity-10 lg:hover:opacity-20">
            <center>
              <div className="p-20">
                <h1 className="z-20 text-2xl ">Signup for designers</h1>
                <button
                  className="m-10 bg-white px-10 py-3"
                  onClick={() => {
                    sets("designer");
                  }}
                >
                  Signup
                </button>
              </div>
            </center>
          </div>
        </div>
      )} */}
      {s == "type" && (
        <>
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-evenly p-20 lg:flex-row">
            <div
              className="relative"
              onClick={() => {
                sets("user");
              }}
              onMouseEnter={() => setIsUserHovered(true)}
              onMouseLeave={() => setIsUserHovered(false)}
            >
              <div className="w-full max-w-full rounded-2xl border border-gray-200/10 bg-white/10 p-8 shadow-2xl backdrop-blur-lg duration-1000 hover:scale-150 hover:border-white/100 sm:w-[400px]">
                <h1 className="text-center text-xl font-bold text-white">
                  SignUp for User
                </h1>
                <h1 className=" py-5 text-center text-sm text-white">
                  get ur customized products home delivered
                </h1>
                {isUserHovered && (
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      backgroundImage: "url('/1.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* <h1 className="p-5 text-lg font-semibold text-white">
                      get ur customized products home delivered
                    </h1> */}
                  </div>
                )}
              </div>
            </div>
            <div
              className="relative"
              onClick={() => {
                sets("designer");
              }}
              onMouseEnter={() => setIsDesignerHovered(true)}
              onMouseLeave={() => setIsDesignerHovered(false)}
            >
              <div className="w-full max-w-full rounded-2xl border border-gray-200/10 bg-white/10 p-8 shadow-2xl backdrop-blur-lg duration-1000 hover:scale-150 hover:border-white/100 sm:w-[400px]">
                <h1 className="text-center text-xl font-bold text-white">
                  SignUp for Designer
                </h1>
                <h1 className="py-5 text-center text-sm text-white">
                  Work with us as a designer
                </h1>
                {isDesignerHovered && (
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      backgroundImage: "url('/3.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {" "}
                    {/* <h1 className="p-5 text-lg font-semibold text-white">
                      Work with us as a designer
                    </h1> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {s == "user" && <SignupForm />}
      {s == "designer" && <SignupForm />}
    </>
  );
};

export default Index;
