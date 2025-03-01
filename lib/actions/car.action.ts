"use server"
import { CreateCarParams } from "@/types";
import { connectToDatabase } from "../database";
import Car from "../database/models/car.model";
import { UpdateCarparams } from "@/types";
import { revalidatePath } from "next/cache";

export const createCar = async ({ car }: CreateCarParams) => {
  try {
    await connectToDatabase();
    const newCar = await Car.create({ ...car });
    revalidatePath("/");
    return JSON.parse(JSON.stringify(newCar));
  } catch (error) {
    console.log(error);
  }
};

export const getAllCars = async () => {
  try {
    await connectToDatabase();
    const cars = await Car.find();
    return JSON.parse(JSON.stringify(cars));
  } catch (error) {
    console.log(error)
  }
};

export const getCarById = async (id: string) => {
  try {
    await connectToDatabase();
    const car = await Car.findById(id);
    return JSON.parse(JSON.stringify(car));
  } catch (error) {
    console.log(error);
  }
};

export const updateCar = async ({ id, car }: UpdateCarparams) => {
  try {
    await connectToDatabase();
    const updatedCar = await Car.findByIdAndUpdate(
      id,
      { ...car },
      { new: true }
    );
    revalidatePath("/");
    return JSON.parse(JSON.stringify(updatedCar));
  } catch (error) {}
};

export const deleteCar = async (id: string) =>{
    try {
        await connectToDatabase();
        await Car.findByIdAndDelete(id);
        revalidatePath("/");
    } catch (error) {
        console.log(error);
    }
}
