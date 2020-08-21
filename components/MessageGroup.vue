<template>
  <li :class="`group ${self ? ' group-self' : ' group-other'}`">
    <ol>
      <slot></slot>
    </ol>
  </li>
</template>

<script>
export default {
  props: {
    self: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
.group-self ol li:first-child div {
  @apply rounded-tr-none;
}
.group-other ol li:first-child div {
  @apply rounded-tl-none;
}
</style>
