"use server";
import bcrypt from "bcrypt";
import dbconnect, { collectionNameObj } from "@/lib/db";

export const Registerusers = async (payload) => {
    const userCollection = await dbconnect(collectionNameObj.users)
       // Validation
    const { email, password } = payload;
    if (!email || !password) return { success: false };
    if (!email || !password) return null;

  
    const existingUser = await userCollection.findOne({ email: payload.email });
    if (!existingUser) {
          const hashedPassword = await bcrypt.hash(password, 10)
        payload.password = hashedPassword
        const result = await userCollection.insertOne(payload);
        const { acknowledged, insertedId } = result;
        return { acknowledged, insertedId };
          result.insertedId = result.insertedId.toString()
        return result;

    }
    return { success: false };
     return null;


}

