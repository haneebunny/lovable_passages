import { MongoClient, OptionalId } from "mongodb";

export async function POST(req: OptionalId<Document>, res) {
  console.log(req, res);
  // 애플리케이션과 데이터베이스 연결
  const client = await MongoClient.connect(
    "mongodb+srv://lovable:lovable1231@cluster-hani.g5wiwm0.mongodb.net/?retryWrites=true&w=majority"
  );

  const database = client.db("lovablePassages");

  const userCollection = database.collection("user");

  console.log(userCollection);
  const result = await userCollection.insertOne(req.body);

  console.log(result);
  client.close();

  // ??
  res.status(201).json({ message: "Meetup Inserted!" });
}
