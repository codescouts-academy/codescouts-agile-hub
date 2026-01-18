import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="font-mono font-bold tracking-tight md:text-[90px]"
    >
      <span className="text-foreground">&lt;Code</span>
      <span className="text-accent">Scouts</span>
      <span className="text-foreground">/&gt;</span>
    </motion.h1>
  );
};

export default Logo;
