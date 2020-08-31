import { Document } from "mongoose"
export interface IRoom extends Document {
    name: string;
    id: string;
    members: string[]
}