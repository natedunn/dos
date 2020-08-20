<template>
  <div class="flex flex-col h-screen bg-cool-gray-200">
    <!-- <div
      class="flex items-center justify-between px-6 py-4 text-white bg-cool-gray-900"
    >
      <div>
        <span class="font-bold">JourneyChat</span>
      </div>
      <div>Menu</div>
    </div> -->
      <chat-wrapper v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import ChatWrapper from '~/components/ChatWrapper'
export default {
  components: {
    ChatWrapper,
  },
  data() {
    return {}
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    },
  },
  mounted() {
    this.$store.dispatch('messages/fetchMessages')
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap',
        },
      ],
    }
  },
}
</script>

<style></style>
