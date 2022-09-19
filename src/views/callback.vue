<template>
  <div class=" text-2xl p-4">
    <div>code: {{code}}</div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const code = route.qurey.code
</script>