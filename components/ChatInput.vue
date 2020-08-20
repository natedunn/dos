<template>
  <div class="px-4 py-4 bg-cool-gray-300">
    <input
      class="inline-flex w-full px-4 py-2 text-base leading-6 text-gray-700 border-2 border-gray-400 rounded-full appearance-none focus:z-0 focus:outline-none focus:bg-white focus:border-red-600 focus:shadow-outline-red"
      type="text"
      placeholder="Type a message"
      @keydown.enter="submit"
    />
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
            uuid: this.user.id,
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
