import { NextResponse } from "next/server";
import { UserSchemaConstraints } from "@/schemas/user.schema";
import { createUser, getUsers } from "@/services/user.service";
import { ca } from "zod/v4/locales";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedUser = UserSchemaConstraints.safeParse(body);

    if (!parsedUser.success) {
      return NextResponse.json(
        { error: "Invalid user data", details: parsedUser.error },
        { status: 400 }
      );
    }

    const newUser = await createUser(parsedUser.data);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request", details: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const users = await getUsers();
    return NextResponse.json(users, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to retrieve users", details: error },
      { status: 500 }
    );
  }
}
