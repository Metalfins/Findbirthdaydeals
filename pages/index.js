import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find Birthday Deals</title>
      </Head>
      <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center text-pink-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Find the best birthday deals, discounts, and treats all in one place!
        </motion.h1>
        <p className="mt-4 text-center text-gray-700">Currently available in Singapore 🇸🇬</p>
      </main>
    </>
  );
}
