// import React from "react";
// import { HERO_CONTENT } from "../constants";
// import pic from "../assets/11.png";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const container = (delay) => ({
//     hidden: { x: -100, opacity: 0 },
//     whileInView: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
//   });
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//       <div className="flex flex-wrap ">
//         <div className="w-full lg:w-1/2">
//           <div className="flex flex-col justify-center items-center lg:items-start">
//             <motion.h1
//               variants={container(0)}
//               initial="hidden"
//               animate="whileInView"
//                className="pb-16 xxxs:pb-10 text-6xl flex font-semibold  tracking-tight lg:mt-16 lg:text-7xl lg:text-left md:text-left sm:text-center xxs:text-7xl xxxs:text-7xl md:text-7xl xxs:text-center xxxs:text-center"
//             >
//               Prateek Premanand
//             </motion.h1>
//             <motion.span
//               variants={container(0.5)}
//               initial="hidden"
//               animate="whileInView"
//               className="bg-gradient-to-r from-yellow-400 via-gray-600 to-stone-100 tracking-tight text-transparent bg-clip-text  flex lg:text-4xl lg:text-left md:text-left sm:text-center xxs:text-4xl xxxs:text-4xl md:text-4xl xxs:text-center xxxs:text-center "
//             >
//               Full Stack Developer
//             </motion.span>
//             <motion.p
//               variants={container(1)}
//               initial="hidden"
//               animate="whileInView"
//              className="my-2 max-w-xl py-6 font-light tracking-tight lg:text-start md:text-center sm:text-center xxs:text-center xxxs:text-center "
//             >
//               {HERO_CONTENT}
//             </motion.p>
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 lg:p-8">
//           <div className="flex justify-center items-center" style={{ marginTop: "-30px" }}>
//             <motion.img
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               className="rounded-2xl  p-4"
//               src={pic}
//               alt=""
//               srcset=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import { HERO_CONTENT } from "../constants";
import pic from "../assets/11.png";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 flex justify-center items-center">
      <div className="flex flex-wrap justify-center items-center max-w-screen-xl mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="whileInView"
              className="pb-16 xxxs:pb-10 text-6xl flex font-semibold tracking-tight lg:mt-16 lg:text-7xl text-center lg:text-left"
            >
              Prateek Premanand
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="whileInView"
              className="bg-gradient-to-r from-yellow-400 via-gray-600 to-stone-100 tracking-tight text-transparent bg-clip-text flex lg:text-4xl text-center lg:text-left"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="whileInView"
              className="my-2 max-w-xl py-6 font-light tracking-tight text-center lg:text-start"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center lg:justify-end" style={{ marginTop: "-30px" }}>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl p-4"
              src={pic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
