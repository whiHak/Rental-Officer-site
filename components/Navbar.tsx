import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

export default function Navbar() {
  return (
    <header className="absolute w-full z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-between"
          />
        </Link>
          <nav className="md:flex-between hidden w-full max-w-xl">
          </nav>
            <Link href="/sign-in">
              <CustomButton
                title="Sing In"
                btnType="button"
                btnStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
              />
            </Link>
      </nav>
    </header>
  );
};
