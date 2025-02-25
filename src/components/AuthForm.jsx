import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from "./ui/Button";
import Input from "./ui/Input";


export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
      <motion.h2 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-center mb-4"
      >
        {isLogin ? 'Login' : 'Sign Up'}
      </motion.h2>
      <form className="space-y-4">
        {!isLogin && (
          <Input type="text" placeholder="Username" required className="w-full" />
        )}
        <Input type="email" placeholder="Email" required className="w-full" />
        <Input type="password" placeholder="Password" required className="w-full" />
        <Button className="w-full">{isLogin ? 'Login' : 'Sign Up'}</Button>
      </form>
      <div className="text-center mt-4">
        <button 
          className="text-blue-600 hover:underline"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
}
