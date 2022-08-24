<template>
  <the-header></the-header>
  <!-- <the-signup></the-signup> -->
  <cta-container></cta-container>
  <list-content></list-content>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader.vue'
import TheSignup from '@/components/layouts/TheSignup.vue'
import ListContent from '@/components/layouts/ListContent.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'
import CtaContainer from '@/components/layouts/CtaContainer.vue'

export default {
  components: {
    TheHeader,
    TheSignup,
    ListContent,
    CtaContainer,
    TheFooter,
  }
}
</script>