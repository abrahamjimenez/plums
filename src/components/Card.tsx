import Image from "next/image";

interface CardProps {
  image?: string;
}

export default function Card({ image }: CardProps) {
  return (
    <>
      <div className="mx-auto h-40 w-auto bg-gray-100">
        {image && <Image src={image} alt="" width={100} height={100} />}
      </div>
    </>
  );
}
