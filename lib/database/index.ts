import mongoose from "mongoose";

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is missing in environment variables');
  }

  try {
    cached.promise = cached.promise || mongoose.connect(process.env.MONGODB_URI, {
      dbName: "car_rental",
      bufferCommands: false,
    });

    cached.conn = await cached.promise;
    console.log('MongoDB Connected Successfully!');
    return cached.conn;
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    throw error;
  }
};
