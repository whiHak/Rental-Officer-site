import React from "react";
import Search from "./Search";
import CarCard from "./CarCard";

const UpdateCarsDetail = () => {
  return (
    <section className=" flex flex-col gap-4">
      <Search placeholder="Search cars..." />
      <CarCard/>
    </section>
  );
};

export default UpdateCarsDetail;
