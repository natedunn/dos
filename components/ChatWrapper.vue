<template>
  <div class="flex flex-col overflow-hidden bg-white rounded-lg">
    <div class="px-4 py-4 bg-white border-b border-cool-gray-200">
      Chat Header: {{ userId }}
    </div>
    <div class="flex-auto">
      <ol class="flex flex-col justify-end h-full">
        <Message />
      </ol>
    </div>
    <div class="px-4 py-4 bg-cool-gray-300">
      <ChatInput class="w-full" />
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
    userId: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style></style>
