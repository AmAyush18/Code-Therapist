'use client'
import React, {FC, useState} from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Hero";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      <Heading 
        title="Code Therapist"
        description="Code Therapist is a platform for the students to learn and get help from best in the industry."
        keywords="Programming,MERN,Reading,Redux,Express,Fullstack"
      />
      <Header 
        open={open} 
        setOpen={setOpen} 
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
    </div>
  )
};

export default Page;