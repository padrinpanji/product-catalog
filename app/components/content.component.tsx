"use client";

import { FC, useState } from "react";
import style from "../styles/content.module.scss";

interface Props {
  title: string;
  price: number;
  description: string;
}

const ContentComponent: FC<Props> = ({ title, description, price }) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const generatePrice = (price: number) => {
    const options = {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    };

    const prefix = "Rp";
    const formattedPrice = price.toLocaleString("id-ID", options);

    return `${prefix} ${formattedPrice}`;
  };

  return (
    <div className={style["content"]}>
      <div className={style["title"]}>
        <h4>{title}</h4>
        <span>{generatePrice(price)}</span>
      </div>
      <p className={isExpand ? style["expanded"] : ""}>{description}</p>

      <button onClick={(): void => setIsExpand(!isExpand)}>
        {isExpand ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ContentComponent;
