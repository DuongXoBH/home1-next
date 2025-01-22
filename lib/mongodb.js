import { MongoClient } from 'mongodb';

// Kết nối MongoDB sử dụng URI trong .env
const client = new MongoClient(process.env.MONGO_URI);

export async function connectToDatabase() {
  if (!client.isConnected()) {
    await client.connect();
  }
  const db = client.db('home1-user'); // Chọn cơ sở dữ liệu
  return { db, client };
}
