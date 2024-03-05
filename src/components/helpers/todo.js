export const FILTER_OPTIONS = [
  {
    key: 'isDone',
    label: 'Выполнено',
    value: false,
  },
  {
    key: 'isFavorite',
    label: 'Избранное',
    value: false,
  },
];

export const todosMock = [
  {
    id: 5,
    title: 'Проверить почту',
    isDone: false,
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Сделать кофе',
    isDone: false,
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Почистить зубы',
    isDone: true,
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Искупаться',
    isDone: true,
    isFavorite: false,
  },
  {
    id: 1,
    title: 'Проснуться',
    isDone: true,
    isFavorite: false,
  },
];
