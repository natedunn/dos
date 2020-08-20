<template>
  <li :class="wrapperClasses">
    <ol>
      <slot></slot>
    </ol>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    self: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    wrapperClasses() {
      return `max-w-md ${
        this.self ? 'ml-auto group-self' : 'mr-auto group-other'
      }`
    },
  },
}
</script>

<style lang="postcss">
.group-self ol li:first-child {
  @apply rounded-tr-none;
}
.group-other ol li:first-child {
  @apply rounded-tl-none;
}
</style>
