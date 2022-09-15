<template>
  <div class="relative bg-gray-100">
    <div
      class="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 "
    >
      <img
        class="w-full h-full object-cover"
        src="https://res.cloudinary.com/portal-do-trader/image/fetch/v1637071331/https://res.cloudinary.com/portal-do-trader/image/upload/f_webp%2Cfl_awebp%2Ct_ghost-blog-image/v1/blog-images/2021/11/o-que-e-mesa-proprietaria.jpg"
        alt=""
      />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <div class="md:ml-8">
          <h2 class="text-lg font-semibold text-blue-900">
            APRENDA AS MELHORES TÉCNICAS
          </h2>
          <p
            class="mt-2 text-blue-900 text-3xl font-bold tracking-tight sm:text-4xl sm:tracking-tight"
          >
            Estamos aqui para ajudar
          </p>
          <p class="mt-3 text-xl text-gray-800">
            Seja para operar Day Trade, Swing Trade ou investir a longo prazo,
            nosso time de traders ensina as principais técnicas utilizadas no
            mercado como Price Action, Análise Técnica e Tape Reading em cursos
            gratuitos completos. Se você está começando agora, ou já é um trader
            experiente, será mais que bem-vindo para aprender o que quiser sobre
            trading e Bolsa de Valores.
          </p>
          <testimony-card :studantPhoto="studant.photo" :studantName="studant.name" :testimony="studant.testimony"></testimony-card>
          <div class="mt-8">
            <div class="inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border-2 border-gray-700 bg-blue-900 text-base font-medium rounded-md text-gray-200 hover:bg-gray-800 hover:border-indigo-600 duration-300"
              >
                Visite nossa sala ao vivo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "@heroicons/vue/solid";
import TestimonyCard from "@/components/cards/TestimonyCard.vue"

export default {
  components: {
    TestimonyCard
  },
  data() {
    return {
      studant: {
        name: 'Lucas A.',
        photo: 'https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/testimonial-pic-02',
        testimony: 'Os cursos do Portal e a sala Ao Vivo mudaram minha vida operacional. A calma e paciência da equipe foram fundamentais para eu atingir minha consistência. Já conhecia o mercado e tinha perdido muito! Com vocês isso mudou! Não os conheço pessoalmente mas sinto como se fossem grandes amigos... Obrigado por tudo!'
      },
    }
  }
}
</script>
