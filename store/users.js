export const state = () => ({
  users: [
    {
      name: 'Geoff',
      id: '1234',
    },
    {
      name: 'Nate',
      id: '5678',
    },
  ],
})

export const getters = {
  users: (state) => state.users,
}
