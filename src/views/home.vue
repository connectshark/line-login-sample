<template>
  <main class=" p-10">
    <section v-if="err">
      <div class=" w-5/6 mx-auto text-center">
        <h3>尚未登入或登入過期</h3>
        <router-link class=" underline text-blue-400" to="/login">前往登入</router-link>
      </div>
    </section>
    <section v-else>
      <figure class=" w-32 mx-auto p-4">
        <img class=" w-full rounded" :src="profile.pictureUrl" :alt="profile.displayName">
        <figcaption class=" text-xs text-center">{{ profile.displayName }}</figcaption>
      </figure>
      <h3 class=" text-center">ID: <span class=" bg-gray-700 text-white">{{ profile.userId }}</span></h3>
    </section>
  </main>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import { useLineStore } from '@/stores/line'
import api from '@/utils/api'
export default {
  setup () {
    const store = useLineStore()

    const err = ref(false)

    const profile = reactive({
      userId: '',
      statusMessage: '',
      pictureUrl: '',
      displayName: ''
    })

    const verify = () => {
      api.verifyToken(store.access_token)
        .then(res => console.log(res))
        .catch(() => {
          err.value = true
        })
    }
    const getProfile = () => {
      api.getProfile(store.access_token)
        .then(res => {
          profile.displayName = res.displayName
          profile.statusMessage = res.statusMessage
          profile.pictureUrl = res.pictureUrl
          profile.userId = res.userId
        })
        .catch(() => {
          err.value = true
        })
    }

    onMounted(() => {
      if (!store.hasToken) {
        err.value = true
      } else {
        verify()
        getProfile()
      }
    })

    return {
      err,
      profile
    }
  }
}
</script>