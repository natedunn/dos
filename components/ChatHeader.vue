<template>
  <div
    class="px-4 py-4 font-bold text-center bg-white border-b shadow-lg border-cool-gray-200"
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
