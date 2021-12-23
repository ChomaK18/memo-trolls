import { useCallback, useContext, useEffect, useState } from "react";
import { GameContext } from "../context/GameContext";

const Card = ({ photoId, id, faceUpCard }) => {
  const [isHidden, setIsHidden] = useState(true);
  const {
    score,
    setScore,
    faceUpCards,
    setFaceUpCards,
    pairValues,
    pair,
    setPair,
  } = useContext(GameContext);
  const srcImg = `/images/${photoId}.jpg`;
  const srcImgBack = `/images/back.jpg`;

  useEffect(() => {
    console.log("FaceUpCards: " + JSON.stringify(faceUpCards));
    faceUpCards.includes(photoId) || isInPair()
      ? setIsHidden(false)
      : setIsHidden(true);
  }, [faceUpCards, pair]);

  // useEffect(() => {
  //   //
  //   //
  //   // pair to jest array of arrays więc nie pobierze ID
  //   //
  //   //
  //   console.log("Odkryte ? Id: " + id + " : " + isInPair());
  //   isInPair() ? setIsHidden(false) : setIsHidden(true);
  // }, [pair]);

  const isInPair = () => {
    const currentCard = { id: id, photoId: photoId };
    // const isFirstCard = pair.length == 1 ? pair[0][0] == id : false;
    // const isSecondCard = pair.length == 2 ? pair[1][0] == id : false;
    const firstCard = pair.length >= 1 ? pair[0].id : "BRAK";
    const secondCard = pair.length == 2 ? pair[1].id : "BRAK";
    console.log("1st: " + firstCard + " ||| " + "2nd: " + secondCard);
    console.log("CurrentCard: " + pair.some((c) => c.id === id));
    // return isFirstCard || isSecondCard;
    return pair.some((c) => c.id === id);
  };

  // useEffect(() => {
  //   console.log("Pair: " + JSON.stringify(pair));
  //   console.log("FirstCard: " + pairValues.current.firstCard);
  //   pairValues.current.firstCard === id
  //     ? setIsHidden(false)
  //     : setIsHidden(true);
  // }, [pairValues.current.firstCard]);

  return (
    <div className="p-0 m-1 card">
      <img
        src={` ${isHidden ? srcImgBack : srcImg}`}
        alt={`Troll-${photoId}`}
        onClick={() => {
          (isHidden && pair.length!=2) ? faceUpCard([id, photoId]) : null;
        }}
      />
    </div>
  );
};

export default Card;
