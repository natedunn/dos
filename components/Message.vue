<template>
  <li
    :class="`mt-3 ${
      self
        ? 'text-right message message-self'
        : 'text-left message message-other'
    }`"
  >
    <div
      :class="`inline-block py-3 px-5 rounded-lg break-words text-left ${
        self
          ? 'bg-journey-blue text-white ml-auto'
          : 'bg-gray-200 text-gray-900 mr-auto'
      }`"
    >
      {{ text }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    self: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
div {
  max-width: 60%;
}
</style>
