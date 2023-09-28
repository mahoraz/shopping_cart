
import { PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import prisma from '../config/prisma';

interface IRegisterUser {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    address: string;
    telephone: string;
}


class UserService {
    private repository: PrismaClient;
    constructor(){this.repository = prisma}

    async register(userInfo: IRegisterUser): Promise<User> {
        
        // validate data
        const existingUser = await this.prisma.user.findUnique({where: {username: userInfo.username}});
        
        if(existingUser){
            throw new Error("Username already taken");
        }
        
        // hash password
        const pwdHash = await bcrypt.hash(userInfo.password,10);

        const newUser = await this.repository.user.create({
            data: {
                ...userInfo,
                password: pwdHash,
            }
        });

        return newUser;
    }

}

export default UserService;