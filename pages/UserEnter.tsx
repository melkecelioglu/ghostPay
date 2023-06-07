import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ButtonPage from "./ButtonPage";
import logo from "/src/images/logo.png";

const UserEntryPage: React.FC = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [isLoginSubmitted, setIsLoginSubmitted] = useState(false);
  const [isSignupSubmitted, setIsSignupSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("login");

  const router = useRouter();

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoginSubmitted(true);
    router.push("/ghostPayDashboard");
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSignupSubmitted(true);
    router.push("/ghostPayDashboard");
  };

  const handleCreateAccountClick = () => {
    setActiveSection("signup");
  };

  const handleAlreadyHaveAccountClick = () => {
    setActiveSection("login");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-white rounded-lg p-8 shadow-md">
        <div className="flex items-center justify-center mb-4">
          <Image src={logo} width={200} height={100} alt="Logo" />
        </div>
        <div>
          <ButtonPage />
        </div>
        {activeSection === "login" ? (
          <div>
            <h3 className="text-lg font-bold mb-2">Login</h3>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label htmlFor="loginUsername">Username:</label>
                <input
                  type="text"
                  id="loginUsername"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="loginPassword">Password:</label>
                <input
                  type="password"
                  id="loginPassword"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
              >
                Login
              </button>
              <p
                className="text-blue-500 mt-2 cursor-pointer"
                onClick={handleCreateAccountClick}
              >
                Create an Account
              </p>
            </form>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-bold mb-2">Sign Up</h3>
            <form onSubmit={handleSignupSubmit}>
              <div className="mb-4">
                <label htmlFor="signupUsername">Username:</label>
                <input
                  type="text"
                  id="signupUsername"
                  value={signupUsername}
                  onChange={(e) => setSignupUsername(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupPassword">Password:</label>
                <input
                  type="password"
                  id="signupPassword"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
              >
                Sign Up
              </button>
              <p
                className="text-blue-500 mt-2 cursor-pointer"
                onClick={handleAlreadyHaveAccountClick}
              >
                I already have an account
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserEntryPage;
