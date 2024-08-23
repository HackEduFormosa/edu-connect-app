// controllers/dashboardController.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/';
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

export const getDashboardData = async (req, res) => {
  try {
    await client.connect();
    const db = client.db('formosaemprende_db');
    const usersCollection = db.collection('usersgenerate');

    // Total de emprendedores
    const totalEntrepreneurs = await usersCollection.countDocuments();

    // Datos de emprendedores por mes
    const monthlyData = await usersCollection.aggregate([
      {
        $group: {
          _id: { $month: { $dateFromString: { dateString: "$fechaNacimiento" } } },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]).toArray();

    // Datos de emprendedores por grupo etáreo
    const ageGroupData = await usersCollection.aggregate([
      {
        $project: {
          age: {
            $subtract: [
              { $year: new Date() },
              { $year: { $dateFromString: { dateString: "$fechaNacimiento" } } }
            ]
          }
        }
      },
      {
        $bucket: {
          groupBy: "$age",
          boundaries: [0, 20, 30, 40, 50, 60, 100],
          default: "Unknown",
          output: {
            count: { $sum: 1 }
          }
        }
      }
    ]).toArray();

    res.json({
      totalEntrepreneurs,
      monthlyData: monthlyData.map(item => ({ month: item._id, count: item.count })),
      ageGroupData: ageGroupData.map(item => ({ ageGroup: item._id, count: item.count }))
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).send('Error fetching dashboard data');
  }
};
