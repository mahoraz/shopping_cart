import bcrypt from "bcrypt";

export const encryptPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = (plain: string, hashed: string): Promise<boolean> => {
  return bcrypt.compare(plain, hashed);
};