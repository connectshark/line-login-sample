<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLineStore } from '../stores/line'
import api from '../utils/api'
const store = useLineStore()

const route = useRoute()
const code = route.query.code
const state = route.query.state
const err = ref(false)

const router = useRouter()
api.auth(code)
  .then(res => {
    store.access_token = res.access_token
    router.replace('/')
  })
  .catch(() => {
    err.value = true
  })

</script>

<template>
  <div class=" text-2xl p-4">
    <section v-if="err">
      <p>讀取中</p>
      <router-link to="/login">回登入頁面</router-link>
    </section>
    <section v-else>
      <p>讀取中</p>
      <p><i class='bx bx-loader bx-spin' ></i></p>
    </section>
  </div>
</template>