import { motion } from 'framer-motion';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  isTextArea?: boolean;
}

function InputField({ label, type, placeholder, isTextArea }: InputFieldProps) {
  const Component = isTextArea ? 'textarea' : 'input';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <label className="block text-gray-700 mb-2 font-medium">{label}</label>
      <Component 
        type={type}
        className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent
          transition-colors duration-300 bg-gray-50 hover:bg-white
          ${isTextArea ? 'h-32 resize-none' : ''}`}
        placeholder={placeholder}
      />
    </motion.div>
  );
}

export function ContactForm() {
  return (
    <form className="bg-white p-6 rounded-xl shadow-lg" onSubmit={(e) => e.preventDefault()}>
      <InputField 
        label="Name"
        type="text"
        placeholder="Your Name"
      />
      
      <InputField 
        label="Email"
        type="email"
        placeholder="Your Email"
      />
      
      <InputField 
        label="Message"
        type="text"
        placeholder="Your Message"
        isTextArea
      />
      
      <motion.button 
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-accent text-white px-6 py-3 rounded-lg font-semibold
          transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg
          focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50"
      >
        Send Message
      </motion.button>
    </form>
  );
}