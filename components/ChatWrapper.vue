<template>
  <div :class="classes">
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
    classes() {
      return `${
        this.activeUser === this.user.id ? 'hidden md:flex' : 'flex'
      } flex-col h-full overflow-auto bg-white rounded-lg border border-gray-200`
    },
  },
}
</script>

<style></style>
