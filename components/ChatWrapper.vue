<template>
  <div class="flex flex-col h-full overflow-auto bg-white rounded-lg">
    <ChatHeader :user="user" />
    <ChatRoll :user="user" :messages="messages" :new-messages="newMessages" />
    <ChatInput class="w-full" :user-id="user.id" />
  </div>
</template>

<script>
import ChatRoll from '@/components/ChatRoll'
import ChatInput from '@/components/ChatInput'
export default {
  components: {
    ChatRoll,
    ChatInput,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newMessages: this.$pnGetMessage('journeychat'),
    }
  },
  computed: {
    messages() {
      return this.$store.getters['messages/messages']
    },
  },
}
</script>

<style></style>
