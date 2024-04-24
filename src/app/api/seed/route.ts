import prisma from "@/app/lib/Prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const todo = await prisma.todo.create({
    data: {
      description: "Seed is a Next.js API route that allows you to seed your database with data.",
      completed: true,
    },
  });

  console.log({ todo });

  return NextResponse.json({ message: "Seed executed" });
}