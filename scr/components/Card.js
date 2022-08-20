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
    faceUpCards.includes(photoId) || isInPair()
      ? setIsHidden(false)
      : setIsHidden(true);
  }, [faceUpCards, pair]);

  const isInPair = () => {
    const currentCard = { id: id, photoId: photoId };
    const firstCard = pair.length >= 1 ? pair[0].id : "BRAK";
    const secondCard = pair.length == 2 ? pair[1].id : "BRAK";
    return pair.some((c) => c.id === id);
  };

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
