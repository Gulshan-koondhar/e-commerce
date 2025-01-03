import { StaticImageData } from "next/image";

export interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string | StaticImageData;
  rating: {
    rate: number;
    count: number;
  };
}
