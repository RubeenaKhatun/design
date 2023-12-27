import React, { useState, useEffect } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import LoginForm from "../../components/LoginForm";

const Index = () => {
  return (
    <>
      <img
        src="/background.png"
        className="absolute z-0 h-screen w-screen"
        alt=""
      />
      <LoginForm />
    </>
  );
};

export default Index;
