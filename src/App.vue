<template>
  <the-header></the-header>
  <!-- <the-signup></the-signup> -->
  <cta-container></cta-container>
  <list-content></list-content>
  <signup-section></signup-section>
  <blog-section></blog-section>
  <faq-container></faq-container>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader.vue'
import TheSignup from '@/components/layouts/TheSignup.vue'
import ListContent from '@/components/layouts/ListContent.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'
import CtaContainer from '@/components/layouts/CtaContainer.vue'
import FaqContainer from '@/components/layouts/FaqContainer.vue'
import SignupSection from '@/components/layouts/SignupSection.vue'
import BlogSection from '@/components/layouts/BlogSection.vue'

export default {
  components: {
    TheHeader,
    TheSignup,
    ListContent,
    CtaContainer,
    TheFooter,
    FaqContainer,
    SignupSection,
    BlogSection
  }
}
</script>