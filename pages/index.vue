<template>
  <div class="flex flex-col bg-cool-gray-300 main-wrapper">
    <div
      class="flex items-center justify-center px-6 py-4 text-white bg-red-600"
    >
      <div>
        <span class="font-bold">Welcome to Dos</span>
      </div>
    </div>
    <div
      class="flex flex-col flex-auto md:gap-4 md:px-4 md:py-4 md:grid md:grid-cols-2 chats-wrapper"
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
      newMessages: this.$pnGetMessage('doschat', this.addMessage),
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
}
</script>

<style>
.main-wrapper {
  height: 100vh;
}
@supports (-webkit-touch-callout: none) {
  .main-wrapper {
    height: -webkit-fill-available;
  }
}
.chats-wrapper {
  height: calc(100% - 56px);
}
</style>
