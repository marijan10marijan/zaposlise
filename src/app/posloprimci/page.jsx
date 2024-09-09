import React from "react";
import styles from "./posloprimci.module.css";
import KakoRadimo from "@/components/sharedComponents/KakoRadimo";
import Kontakt from "@/components/sharedComponents/Kontakt";
import Navbar from "@/components/sharedComponents/Navbar";
import Footer from "@/components/sharedComponents/Footer";
import PosloprimciBlog from "@/components/posloprimciComponents/PosloprimciBlog";
import PosloprimciMobilnaAplikacija from "@/components/posloprimciComponents/PosloprimciMobilnaAplikacija";
import PosloprimciSlider from "@/components/posloprimciComponents/PosloprimciSlider";
import PosloprimciPosao from "@/components/posloprimciComponents/PosloprimciPosao";

const PosloprimciPage = () => {
  return (
    <div className={styles.div}>
      <Navbar />
      <PosloprimciPosao />
      {/* GOTOVO ******************************************************/}
      <PosloprimciSlider />
      {/* GOTOVO ******************************************************/}
      <KakoRadimo />
      {/* GOTOVO ******************************************************/}
      <PosloprimciMobilnaAplikacija />
      {/* GOTOVO ******************************************************/}
      <PosloprimciBlog />
      {/* GOTOVO ******************************************************/}
      <Kontakt />
      {/* GOTOVO ******************************************************/}
      <Footer />
      {/* GOTOVO ******************************************************/}
    </div>
  );
};

export default PosloprimciPage;
