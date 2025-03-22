import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        className="mx-4 mt-4 flex justify-center rounded-sm border text-4xl bg-custom-deep-plum text-custom-off-white"
        href="/topics/"
      >
        View all notes
      </Link>
    </div>
  );
}
