export const getLastSeatCoords = (seats) => seats.reduce(
  ([lastRow, lastCol], seat) => [
    seat.cords.y > lastRow ? seat.cords.y : lastRow,
    seat.cords.x > lastCol ? seat.cords.x : lastCol,
  ],
  [0, 0],
);

export const suggestSeats = (seatsNumber, adjacentSeats, lastRow, lastCol, seats) => {
  let suggestedSeats = [];

  for (let row = lastRow; row >= 0; row -= 1) {
    for (let col = 0; col <= lastCol; col += 1) {
      const firstSeat = seats.find((item) => item.cords.x === col && item.cords.y === row);

      if (firstSeat && !firstSeat.reserved) {
        suggestedSeats.push(firstSeat.id);

        if (adjacentSeats) {
          for (let next = col + 1; next < col + seatsNumber; next += 1) {
            const nextSeat = seats.find((item) => item.cords.x === next && item.cords.y === row);

            if (nextSeat && !nextSeat.reserved) {
              suggestedSeats.push(nextSeat.id);
            } else {
              col = next;
              suggestedSeats = [];
              break;
            }
          }
        }

        if (suggestedSeats.length === seatsNumber) {
          return suggestedSeats;
        }
      }
    }
  }

  return [];
};
