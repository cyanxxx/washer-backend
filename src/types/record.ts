import { Document } from "mongoose"
export interface IRecord extends Document {
    roomId: string;
    userId: string;
}