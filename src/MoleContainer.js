import React, { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";
import soundFile from "./bash.mp3";

function MoleContainer(props) {
  let [displayMole, setDisplayMole] = useState(false);

  const bashAudio = new Audio(soundFile);

  const moleClicked = () => {
    props.setScore(props.score + 1);
    setDisplayMole(false);
    bashAudio.play();
  };
  return (
    <div style={{ display: "inline-block" }}>
      {displayMole ? (
        <Mole setDisplayMole={setDisplayMole} moleClicked={moleClicked} />
      ) : (
        <EmptySlot setDisplayMole={setDisplayMole} />
      )}
    </div>
  );
}

export default MoleContainer;
