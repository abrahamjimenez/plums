"use client";

import { Button, Input } from "@material-tailwind/react";

const CreateTopicInput = () => {
  return (
    <>
      <Input
          name="topicName"
          label="Create Topic"
          color="black"
          variant="standard"
          crossOrigin={undefined}
          className="text-black! border-black!" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      />
      <Button placeholder={null} type="submit" onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
        Submit
      </Button>
    </>
  );
};

export default CreateTopicInput;
