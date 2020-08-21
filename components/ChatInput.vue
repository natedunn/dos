<template>
  <div
    class="flex items-center px-4 py-4 bg-gray-100 border-t border-gray-200 focus-within:bg-blue-50"
  >
    <textarea
      v-model="text"
      class="inline-flex w-full px-4 py-2 mr-4 text-base leading-6 text-gray-700 placeholder-gray-500 bg-transparent border-b-2 border-gray-300 appearance-none resize-none focus:outline-none focus:border-journey-blue"
      type="text"
      placeholder="Type a message"
      rows="1"
      @keydown.enter="submit"
    />
    <button
      :class="`flex items-start px-2 py-2 rounded-lg  ${
        text
          ? 'opacity-75 bg-journey-blue text-white focus:opacity-100 focus:shadow-outline-blue hover:opacity-100'
          : 'bg-cool-gray-300 text-cool-gray-400 cursor-not-allowed'
      }`"
      @click="submit"
    >
      <SendIcon />
    </button>
  </div>
</template>

<script>
import SendIcon from '@/components/icons/SendIcon'
export default {
  components: {
    SendIcon,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      text: '',
    }
  },
  mounted() {
    this.$pnSubscribe({
      channels: ['journeychat'],
    })
  },
  methods: {
    submit(event) {
      if (this.text) {
        event.preventDefault()
        this.$pnPublish(
          {
            channel: 'journeychat',
            message: {
              text: this.text,
              uuid: this.user.id,
            },
          },
          // eslint-disable-next-line no-console
          (status, response) => console.log(status, response)
        )
        this.text = ''
      }
    },
  },
}
</script>

<style></style>
