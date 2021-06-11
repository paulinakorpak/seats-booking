const getLastSeatCoords = (seats) => seats.reduce(
  ([lastRow, lastCol], seat) => [
    seat.cords.y > lastRow ? seat.cords.y : lastRow,
    seat.cords.x > lastCol ? seat.cords.x : lastCol,
  ],
  [0, 0],
);

export default getLastSeatCoords;
