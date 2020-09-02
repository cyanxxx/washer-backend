import { Document } from "mongoose"
export interface IRecord extends Document {
    date: Date;
    roomId: string;
    userId: string;
}