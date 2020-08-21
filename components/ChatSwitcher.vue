<template>
  <div class="grid grid-cols-2 text-center md:hidden chat-switcher">
    <button
      v-for="user in users"
      :key="user.id"
      :class="`appearance-none inline-block leading-6 px-2 py-2 border-b-2 ${
        activeUser === user.id
          ? 'bg-blue-100 text-journey-blue border-journey-blue'
          : 'cursor-pointer border-cool-gray-300 bg-gray-100 hover:text-gray-900 text-gray-500 hover:border-journey-blue hover:bg-blue-100'
      }`"
      @click="activeUser !== user.id ? changeActiveUser(user.id) : null"
    >
      {{ activeUser === user.id ? 'Sending as' : 'Switch to' }}
      <span class="font-semibold">{{ user.name }}</span>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters['users/users']
    },
    activeUser() {
      return this.$store.getters['users/activeUser']
    },
  },
  methods: {
    changeActiveUser(id) {
      this.$store.dispatch('users/updateActiveUser', id)
    },
  },
}
</script>

<style lang="postcss" scoped></style>
