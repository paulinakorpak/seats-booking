const fetchSeats = () => fetch(`${process.env.REACT_APP_BOOKING_API_URL}/seats`)
  .then((response) => response.json());

export default fetchSeats;
