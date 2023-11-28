import User from "@/server/models/user";
import db from '@/server/lib'

export default async function handler(req, res) {
  await db;

  if (req.method === 'GET') {
    const users = await User.find({});

    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    const newUser = new User({ name, email });

    try {
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}