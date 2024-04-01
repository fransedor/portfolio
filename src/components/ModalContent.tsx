import { CONTENTS } from "../json/content";
import { motion, AnimatePresence } from "framer-motion";

const ModalContent = ({ type, index }: { type: "projects" | "experience"; index: number }) => {
  const { company, description, points, title, url, images } = CONTENTS[type][index];
  return (
    <AnimatePresence>
      <div className="flex sm:flex-row flex-col-reverse gap-4">
        <div className="flex flex-col sm:w-1/2 gap-6">
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key={`${title}-${company}`}
          >
            <h3 className="text-5xl font-bold ">{title}</h3>
            <p>{company}</p>
          </motion.div>
          <motion.p
            className="font-sans text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key={`${description}`}
          >
            {description}
          </motion.p>
          <ul>
            {points.map((point, idx) => (
              <motion.li
                className="pl-4 list-inside font-sans list-disc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                key={`${point}-${idx}`}
              >
                {point}
              </motion.li>
            ))}
          </ul>
          {url && <motion.a key={url} className="font-sans italic underline" target="_blank" referrerPolicy="no-referrer" href={url}>{url}</motion.a>}
        </div>
        <div className="flex flex-col sm:w-1/2">
          {images?.map((imageUrl) => (
            <motion.img
              src={imageUrl}
              key={imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              alt=""
              className="max-h-[400px] object-contain"
            />
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ModalContent;
