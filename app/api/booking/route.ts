import { NextResponse } from "next/server";
import { getBooks, deleteBooking } from "@/lib/actions/book.action";
 
export async function GET() {
  try {
    const bookings = await getBooks();
    
    if (!bookings) {
      return NextResponse.json(
        { message: "No bookings found or database error" },
        { status: 404 }
      );
    }

    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    console.error("Booking GET Error:", error);
    return NextResponse.json(
      { message: "Failed to fetch bookings", error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Booking ID is required" },
        { status: 400 }
      );
    }

    const deletedBooking = await deleteBooking(id);
    return NextResponse.json(deletedBooking, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete booking" },
      { status: 500 }
    );
  }
}
