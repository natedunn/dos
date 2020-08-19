<template>
  <div class="flex flex-col overflow-hidden bg-white rounded-lg">
    <div class="px-4 py-4 bg-white border-b border-cool-gray-200">
      {{ user.name }}
    </div>
    <div class="flex-auto">
      <ol class="flex flex-col justify-end h-full pb-6">
        <Message
          v-for="message in messages"
          :key="message.timetoken"
          :text="message.entry.text"
          :own="message.entry.uuid === user.id"
        />
      </ol>
    </div>
    <div class="px-4 py-4 bg-cool-gray-300">
      <ChatInput class="w-full" :user-id="user.id" />
    </div>
  </div>
</template>

<script>
import Message from '~/components/Message'
import ChatInput from '~/components/ChatInput'
export default {
  components: {
    Message,
    ChatInput,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    messages() {
      return this.$store.getters['messages/messages']
    },
  },
}
</script>

<style></style>
