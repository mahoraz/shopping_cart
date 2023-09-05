import { PrismaClient } from "@prisma/client";
import { omit } from 'lodash';


const prisma = new PrismaClient();
afterAll(async (done)=> {
    await prisma.$disconnect();
    done();
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
});