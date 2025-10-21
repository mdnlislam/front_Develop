import Card from "@/component/product/card";

export const url = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Info", href: "/info" },
];

export default function Info() {
  return (
    <div>
      <Card url={url} />
    </div>
  );
}
