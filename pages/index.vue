<template>
  <div class="flex flex-col h-screen bg-cool-gray-200">
    <div
      class="flex items-center justify-between px-4 py-4 text-white bg-cool-gray-900"
    >
      <div>
        <span class="font-bold">JourneyChat</span>
      </div>
      <div>Menu</div>
    </div>
    <div class="grid flex-auto grid-cols-1 gap-4 px-4 py-4 md:grid-cols-2">
      <chat-wrapper :user-id="1" />
      <chat-wrapper :user-id="2" />
    </div>
  </div>
</template>

<script>
import ChatWrapper from '~/components/ChatWrapper'
export default {
  components: {
    ChatWrapper,
  },
}
</script>

<style></style>
