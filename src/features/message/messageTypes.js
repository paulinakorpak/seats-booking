export const NO_SEATS_NUMBER = 'no_seats_number';
export const NO_SEATS_SELECTED = 'no_seats_selected';
export const ALL_SEATS_SELECTED = 'all_seats_selected';
export const SUGGESTION_NOT_POSSIBLE = 'suggestion_not_possible';

const messages = {
  [NO_SEATS_NUMBER]: {
    id: 'no_seats_number',
    type: 'danger',
    content: 'Podaj liczbę miejsc, które chcesz zarezerwować',
  },
  [NO_SEATS_SELECTED]: {
    id: 'no_seats_selected',
    type: 'danger',
    content: 'Nie wybrałeś żadnego miejsca',
  },
  [ALL_SEATS_SELECTED]: {
    id: 'all_seats_selected',
    type: 'warning',
    content: 'Wybrałeś już podaną liczbę miejsc',
  },
  [SUGGESTION_NOT_POSSIBLE]: {
    id: 'suggestion_not_possible',
    type: 'warning',
    content: 'Nie udało się znaleźć miejsc spełniających podane warunki',
  },
};

export default messages;
