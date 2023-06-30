import Link from "next/link";
import Image from "next/image";

const getRandomPics = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
    cache: "no-store",
  });
  return res.json();
};

export default async function Home() {
  const randomPics = await getRandomPics();

  return (
    <>
      <div className="link-container">
        <Link href="/new" className="link">
          Click to route to /new
        </Link>
        <Link href="/newer" className="link">
          Click to route to /newer
        </Link>
      </div>
      {randomPics.map((pic: any, index: number) => {
        if (index < 10) {
          return (
            <li key={pic.id}>
              <p>{pic.title}</p>
              <Image src={pic.url} alt="random pic" width={200} height={200} />
            </li>
          );
        }
      })}
    </>
  );
}
