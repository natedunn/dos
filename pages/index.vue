<template>
  <div class="flex flex-col h-screen bg-cool-gray-200">
    <div
      class="flex items-center justify-center px-6 py-4 text-white bg-journey-red"
    >
      <div>
        <span class="font-bold">JourneyChat</span>
      </div>
    </div>
    <div
      class="flex flex-col flex-auto gap-4 px-4 py-4 md:grid md:grid-cols-2 chats-wrapper"
    >
      <ChatSwitcher />
      <ChatWrapper
        v-for="(user, index) in users"
        :key="user.id"
        :index="index"
        :user="user"
      />
    </div>
  </div>
</template>

<script>
import ChatSwitcher from '@/components/ChatSwitcher'
import ChatWrapper from '@/components/ChatWrapper'
export default {
  components: {
    ChatSwitcher,
    ChatWrapper,
  },
  data() {
    return {
      newMessages: this.$pnGetMessage('journeychat', this.addMessage),
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users']
    },
  },
  mounted() {
    this.$store.dispatch('messages/fetchMessages')
  },
  methods: {
    addMessage(message) {
      this.$store.dispatch('messages/addMessage', {
        entry: message.message,
        timetoken: message.timetoken,
      })
    },
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

<style>
.chats-wrapper {
  height: calc(100% - 56px);
}
</style>
