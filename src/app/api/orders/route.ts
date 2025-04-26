import { NextResponse } from "next/server";

export async function GET() {
    const dummyArticles = [
        {
          id: "1",
          image: "/eb.jpg",
          productId: "0987654",
          orderId: "6543212345",
          userName: "Lorem ipsum",
          location: "Pune",
          price: "$350",
        },
        {
          id: "2",
          image: "/eb.jpg",
          productId: "1234567",
          orderId: "9876543210",
          userName: "Jane Doe",
          location: "Mumbai",
          price: "$200",
        },
        {
          id: "3",
          image: "/eb.jpg",
          productId: "7654321",
          orderId: "1122334455",
          userName: "John Smith",
          location: "Bangalore",
          price: "$450",
        },
        {
          id: "4",
          image: "/eb.jpg",
          productId: "8765432",
          orderId: "9988776655",
          userName: "Alice Wonderland",
          location: "Chennai",
          price: "$320",
        },
        {
          id: "5",
          image: "/eb.jpg",
          productId: "2345678",
          orderId: "5566778899",
          userName: "Bob Marley",
          location: "Delhi",
          price: "$275",
        },
      ];
      

  return NextResponse.json(dummyArticles);
}
