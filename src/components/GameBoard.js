import Ship from './Ship';

const GameBoard = () => {
  // prettier-ignore
  let gameField = 
  ['', '', '', '', '', '', '', '', '', ''];

  let ships = [];

  const addShiptoArray = (name, length) => {
    ships.push(Ship(name, length));
    addShiptToGameField(ships);
  };

  const addShiptToGameField = (ships) => {
    ships.forEach((ship) => {
      let a = true;
      while (a) {
        let index = Math.floor(Math.random() * 10 + 1);
        if (!gameField[index]) {
          gameField[index] = { name: ship.name, position: 0, hit: 'no' };
          a = false;
        }
      }
    });
  };

  addShiptoArray('ship-1', 1);
  addShiptoArray('ship-1', 1);

  return {
    gameField,
    ships,
  };
};

module.exports = GameBoard;
