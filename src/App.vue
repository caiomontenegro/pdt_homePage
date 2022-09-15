<template>
  <the-header></the-header>
  <intro-component></intro-component>
  <cta-container></cta-container>
  <list-content></list-content>
  <team-container></team-container>
  <cta-component></cta-component>
  <course-container></course-container>
  <blog-container></blog-container>
  <signup-section></signup-section>
  <faq-container></faq-container>
  <cta-component></cta-component>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader.vue'
import IntroComponent from '@/components/layouts/IntroComponent.vue'
import ListContent from '@/components/layouts/ListContent.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'
import FaqContainer from '@/components/layouts/FaqContainer.vue'
import CourseContainer from '@/components/layouts/CourseContainer.vue'
import TeamContainer from '@/components/layouts/TeamContainer.vue'
import BlogContainer from '@/components/layouts/BlogContainer.vue'
import CtaComponent from '@/components/layouts/CtaComponent.vue'
import CtaContainer from '@/components/sections/CtaContainer.vue'

export default {
  components: {
    TheHeader,
    IntroComponent,
    ListContent,
    CtaContainer,
    TheFooter,
    FaqContainer,
    CourseContainer,
    TeamContainer,
    BlogContainer,
    CtaComponent,
  }
}
</script>