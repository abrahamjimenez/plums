"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumbs } from "@material-tailwind/react";

const TopicsBreadcrumbs = () => {
  return (
    <div>
      <Breadcrumbs
        className="opacity-80 bg-custom-off-white text-custom-dark-gray"
        placeholder={null}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link href="/">Home</Link>
        <Link href="/topics/">Topics</Link>
      </Breadcrumbs>
    </div>
  );
};

export default TopicsBreadcrumbs;
