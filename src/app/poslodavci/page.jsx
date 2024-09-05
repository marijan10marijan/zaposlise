import React from "react";
import styles from "./poslodavci.module.css";
import PoslodavciMain from "@/components/poslodavciComponents/PoslodavciMain";
import Navbar from "@/components/sharedComponents/Navbar";
import PoslodavciPomocVama from "@/components/poslodavciComponents/PoslodavciPomocVama";
import KakoRadimo from "@/components/sharedComponents/KakoRadimo";
import PoslodavciNasiKorisnici from "@/components/poslodavciComponents/PoslodavciNasiKorisnici";
import PoslodavciPrijave from "@/components/poslodavciComponents/PoslodavciPrijave";
import PoslodavciRezultati from "@/components/poslodavciComponents/PoslodavciRezultati";
import Kontakt from "@/components/sharedComponents/Kontakt";
import Footer from "@/components/sharedComponents/Footer";

const PoslodavciPage = () => {
  return (
    <div className={styles.poslodavci}>
      <Navbar />
      <PoslodavciMain />
      <PoslodavciPomocVama />
      <KakoRadimo />
      <PoslodavciNasiKorisnici />
      <PoslodavciPrijave />
      <PoslodavciRezultati />
      <Kontakt />
      <Footer />
      {/* GOTOVO ******************************************************/}
    </div>
  );
};

export default PoslodavciPage;
