import React from "react";
import Link from "next/link";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { getImageNotes } from "@/lib/queries/imageNotes";

const ImageNotesData = async ({ topicId }: { topicId: string }) => {
  const imageNotes = await getImageNotes(topicId);
  return (
    <div>
      {imageNotes.map((imageNote) => (
        <div key={imageNote.id}>
          <Link href={`/topics/${topicId}/${imageNote.id}`}>
            <p className="flex gap-4 border px-4 py-4">
              <span>
                <PhotoIcon className="h-5 2-5" />
              </span>
              {imageNote.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageNotesData;
