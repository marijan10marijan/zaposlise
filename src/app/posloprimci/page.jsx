import React from "react";
import styles from "./posloprimci.module.css";
import KakoRadimo from "@/components/sharedComponents/KakoRadimo";
import Kontakt from "@/components/sharedComponents/Kontakt";
import PosloprimciBlog from "@/components/posloprimciComponents/PosloprimciBlog";
import PosloprimciMobilnaAplikacija from "@/components/posloprimciComponents/PosloprimciMobilnaAplikacija";
import PosloprimciPosao from "@/components/posloprimciComponents/PosloprimciPosao";
import PosloprimciScroll from "@/components/posloprimciComponents/PosloprimciScroll";

const PosloprimciPage = () => {
  return (
    <div className={styles.div}>
      <PosloprimciPosao />
      <PosloprimciScroll />
      <KakoRadimo />
      <PosloprimciMobilnaAplikacija />
      <PosloprimciBlog />
      <Kontakt />
    </div>
  );
};

export default PosloprimciPage;
