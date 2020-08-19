<template>
  <input
    class="inline-flex px-4 py-2 text-base leading-6 text-gray-700 border-2 border-gray-400 rounded-full appearance-none focus:z-0 focus:outline-none focus:bg-white focus:border-blue-500 focus:shadow-outline"
    type="text"
    :placeholder="`Posting as ${userId}`"
    @keydown.enter="submit"
  />
</template>

<script>
export default {
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.$pnSubscribe({
      channels: ['journeychat'],
    })
  },
  methods: {
    submit(event) {
      event.preventDefault()
      this.$pnPublish(
        {
          channel: 'journeychat',
          message: {
            text: event.target.value,
            uuid: this.userId,
          },
        },
        // eslint-disable-next-line no-console
        (status, response) => console.log(status, response)
      )
      event.target.value = ''
    },
  },
}
</script>

<style></style>
