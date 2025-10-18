"use client";
import { useDesign } from "../context/user";
import Count from "@/component/calculation/count";
export default function User() {
  const { product, design } = useDesign();

  return (
    <div>
      <h2>{product.id}</h2>
      <h2>{product.name}</h2>
      <h2>{product.model}</h2>
      <div>{design}</div>
      <div>{design}</div>
      <div>{design}</div>
      <div>{design}</div>

      <div>
        <Count />
      </div>
      <div>
        <Count />
      </div>
      <div>
        <Count />
      </div>
    </div>
  );
}
