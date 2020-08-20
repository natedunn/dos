<template>
  <div class="px-4 py-4 font-bold bg-white border-b border-cool-gray-200">
    {{ user.name }}
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
