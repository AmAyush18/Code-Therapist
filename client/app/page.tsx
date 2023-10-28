'use client'
import React, {FC, useState} from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading 
        title="Code Therapist"
        description="Code Therapist is a platform for the students to learn and get help from best in the industry."
        keywords="Programming,MERN,Reading,Redux,Express,Fullstack"
      />
    </div>
  )
};

export default Page;