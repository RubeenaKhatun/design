import React, { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import SignupForm from "../../components/SignupForm";

const Index = () => {
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
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-20 md:flex-row lg:flex-row">
            <div
              className="m-10 w-full max-w-md rounded-lg bg-white p-6 opacity-80 shadow-xl duration-500 hover:-translate-y-4 hover:scale-105"
              onClick={() => {
                sets("user");
              }}
            >
              <h2 className="my-6 text-center text-lg font-semibold">
                signup for user
              </h2>
            </div>
            <div
              className="m-10 w-full max-w-md rounded-lg bg-white p-6 opacity-80 shadow-xl duration-500 hover:-translate-y-4 hover:scale-105"
              onClick={() => {
                sets("designer");
              }}
            >
              <h2 className="my-6 text-center text-lg font-semibold">
                signup for designer
              </h2>
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
