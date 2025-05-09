import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn =  await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(process.env.MONGO_URI); // يتأكد إذا الرابط متاح

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // يوقف التشغيل لو فشل الاتصال
  }
};
