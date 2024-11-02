import React from "react";
import { motion } from "framer-motion";


import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";





const Contact = () => {
 



  
  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
  

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
    
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
