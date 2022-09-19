<template>
  <div class=" text-2xl p-4">
    <div>username: {{payload.UserInfo.username}}</div>
    <div>id: {{payload.UserInfo.userId}}</div>
    <div>email: {{payload.UserInfo.email}}</div>
  </div>
</template>

<script setup>
import { useJwt } from '@vueuse/integrations/useJwt'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const token = route.query.access_token
const encodedJwt = ref(token)
const { payload } = useJwt(encodedJwt)
</script>