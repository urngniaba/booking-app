import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";

export const createUser = async (data: any) => {
  const hashedPassword = await hashPassword(data.password);
  return await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
};

export const getUsers = async () => {
  return await prisma.user.findMany({ include: { role: true } });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

