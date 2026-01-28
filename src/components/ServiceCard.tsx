import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard = ({
  title,
  description,
  url,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group block min-h-[25rem] h-[25rem] w-72"
    >
      <div className="relative overflow-hidden rounded-xl border border-accent/30 bg-card/50 backdrop-blur-md p-8 transition-all duration-300 hover:border-accent hover:bg-card/70 hover:shadow-service h-full flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="mb-6 inline-flex items-center justify-center rounded-lg bg-accent/10 p-3 transition-colors duration-300 group-hover:bg-accent/20">
            <Icon className="h-8 w-8 text-accent" />
          </div>

          <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
            <span>Acceder</span>
            <svg
              className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ServiceCard;
