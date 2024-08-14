"use client";

import { FC, useState } from "react";
import style from "../styles/variant.module.scss";

interface Props {
  variants: string[];
}

const VariantComponent: FC<Props> = ({ variants }) => {
  const [selectedVariant, setSelectedVariant] = useState<string>("");

  return (
    <div className={style["variant"]}>
      {variants.map((variant) => (
        <span
          className={`${style["variant__items"]} ${
            selectedVariant === variant ? style["active"] : ""
          }`}
          onClick={(): void => setSelectedVariant(variant)}
        >
          {variant}
        </span>
      ))}
    </div>
  );
};

export default VariantComponent;
