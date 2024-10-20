//framer motion
import { motion } from "framer-motion";
function Projects() {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", delay: 1.5 }}
    >
      <h1>hello</h1>
    </motion.div>
  );
}

export default Projects;
