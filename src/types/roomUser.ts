import { Document } from "mongoose"
export interface IRoomUser extends Document {
    roomId: string;
    userId: string;
}