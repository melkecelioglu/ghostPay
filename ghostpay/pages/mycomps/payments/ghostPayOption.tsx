"use client";

import React from "react";
import UserEnter from "../../UserEnter";

const OpeningPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Website!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Connect your wallet to enjoy our services and make payments with
        ghostPay.
      </p>
      <UserEnter />
    </div>
  );
};

export default OpeningPage;
