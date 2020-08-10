import { Document } from "mongoose"
export interface IUser extends Document {
    aliasName: string;
    openId: string;
    color: string;
    rooms: string[];
}