import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = (props) => {
  return (
    <div>
      <AnimatePresence>
        {props.items.length ? (
          props.items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                id={item.id}
                rating={item.rating}
                text={item.text}
                handleDelete={props.handleDelete}
              />
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>No Feedback Yet</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
