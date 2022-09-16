<template>
  <the-header></the-header>
  <intro-component></intro-component>
  <cta-testimony :title="cta[0].title" :subTitle="cta[0].subTitle" :description="cta[0].description" :image="cta[0].image"></cta-testimony>
  <cta-testimony :title="cta[1].title" :subTitle="cta[1].subTitle" :description="cta[1].description" :image="cta[1].image" :direction="cta[1].direction"></cta-testimony>
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
import CtaTestimony from '@/components/sections/CtaTestimony.vue'

export default {
  components: {
    TheHeader,
    IntroComponent,
    ListContent,
    CtaTestimony,
    TheFooter,
    FaqContainer,
    CourseContainer,
    TeamContainer,
    BlogContainer,
    CtaComponent,
  },
  data() {
    return {
      // For CTATestimony props:
      cta: [
        {
          id: 0,
          title: 'Análise Técnica, Fundamentalista e Tape Reading',
          subTitle: 'Aprenda as melhores técnicas',
          description: 'Seja para operar Day Trade, Swing Trade ou investir a longo prazo, nosso time de traders ensina as principais técnicas utilizadas no mercado como Price Action, Análise Técnica e Tape Reading em cursos gratuitos completos. Se você está começando agora, ou já é um trader experiente, será mais que bem-vindo para aprender o que quiser sobre trading e Bolsa de Valores.',
          image: 'https://res.cloudinary.com/portal-do-trader/image/fetch/v1637071331/https://res.cloudinary.com/portal-do-trader/image/upload/f_webp%2Cfl_awebp%2Ct_ghost-blog-image/v1/blog-images/2021/11/o-que-e-mesa-proprietaria.jpg'
        },
        {
          id: 1,
          title: 'Aprenda a manejar o seu capital',
          subTitle: 'Sem plano sem chance',
          description: 'Não existe uma fórmula mágica para começar a operar com segurança nem para conseguir resultados positivos consistentes, o único caminho é através do conhecimento. Nossos traders profissionais estruturaram toda a jornada de aprendizado em um plano, com todas as etapas que você precisa passar para conquistar seus objetivos no mercado.',
          image: 'https://res.cloudinary.com/portal-do-trader/image/fetch/v1643639789/https://res.cloudinary.com/portal-do-trader/image/upload/f_webp%2Ct_ghost-blog-image/v1/blog-images/2021/05/acoes.jpg',
          direction: 'left'
        }
      ]
    }
  }
}
</script>