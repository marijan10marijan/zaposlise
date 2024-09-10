import React from "react";
import styles from "./poslodavci.module.css";
import PoslodavciMain from "@/components/poslodavciComponents/PoslodavciMain";
import PoslodavciPomocVama from "@/components/poslodavciComponents/PoslodavciPomocVama";
import KakoRadimo from "@/components/sharedComponents/KakoRadimo";
import PoslodavciNasiKorisnici from "@/components/poslodavciComponents/PoslodavciNasiKorisnici";
import PoslodavciPrijave from "@/components/poslodavciComponents/PoslodavciPrijave";
import PoslodavciRezultati from "@/components/poslodavciComponents/PoslodavciRezultati";
import Kontakt from "@/components/sharedComponents/Kontakt";

const PoslodavciPage = () => {
  return (
    <div className={styles.poslodavci}>
      {/* <PoslodavciMain /> */}
      {/* <PoslodavciPomocVama /> */}
      <KakoRadimo />
      <PoslodavciNasiKorisnici />
      <PoslodavciPrijave />
      <PoslodavciRezultati />
      <Kontakt />
    </div>
  );
};

export default PoslodavciPage;
