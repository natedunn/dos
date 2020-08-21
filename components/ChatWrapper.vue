<template>
  <div
    :class="`${
      activeUser === user.id ? 'hidden md:' : ''
    }flex flex-col h-full overflow-auto bg-white rounded-lg`"
  >
    <ChatHeader :user="user" />
    <ChatRoll :user="user" />
    <ChatInput class="w-full" :user="user" />
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
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    activeUser() {
      return this.$store.getters['users/activeUser']
    },
  },
}
</script>

<style></style>
