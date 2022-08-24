<template>
  <the-header></the-header>
  <the-signup></the-signup>
  <list-content></list-content>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader.vue'
import TheSignup from '@/components/layouts/TheSignup.vue'
import ListContent from '@/components/layouts/ListContent.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheSignup,
    ListContent,
    TheFooter
  }
  
}
</script>