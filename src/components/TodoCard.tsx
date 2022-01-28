import React from "react";
import { textInputText } from "../constants";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useQueryClient } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Props {
  label: string;
  description: string;
  id : number,
  style?: React.CSSProperties;
  onClick?: () => void;
}


export default function TodoCard({
  label,
  description,
  id,
  style,
  ...props
}: Props) {

  const navigator = useNavigate()


  const x = useMotionValue(-310);
  const colorRange: Array<string> = ["#F2F2F2", "#0BDA51"];
  const inputRange: Array<number> = [-310, 0];
  const backgroundColor = useTransform(x, inputRange, colorRange);

  const controls = useAnimation();

  const shrink = useAnimation();

  const queryClient = useQueryClient();
  

  const snap = () => {
    try {
      const x_value: number = x.get();
      if (x_value <= -155) { 
        controls.start({ x: -310, transition: { duration: 0.2 } });
      } else {
        controls
          .start({ x: 0, transition: { duration: 0.5 } })
          .then(() =>
            shrink.start({
              height: 0,
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            })
          )
          .then(() =>
            axios
              .delete(`${process.env.REACT_APP_URL}todo/${id}`)
              .then((res) => console.log(res))
              .then(() => queryClient.invalidateQueries("todos"))
              .catch((err) => console.log(err))
          );
        
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  

  return (
    <>
      {/* I want a overlay */}
      <motion.div
        animate={shrink}
        className="z-10 m-2 flex relative rounded-lg shadow-sm ease-in-out duration-200  hover:shadow-lg  px-8 py-3 overflow-hidden cursor-pointer flex-shrink-0"
        style={{ maxWidth: 350, width: "100%", ...style }}
        {...props}
      >
        <motion.div
          animate={controls}
          style={{ backgroundColor, x }}
          drag="x"
          dragConstraints={{ left: -320, right: 0 }}
          dragElastic={0}
          dragDirectionLock={true}
          onDragEnd={() => snap()}
          className="absolute left-0 top-0 bottom-0 right-0 flex rounded-lg justify-end items-center"
        >
          <Menu />
        </motion.div>

        <div
          className="flex justify-center items-center pl-4"
          onClick={() =>
            navigator("/Edit", {
              state: { title: label, body: description, id },
            })
          }
        >
          <div>
            <h1 style={{ fontSize: 15, fontWeight: "700" }}>
              {label.substring(0, 25)}
            </h1>
            <p
              style={{ fontSize: 12, fontWeight: "400", color: textInputText }}
            >
              {description.substring(0, 40)}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

const Menu = () => (
  <svg
    width="30"
    height="45"
    viewBox="0 0 100 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="65" r="5" fill="#C4C4C4" />
    <circle cx="60" cy="85" r="5" fill="#C4C4C4" />
    <circle cx="40" cy="85" r="5" fill="#C4C4C4" />
    <circle cx="40" cy="105" r="5" fill="#C4C4C4" />
    <circle cx="40" cy="125" r="5" fill="#C4C4C4" />
    <circle cx="60" cy="105" r="5" fill="#C4C4C4" />
    <circle cx="60" cy="125" r="5" fill="#C4C4C4" />
    <circle cx="40" cy="45" r="5" fill="#C4C4C4" />
    <circle cx="60" cy="45" r="5" fill="#C4C4C4" />
    <circle cx="40" cy="25" r="5" fill="#C4C4C4" />
    <circle cx="40" cy="65" r="5" fill="#C4C4C4" />
    <circle cx="60" cy="25" r="5" fill="#C4C4C4" />
  </svg>
);
