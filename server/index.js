import express from  "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js";
import MessageRoutes from "./routes/MessageRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Welcome to my chat app!');
//   });

app.use("/api/auth", AuthRoutes);
app.use("/api/messages", MessageRoutes);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});

global.onlineUser = new Map();