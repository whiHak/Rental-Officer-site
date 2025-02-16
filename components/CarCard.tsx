import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";

const CarCard = () => {
  return (
    <div className="group relative flex min-h-[280px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <div
        style={{ backgroundImage: `url(/demo-car.webp)` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500  "
      >
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={``}>
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
          <Link href="">
            <DeleteConfirmation />
          </Link>
        </div>
      </div>
      <div className="flex min-h-[130px] flex-col gap-3 p-5 md:gap-4">
        <Link href={``}>
          <p className="p-medium-20 md:p-medium-20 line-clamp-2 flex-1 text-black">
            Toyota Corolla
          </p>
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">somthing</p>
          <Link href={``} className="flex gap-2 ">
            <p className="text-primary-blue">Car Details</p>
            <Image
              src="/assets/icons/arrow.svg"
              alt="arrow"
              width={10}
              height={10}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
