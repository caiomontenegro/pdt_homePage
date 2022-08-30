<template>
  <div class="flex flex-col text-center p-16 space-y-8 bg-gray-100">
    <h2 class="uppercase text-3xl font-semibold text-indigo-800">
      O portal do trader
    </h2>
    <p class="text-xl text-gray-800 px-16 md:px-96">
      O Portal do Trader é uma plataforma educacional para traders e
      investidores que reuniu diversos especialistas e ensinou mais de 300 mil
      alunos ao longo de 5 anos. Oferecemos 16 cursos gratuitos completos,
      somando mais de 200 aulas, postagens e eventos ao vivo sobre o mercado
      financeiro.
    </p>
  </div>
  <div class="relative bg-gray-100">
    <div
      class="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 md:left-8"
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
          <h2 class="text-lg font-semibold text-indigo-800">
            APRENDA AS MELHORES TÉCNICAS
          </h2>
          <p
            class="mt-2 text-gray-800 text-3xl font-bold tracking-tight sm:text-4xl sm:tracking-tight"
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
          <div
            class="flex w-11/12 flex-col items-center space-y-4 rounded-xl border-4 border-gray-300 p-4 md:flex-row md:px-6 lg:w-full shadow-xl mt-8"
          >
            <p class="font-lato italic md:order-1 lg:text-md">
              "Os cursos do Portal e a sala Ao Vivo mudaram minha vida operacional. A calma e paciência da equipe foram fundamentais para eu atingir minha consistência. Já conhecia o mercado e tinha perdido muito! Com vocês isso mudou! Não os conheço pessoalmente mas sinto como se fossem grandes amigos... Obrigado por tudo!"
            </p>
            <div class="flex flex-col items-center md:mr-6">
              <div
                class="w-24 overflow-hidden rounded-full border border-4 border-gray-300"
              >
                <img src="https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/testimonial-pic-02" alt="Foto de Lucas A.">
              </div>
              <span class="text-center font-lato font-bold lg:text-md">
                Lucas A.
              </span>
            </div>
          </div>
          <div class="mt-8">
            <div class="inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                Visite nossa sala ao vivo
                <ExternalLinkIcon
                  class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ExternalLinkIcon } from "@heroicons/vue/solid";
</script>
