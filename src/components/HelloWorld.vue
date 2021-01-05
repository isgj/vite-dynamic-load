<template>
  <h1>{{ msg }}</h1>
  <p>{{ t('messages.hello') }}</p>
  <select v-model="locale">
    <option value="en">en</option>
    <option value="ja">ja</option>
  </select>
</template>

<script lang="ts">
import { ref, defineComponent, watch } from 'vue'
import {useI18n} from 'vue-i18n'
import { i18n, loadLocaleMessages, setI18nLanguage } from '../i18n'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    const { t, locale } = useI18n()

    watch(() => locale.value, async () => {
      await loadLocaleMessages(i18n, locale.value)
      await setI18nLanguage(i18n, locale.value)
    })

    return { count, t, locale }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
