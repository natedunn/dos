<template>
  <div
    class="font-bold text-center bg-white border rounded-lg border-cool-gray-200 md:hidden chat-switcher"
  >
    <ul class="grid grid-cols-2">
      <li
        v-for="user in users"
        :key="user.id"
        :class="`${
          activeUser === user.id
            ? 'bg-blue-50 border-b-2 border-journey-blue'
            : 'cursor-pointer hover:bg-blue-50'
        }`"
        @click="activeUser !== user.id ? changeActiveUser(user.id) : null"
      >
        {{ user.name }}
      </li>
    </ul>
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
li {
  @apply px-4 py-4;
  &:not(:last-of-type) {
    border-right-width: theme('borderWidth.default');
    border-right-color: theme('borderColor.cool-gray.200');
  }
}
</style>
