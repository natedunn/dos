<template>
  <li
    :class="`mt-3 ${
      self
        ? 'text-right message message-self'
        : 'text-left message message-other'
    }`"
  >
    <div
      :class="`inline-block py-2 px-3 md:py-3 md:px-4 rounded-lg text-left text-sm md:text-base ${
        self
          ? 'bg-journey-blue text-white ml-auto'
          : 'bg-gray-200 text-gray-900 mr-auto'
      }`"
    >
      <span
        v-for="(renderedText, index) in renderedTexts"
        :key="timetoken + user.id + index"
        class="inline-block w-full"
      >
        {{ renderedText }}
      </span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    timetoken: {
      type: [String, Number],
      required: true,
    },
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
  computed: {
    renderedTexts() {
      return this.text.split('\n')
    },
  },
}
</script>

<style lang="postcss" scoped>
div {
  max-width: 60%;
  overflow-wrap: break-word;
  word-wrap: break-word;
}
</style>
