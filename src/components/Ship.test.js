const Ship = require('./Ship');

test('check if a new ship is not sunk', () => {
  const ship = Ship(2);
  expect(ship.isSunk()).toEqual(false);
});

test('check if a single ship is not sunk', () => {
  const ship = Ship(1);
  expect(ship.isSunk()).toEqual(false);
});

test('check if a ship is sunk', () => {
  const ship = Ship(1);
  ship.hit(0);
  expect(ship.isSunk()).toEqual(true);
});
