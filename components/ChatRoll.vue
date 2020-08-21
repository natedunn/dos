<template>
  <div class="flex flex-auto h-full overflow-y-auto scrolling-touch chat-roll">
    <transition-group
      name="list"
      tag="ol"
      class="flex flex-col self-end w-full px-6 pt-12 pb-8 mt-auto h-100"
    >
      <!-- Previous History -->
      <MessageGroup
        v-for="(group, index) in history"
        :key="`mg-his-${index}`"
        :messages="group"
        :user="user"
        :self="group[0].entry.uuid === user.id"
      />

      <!-- Welcome Back Message -->
      <div
        v-if="newMessages.length !== 0"
        :key="`wb-${user.id}`"
        class="flex flex-row items-center justify-between mt-10 select-none"
      >
        <div class="flex-auto border-b border-gray-200"></div>
        <div class="px-4 font-semibold text-gray-400">Welcome Back</div>
        <div class="flex-auto border-b border-gray-200"></div>
      </div>

      <!-- New Messages -->
      <MessageGroup
        v-for="(group, index) in newMessages"
        :key="`mg-nm-${index}`"
        :messages="group"
        :user="user"
        :self="group[0].entry.uuid === user.id"
      />
    </transition-group>
  </div>
</template>

<script>
import MessageGroup from '@/components/MessageGroup'
export default {
  components: {
    MessageGroup,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    history() {
      return this.$store.getters['messages/history']
    },
    newMessages() {
      return this.$store.getters['messages/newMessages']
    },
  },
  watch: {
    newMessages() {
      this.$nextTick(this.scrollToBottom)
    },
  },
  methods: {
    scrollToBottom() {
      this.$el.scrollTo(0, this.$el.scrollHeight)
    },
  },
}
</script>

<style lang="postcss"></style>
