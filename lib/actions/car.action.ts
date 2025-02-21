import { CreateCarParams } from "@/types";
import { connectToDatabase } from "../database";
import Car from "../database/models/car.model";
import { revalidatePath } from "next/cache";


export const createCar = async({car}: CreateCarParams) => {
    try {
        await connectToDatabase();
        const newCar = await Car.create({...car})
        revalidatePath("/")
        return JSON.parse(JSON.stringify(newCar));
    } catch (error) {
        console.log(error)
    }
} 

export const getAllCars = async() => {
    try {
        await connectToDatabase();
        const cars = await Car.find();
        return JSON.parse(JSON.stringify(cars));
    } catch (error) {
        
    }
}