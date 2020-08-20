<template>
  <div class="grid grid-cols-2 text-center md:hidden chat-switcher">
    <button
      v-for="user in users"
      :key="user.id"
      :class="`${
        activeUser === user.id
          ? 'bg-blue-100 border-journey-blue'
          : 'cursor-pointer border-cool-gray-300 bg-white hover:border-cool-gray-400 hover:bg-blue-100'
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

<style lang="postcss" scoped>
button {
  @apply inline-block leading-6 px-2 py-3 border-2;
  &:first-of-type {
    @apply rounded-l-lg;
  }
  &:last-of-type {
    @apply rounded-r-lg;
  }
  &:not(:last-of-type) {
    @apply mr-2;
  }
}
</style>
