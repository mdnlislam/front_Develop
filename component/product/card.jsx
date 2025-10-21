import Link from "next/link";
export default function Card({ url }) {
  return (
    <div className="text-red">
      <h3>Bismillah</h3>

      {url.map((item, index) => (
        <div key={index}>
          <div className="border-2 w-250 text-center text-xl">
            <Link href={item.href} className="text-blue-500 underline">
              {item.label}
            </Link>
            <h2></h2>
          </div>
        </div>
      ))}
    </div>
  );
}
