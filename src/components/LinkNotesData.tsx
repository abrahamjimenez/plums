import React from "react";
import { getLinkNotes } from "@/lib/queries/linkNotes";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/solid";

const LinkNotesData = async ({ topicId }: { topicId: string }) => {
  const linkNotes = await getLinkNotes(topicId);
  return (
    <div>
      {linkNotes.map((linkNote) => (
        <div key={linkNote.id}>
          <Link href={`/topics/${topicId}/${linkNote.id}`}>
            <p className="flex gap-4 border px-4 py-4">
              <span>
                <LinkIcon className="h-5 2-5" />
              </span>
              {linkNote.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LinkNotesData;
