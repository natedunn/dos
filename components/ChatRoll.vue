<template>
  <div class="flex flex-col flex-auto h-full overflow-y-scroll chat-roll">
    <ol class="flex flex-col self-end w-full px-6 pt-12 pb-6 mt-auto">
      <!-- Fetched Messages -->
      <message-group
        v-for="(group, index) in history"
        :key="`mg-${index}-${user.id}`"
        :self="group[0].entry.uuid === user.id"
      >
        <Message
          v-for="message in group"
          :key="message.timetoken + user.id"
          :text="message.entry.text"
          :self="message.entry.uuid === user.id"
        />
      </message-group>

      <!-- New Messages -->
      <div
        v-if="newMessages.length !== 0"
        class="flex flex-row items-center justify-between mt-10 select-none"
      >
        <div class="flex-auto border-b border-gray-200"></div>
        <div class="px-4 font-semibold text-gray-400">Welcome Back</div>
        <div class="flex-auto border-b border-gray-200"></div>
      </div>
      <message-group
        v-for="(group, index) in newMessages"
        :key="`mg-${index}-${user.id}`"
        :self="group[0].entry.uuid === user.id"
      >
        <Message
          v-for="message in group"
          :key="message.timetoken + user.id"
          :text="message.entry.text"
          :self="message.entry.uuid === user.id"
        />
      </message-group>
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
  },
  computed: {
    history() {
      return this.$store.getters['messages/history']
    },
    newMessages() {
      return this.$store.getters['messages/newMessages']
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
