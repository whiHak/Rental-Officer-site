import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Navbar() {
  const session = await getServerSession(options);

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

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={session?.user?.image as string}
              alt="User Avatar"
              width={50}
              height={50}
              className="object-cover"
              />
              </div>
            <div className="flex flex-col ">
              <Link href="/api/auth/signout?callbackUrl=/">
                <CustomButton
                  title="Sign Out"
                  btnType="button"
                  btnStyles="text-white rounded-full text-xs bg-red-500 py-1 px-3"
                />
              </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
