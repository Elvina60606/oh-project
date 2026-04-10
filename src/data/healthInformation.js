import images from "@/assets/images/images.js";
import { Bike, Flu, Yoga } from "./HealthInfoComponent";

export const healthInformation = [
  {
    key: "HP_bike",
    image: images.bike,
    Component: Bike,
  },
  {
    key: "influenza",
    image: images.influenza,
    Component: Flu,
  },
  {
    key: "yoga",
    image: images.yoga,
    Component: Yoga,
  },
];
