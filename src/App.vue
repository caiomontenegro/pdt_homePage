<template>
  <the-header></the-header>
  <!-- <the-signup></the-signup> -->
  <cta-container></cta-container>
  <team-container></team-container>
  <blog-container></blog-container>
  <list-content></list-content>
  <signup-section></signup-section>
  <course-section></course-section>
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
import CourseContainer from '@/components/layouts/CourseContainer.vue'
import TeamContainer from '@/components/layouts/TeamContainer.vue'
import BlogContainer from '@/components/layouts/BlogContainer.vue'

export default {
  components: {
    TheHeader,
    TheSignup,
    ListContent,
    CtaContainer,
    TheFooter,
    FaqContainer,
    SignupSection,
    CourseContainer,
    TeamContainer,
    BlogContainer
  }
}
</script>