"use server";
import bcrypt from "bcrypt"
import dbconnect, { collectionNameObj } from "@/lib/db";

export const LoginUsers = async (payload) => {
    const {email , password} = payload
    const userCollection = await dbconnect(collectionNameObj.users)
    const existingUser = await userCollection.findOne({ email });
    if (!existingUser) return null
    const isPasswordOK = bcrypt.compare(existingUser.password, password)
    if (!isPasswordOK) return null
    return existingUser


}
