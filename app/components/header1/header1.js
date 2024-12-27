"use client";
import { useEffect, useState } from "react";
import "./header1.css";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import HouseboatOutlinedIcon from "@mui/icons-material/HouseboatOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import Header1Item from "./header1Item/header1Item";
export default function header1() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollY1, setScrollY1] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setScrollY1(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header1">
      <div className="div-grid-header1">
        <div className={`${scrollY > 390 ? "transfrom-item" : ""} op-0`}>
          <Header1Item
            title="Best Cake"
            desc=".Simply dummy text of the print has been standard"
          >
            <CakeOutlinedIcon className="icon-header-1" />
          </Header1Item>
          <Header1Item
            title="cake Design"
            desc=".Simply dummy text of the print has been standard"
          >
            <HouseboatOutlinedIcon className="icon-header-1" />
          </Header1Item>
        </div>
        <div
          className={`${
            scrollY > 390 ? "transfrom-item1" : ""
          } align-self-center op-0`}
        >
          <Header1Item
            title="Dessert"
            desc=".Simply dummy text of the print has been standard"
          >
            <BeachAccessOutlinedIcon className="icon-header-1" />
          </Header1Item>
        </div>
      </div>
    </div>
  );
}
