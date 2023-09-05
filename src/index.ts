import Http from 'http';
import App from './App';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    
    const PORT = 3000;
    const httpServer = Http.createServer(App);

    httpServer.listen(PORT, ()=> {
        console.log(`Server started on http://${PORT}`);
    });
}


main().then(async ()=> {
    await prisma.$connect();
}).catch(async (e: Error)=> {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
});