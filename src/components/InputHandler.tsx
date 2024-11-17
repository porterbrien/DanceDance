import React, { useEffect } from 'react';
import { Arrow } from './ArrowSpawner'

// adds points and removes the block from the game when in proximity with the boxes at the bottom

const InputHandler: React.FC<{ arrows: Arrow[]; setArrows: React.Dispatch<React.SetStateAction<Arrow[]>>; handleArrowHit: (type: string) => void }> = ({ arrows, setArrows, handleArrowHit }) => {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const keyToArrow: { [key: string]: string } = {
              ArrowUp: 'up',
              ArrowDown: 'down',
              ArrowLeft: 'left',
              ArrowRight: 'right',
            };
          
            if (keyToArrow[event.key]) {
              event.preventDefault(); 
              const arrowType = keyToArrow[event.key];
          
              const matchingArrow = arrows.find(
                (arrow) => arrow.type === arrowType && arrow.position >= 70 && arrow.position <= 90
              );
          
              if (matchingArrow) {
                handleArrowHit(arrowType);
                setArrows((prevArrows) =>
                  prevArrows.filter((arrow) => arrow.id !== matchingArrow.id)
                );
              }
            }
          };
  
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }, [arrows, handleArrowHit, setArrows]);
  
    return null;
  };

export default InputHandler;
