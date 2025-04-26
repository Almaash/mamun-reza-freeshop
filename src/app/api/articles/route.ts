import { NextResponse } from "next/server";

export async function GET() {
    const dummyArticles = [
      {
        id: "1",
        image: "/dummy-profile.png",
        title: "Lorem ipsum dolor sit amet",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: "2",
        image: "/dummy-profile.png",
        title: "Lorem ipsum dolor sit amet",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: "3",
        image: "/dummy-profile.png",
        title: "Lorem ipsum dolor sit amet",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: "4",
        image: "/dummy-profile.png",
        title: "Lorem ipsum dolor sit amet",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        id: "5",
        image: "/dummy-profile.png",
        title: "Lorem ipsum dolor sit amet",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      ];
      

  return NextResponse.json(dummyArticles);
}
