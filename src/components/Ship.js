const Ship = (name, length) => {
  const ship = Array.from('O'.repeat(length)); // O = not hit

  const hit = (position) => {
    ship[position] = 'X';
  };

  const isSunk = () => {
    if (ship.some((x) => x === 'O')) {
      return false;
    } else return true;
  };
  return {
    name,
    hit,
    isSunk,
    ship,
  };
};

module.exports = Ship;
