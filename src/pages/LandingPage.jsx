import { motion } from 'framer-motion';
import AuthForm from '../components/AuthForm';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Welcome to Thoughtly
      </motion.h1>
      <AuthForm />
    </div>
  );
}