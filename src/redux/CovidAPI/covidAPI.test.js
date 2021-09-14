import reducer, { addCountry } from './covidAPI';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      countries: [],
      totalConfirmed: 0,
    },
  );
});

test('should handle the countries data being added to the store', () => {
  const previousState = {
    countries: [],
    totalConfirmed: 0,
  };

  const newState = reducer(previousState, addCountry({
    name: 'South Africa',
    id: 'southafrica',
    total_confirmed: 100,
  }));

  expect(newState).toEqual(
    {
      countries: [
        {
          name: 'South Africa',
          id: 'southafrica',
          total_confirmed: 100,
        },
      ],
      totalConfirmed: 0,
    },
  );
});
