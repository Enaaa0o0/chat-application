import getPrismaInstance from "../utils/PrismaClient.js"

export const addMessage = async (req, res, next) => {
    try{
        const prisma = getPrismaInstance();
        const {message, from, to} = req.body;
        const getUser = onlineUser.get(to);
        
        if(message && from && to){
            console.log(req.body);
            console.log("Hello");
            console.log(prisma.messages);
            const newMessage = await prisma.messages.create({
                data:{
                    message,
                    sender: {connect: {id:parseInt(from)}},
                    receiver: {connect:{id:parseInt(to)}},
                    messageStatus: getUser ? "delivered" : "sent",
                },
                include: {sender :true, receiver :true},
            });

             console.log(newMessage);
            return res.status(201).send({message: newMessage});
        }
        // return res.status(400).send("From, To and Message is required.");
    }catch(err){
        console.log("============================================");
        console.log(err);
        next(err);
    }
};