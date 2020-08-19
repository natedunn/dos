import Vue from 'vue'
import PubNubVue from 'pubnub-vue'

Vue.use(PubNubVue, {
  subscribeKey: process.env.SUBSCRIBE_KEY,
  publishKey: process.env.PUBLISH_KEY,
})
