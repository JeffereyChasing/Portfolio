import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Carousel } from 'antd';
import { Collapse } from 'antd';
import {StarsCanvas} from "../components";


const recursion = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>1</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>1</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>1</p>,
  },
];

const notes = () => {
  return (
    <div className="">
      <motion.div
        style={{
          scale: 1,
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
          1
      <Collapse items={recursion} defaultActiveKey={['1']}  />;
      <StarsCanvas />

      </motion.div>
    </div>
  );
};

export default notes;
