import { NextResponse } from "next/server";

export async function GET() {
    const dummyArticles = [
      {
        id: "1",
        image: "india",
        title: "Maharashtra",
        description: "Pune",
      },
      {
        id: "2",
        image: "india",
        title: "Gujarat",
        description: "Ahmedabad",
      },
      {
        id: "3",
        image: "india",
        title: "Karnataka",
        description: "Bangalore",
      },
      {
        id: "4",
        image: "india",
        title: "Tamil Nadu",
        description: "Chennai",
      },
      {
        id: "5",
        image: "india",
        title: "Uttar Pradesh",
        description: "Lucknow",
      },
      {
        id: "6",
        image: "india",
        title: "West Bengal",
        description: "Kolkata",
      },
      {
        id: "7",
        image: "india",
        title: "Rajasthan",
        description: "Jaipur",
      },
      ];
      

  return NextResponse.json(dummyArticles);
}
