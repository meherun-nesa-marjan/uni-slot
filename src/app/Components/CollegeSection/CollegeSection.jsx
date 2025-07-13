
import dbconnect from "@/lib/db";
import CollegeClient from "./CollegeClient";

export default async function CollegeSection() {
  const collection = await dbconnect("allCollege");
  const data = await collection.find({}).toArray();

  return <CollegeClient colleges={JSON.parse(JSON.stringify(data))} />;
}
