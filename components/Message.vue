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
          ? 'bg-blue-600 text-white ml-auto'
          : 'bg-gray-200 text-gray-900 mr-auto'
      }`"
    >
      <span
        v-for="(text, index) in texts"
        :key="'msg-' + info.timetoken + index"
        class="inline-block w-full"
      >
        {{ text }}
      </span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    self: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    texts() {
      return this.info.entry.text.split('\n')
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
