<template>
  <li :class="classes">
    {{ text }}
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    own: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    classes() {
      const bothClasses = 'rounded-full max-w-lg py-3 px-4 mt-3 mx-6'
      const ownClasses = `bg-journey-red text-white font-medium rounded-tr-none ml-auto ${bothClasses} own-message`
      const otherClasses = `bg-gray-200 text-gray-900 font-medium mr-auto rounded-tl-none ${bothClasses} other-message`

      return this.own ? ownClasses : otherClasses
    },
  },
}
</script>

<style lang="postcss">
.own-message + .own-message,
.other-message + .other-message {
  @apply rounded-full;
}
</style>
