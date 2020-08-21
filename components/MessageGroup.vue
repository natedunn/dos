<template>
  <li :class="`group mt-6 ${self ? ' group-self' : ' group-other'}`">
    <div
      v-if="!self"
      class="flex items-center justify-center w-6 h-6 mr-auto overflow-hidden rounded-full select-none md:w-8 md:h-8 bg-cool-gray-400"
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
img {
  width: 18px;
}
@screen md {
  img {
    width: 23px;
  }
}
.group-self ol li:first-child div {
  @apply rounded-tr-none;
}
.group-other ol li:first-child div {
  @apply rounded-tl-none;
}
</style>
