import { Link } from "react-router-dom";

//typewriter effect
import Typewritter from "typewriter-effect";

//framer motion

import { motion } from "framer-motion";
import { HomeLinks } from "../components";

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
      className="align-elements w-full h-auto flex  flex-wrap justify-center items-center gap-20 my-24"
    >
      <div>
        <figure className="w-60 h-w-60 md:w-96 md:h-96  rounded-full overflow-hidden">
          <img
            src="./images/user.jpg "
            className="w-full image-full rounded-full"
          />
        </figure>
      </div>

      <div>
        <p className="text-6xl font-bold  font-mono text-center lg:text-left">
          <Typewritter
            options={{
              autoStart: true,
              loop: true,
              delay: 200,
              strings: ["Hello"],
            }}
          />
        </p>

        <p className="text-2xl font-bold font-mono my-3 text-center lg:text-left">
          A Bit About Me
        </p>

        <p className="w-full font-mono  lg:w-96 lg:text-left px-5 text-center lg:p-0">
          I'm a Marcuse and Frontend Developer (React Js). I have one year of
          experience in this field. You can contact me if you need help in this
          case...
        </p>

        <div className=" md:flex md:items-center md:justify-center gap-5 mt-10">
          <HomeLinks />
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
