<template>
  <div
    class="px-4 py-3 text-sm font-semibold text-center bg-white border-b shadow-lg md:text-base md:py-4 border-cool-gray-200"
  >
    Conversation with {{ user.name }}
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
