import Ship from './Ship';

const GameBoard = () => {
  // prettier-ignore
  let gameField = 
  ['', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '', '', ''];

  let ships = [];

  const addShiptoArray = (name, length) => {
    ships.push(Ship(name, length));
    addShiptToGameField(ships);
  };

  const addShiptToGameField = (ships) => {
    let index = Math.floor(Math.random() * 100 + 1);
    gameField[index] = { name: ships[0].name, position: 0, hit: 'no' };
  };

  addShiptoArray('ship-1', 1);

  return {
    gameField,
    ships,
  };
};

module.exports = GameBoard;
