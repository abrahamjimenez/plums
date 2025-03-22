import { getTopics } from "@/lib/queries/topics";
import Link from "next/link";

interface Topic {
  id: string;
  name: string;
}

const TopicsData = async () => {
  const topics = await getTopics();
  return (
    <div>
      {topics.map((topic: Topic) => (
        <div key={topic.id} className="flex flex-col gap-4 border px-4 py-4">
          <Link href={`/topics/${topic.id}`}>
            <p>{topic.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopicsData;
