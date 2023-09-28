import { PrismaClient } from "@prisma/client";
import { omit } from 'lodash';


const prisma = new PrismaClient();
afterAll(async ()=> {
    await prisma.$disconnect();
});

describe("User",()=> {
    it("should create a user",async ()=>{
        const user = {
            username: "test_user",
            password: "12323454645",
            first_name: "Test",
            last_name: "User",
            address: "Posti 12",
            telephone: "123456789"
        };
        const result = await prisma.user.create({
            data: user
        });

        expect(result.username).toMatch(omit(["id","createdAt", "updatedAt"],user));
    });

    it("should return an existing user",async ()=>{
        const user = {
            username: "test_user",
            password: "12323454645",
            first_name: "Test",
            last_name: "User",
            address: "Posti 12",
            telephone: "123456789"
        };
        
        const createdUser = await prisma.user.create({
            data: user
        });

        const existingUser = await prisma.user.findUnique({where: {username: user.username}});

        expect(existingUser).toEqual(createdUser);
    });
});