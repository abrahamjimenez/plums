import React from "react";
import { getNotes } from "@/lib/queries/textNotes";
import Link from "next/link";
import { DocumentTextIcon } from "@heroicons/react/24/solid";

const TextNotesData = async ({ topicId }: { topicId: string }) => {
  const textNotes = await getNotes(topicId);
  return (
    <div>
      {textNotes.map((textNote) => (
        <div key={textNote.id}>
          <Link href={`/topics/${topicId}/${textNote.id}`}>
            <p className="flex gap-4 border px-4 py-4">
              <span>
                <DocumentTextIcon className="h-5 2-5" />
              </span>
              {textNote.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TextNotesData;
