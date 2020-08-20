<template>
  <div class="flex flex-col flex-auto h-full overflow-y-auto chat-roll">
    <ol class="flex flex-col self-end w-full pb-6 mt-auto">
      <!-- Fetched Messages -->
      <Message
        v-for="message in messages"
        :key="message.timetoken + user.id"
        :text="message.entry.text"
        :own="message.entry.uuid === user.id"
      />
      <!-- New Messages -->
      <Message
        v-for="newMessage in newMessages"
        :key="newMessage.timetoken + user.id"
        :text="newMessage.message.text"
        :own="newMessage.message.uuid === user.id"
      />
    </ol>
    <div id="anchor" class="inline-block w-full"></div>
  </div>
</template>

<script>
import Message from '@/components/Message'
export default {
  components: {
    Message,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    messages: {
      type: Array,
      default: () => [],
    },
    newMessages: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    newMessages() {
      this.$nextTick(this.scrollToBottom)
    },
  },
  methods: {
    scrollToBottom() {
      this.$el.scrollTo(0, this.$el.scrollHeight)
    },
  },
}
</script>

<style></style>
