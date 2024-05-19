import { sign, verify } from 'jsonwebtoken';
import { hash, compare } from 'bcrypt';

const createToken = (data: any) => {
  return sign(data, process.env.JWT_SECRET_KEY);
};

const verifyToken = (token: string) => {
  return verify(token, process.env.JWT_SECRET_KEY);
};

const hashPassword = async (password: string) => {
  return await hash(password, 10);
};

const comparePassword = async (password: string, hash: string) => {
  return await compare(password, hash);
};

export { createToken, verifyToken, hashPassword, comparePassword };
