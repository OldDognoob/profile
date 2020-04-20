/* eslint-disable no-unused-vars */
import React from "react";
import CarouselCss from "./carousel.css";
import storm from "./sides/desert-storm-1024-768-3070.jpg";
import BlackOps from "./sides/Strike.jpg";
import Hornet from "./sides/fa-18-super-hornet-1024-768-4552.jpg";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: storm,
    altText: "desert-storm-1024-768-3070",
    caption: "",
    header: ""
  },
  {
    src: Hornet,
    altText: "fa-18-super-hornet-1024-768-4552",
    caption: "",
    header: ""
  },
  {
    src: BlackOps,
    altText: "Strike",
    caption: "",
    header: ""
  },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
