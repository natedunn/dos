<template>
  <li :class="`group ${self ? ' group-self' : ' group-other'}`">
    <div
      v-if="!self"
      class="flex items-center justify-center w-8 h-8 mr-auto overflow-hidden rounded-full select-none bg-cool-gray-400"
    >
      <img src="~/assets/svg/user.svg" />
    </div>

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
