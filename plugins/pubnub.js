import Vue from 'vue'
import PubNubVue from 'pubnub-vue'

export default function ({ env }) {
  Vue.use(PubNubVue, {
    subscribeKey: env.subscribeKey,
    publishKey: env.publishKey,
  })
}
