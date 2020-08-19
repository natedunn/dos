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
      const bothClasses = ' rounded-full max-w-lg py-4 px-5 mt-6 mx-6'
      const ownClasses =
        'bg-teal-300 text-gray-900 rounded-br-none ml-auto' + bothClasses
      const otherClasses =
        'bg-gray-200 text-gray-900 rounded-bl-none mr-auto' + bothClasses

      return this.own ? ownClasses : otherClasses
    },
  },
}
</script>

<style></style>
