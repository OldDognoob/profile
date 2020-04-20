/* eslint-disable no-unused-vars */
import React from "react";
import CarouselCss from "./carousel.css";
import storm from "./sides/desert-storm-1024-768-3070.jpg";
import Eagle from "./sides/images (2).jpg";
import Mustang from "./sides/images (18).jpg";
import Weapon from "./sides/download (13).jpg";
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
    src: Eagle,
    altText: "images(2)",
    caption: "",
    header: ""
  },
  {
    src: Mustang,
    altText: "images(18)",
    caption: "",
    header: ""
  },
  {
    src: Weapon,
    altText: "download(13)",
    caption: "",
    header: ""
  },
  {
    src: Hornet,
    altText: "fa-18-super-hornet-1024-768-4552",
    caption: "",
    header: ""
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
