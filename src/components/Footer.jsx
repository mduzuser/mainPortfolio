//icons
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

//framer motion
import { motion } from "framer-motion";
function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
      className="align-elements w-full p-5"
    >
      <hr className="border-t-2" />
      <div className="my-10 w-full flex justify-between flex-wrap">
        <div className="mb-3 w-60  ">
          <p className="font-bold mb-2 font-mono">Phone</p>
          <p className="font-mono">(+998)90 405-23-11</p>
        </div>
        <div className="mb-3  w-60  ">
          <p className="font-bold mb-2 font-mono">Email</p>
          <p className="font-mono">mrmarcusedev@gmail.com</p>
        </div>
        <div className="mb-3 w-60  ">
          <p className="font-bold mb-2">Follow me</p>
          <div className="flex gap-3">
            <a href="">
              <FaInstagram className="w-5 h-5" />
            </a>

            <a href="">
              <FaTelegramPlane className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mb-3 w-60 ">
          <p className="font-bold mb-2 font-mono">© 2024 By Marcuse Dev</p>
          <p className="underline underline-offset-3 cursor-pointer font-mono">
            All rights reserved
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
