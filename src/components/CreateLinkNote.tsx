"use client";

import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";

const CreateLinkNote = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="flex flex-col gap-8 py-4">
      <Button onClick={handleOpen} variant="gradient" placeholder={undefined}
              onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Create Link Note
      </Button>
      <div hidden={!open} className={`${open && "flex flex-col gap-8 "}`}>
        <Input name="title" label="Title" crossOrigin={undefined} onPointerEnterCapture={undefined}
               onPointerLeaveCapture={undefined} />
        <Input name="url" label="Url" crossOrigin={undefined} onPointerEnterCapture={undefined}
               onPointerLeaveCapture={undefined} />
        <Button
            type="submit"
            color="green"
            placeholder={undefined}
            onClick={handleOpen} onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateLinkNote;
