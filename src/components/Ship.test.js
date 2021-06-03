const Ship = require('./Ship');

it('check if a new ship is not sunk', () => {
  const ship = Ship('ship-1', 2);
  expect(ship.isSunk()).toEqual(false);
});

it('check if a single ship is not sunk', () => {
  const ship = Ship('ship-1', 1);
  expect(ship.isSunk()).toEqual(false);
});

it('check if a ship is sunk', () => {
  const ship = Ship('ship-1', 1);
  ship.hit(0);
  expect(ship.isSunk()).toEqual(true);
});
