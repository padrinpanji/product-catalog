"use client";

import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "../styles/gallery.module.scss";

interface Props {
  medias: string[];
}

const GalleryComponent: FC<Props> = ({ medias }) => {
  return (
    <div className={style["product__gallery"]}>
      <Swiper
        className={style["media-wrapper"]}
        navigation={false}
        autoplay={false}
        loop={true}
        effect={"flip"}
        pagination={{
          enabled: true,
          type: "bullets",
        }}
      >
        {medias.map((image) => (
          <SwiperSlide key={image}>
            <Image src={image} alt="Vercel Logo" width={100} height={24} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryComponent;
