"use client";

import Link from "next/link";
import Image from "next/image";

function Nav() {
  return (
    <nav className="flex-between w-full mb-16 pt-6 mx-auto sm:px-16 px-6">
      <Link href={"/pages/Profile"} className="flex gap-2 flex-center">
        <Image
          src={"/src/images/logo.png"}
          width={40}
          height={40}
          alt="ghostpay logo"
          className="object-contain"
        />
        <h2 className="logo_text blue_gradient">ghostPay</h2>
      </Link>
    </nav>
  );
}

export default Nav;
