<template>
  <div class="flex flex-col flex-auto h-full overflow-y-auto chat-roll">
    <ol class="flex flex-col self-end w-full pb-6 mt-auto">
      <div
        class="px-6 py-8 mx-6 mb-16 text-2xl font-bold text-center border-b-2 text-cool-gray-400 border-cool-gray-300"
      >
        Welcome to <br />JourneyChat
      </div>
      <!-- Fetched Messages -->
      <message-group
        v-for="(group, index) in messages"
        :key="`mg-${index}-${user.id}`"
        :self="group[0].entry.uuid === user.id"
        :user="user"
      >
        <Message
          v-for="message in group"
          :key="message.timetoken + user.id"
          :text="message.entry.text"
          :self="message.entry.uuid === user.id"
        />
      </message-group>
      <!-- <Message
        v-for="message in messages"
        :key="message.timetoken + user.id"
        :text="message.entry.text"
        :own="message.entry.uuid === user.id"
      /> -->
      <!-- New Messages -->
      <Message
        v-for="newMessage in newMessages"
        :key="newMessage.timetoken + user.id"
        :text="newMessage.message.text"
        :own="newMessage.message.uuid === user.id"
      />
    </ol>
  </div>
</template>

<script>
import MessageGroup from '@/components/MessageGroup'
import Message from '@/components/Message'
export default {
  components: {
    MessageGroup,
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
