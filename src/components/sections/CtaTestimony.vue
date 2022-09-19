<template>
  <div v-if="direction === 'right'">
    <div class="sm:flex bg-gray-100">
      <div class="relative md:w-1/2">
        <div
          class="h-56 sm:h-72 md:absolute md:left-0 md:h-full"
        >
          <img
            class="w-full h-full object-cover"
            :src="image"
            alt="O portal do trader."
          />
        </div>
      </div>
      <div class="relative px-4 md:w-1/2 py-12 lg:px-8 lg:py-16">
        <div class="md:pl-10 2xl:w-8/12">
          <div class="md:ml-8">
            <h2 class="text-lg font-semibold text-blue-900">
              {{ title }}
            </h2>
            <p
              class="mt-2 text-blue-900 text-3xl font-bold tracking-tight sm:text-4xl sm:tracking-tight"
            >
              {{ subTitle }}
            </p>
            <p class="mt-3 text-xl text-gray-800">
              {{ description }}
            </p>
            <testimony-card :studantPhoto="studant[0].photo" :studantName="studant[0].name" :testimony="studant[0].testimony"></testimony-card>
            <div class="mt-8">
              <dark-rectangular-button title="Junte-se a nós."></dark-rectangular-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="direction === 'left'">
    <div class="sm:flex bg-gray-100">
      <div class="relative md:w-1/2 order-2">
        <div
          class="h-56 sm:h-72 md:absolute md:left-0 md:h-full"
        >
          <img
            class="w-full h-full object-cover"
            :src="image"
            alt="O portal do trader."
          />
        </div>
      </div>
      <div class="relative px-4 md:w-1/2 py-12 lg:px-8 lg:py-16 flex justify-end">
        <div class="md:pr-10 2xl:w-8/12 text-end">
          <div class="md:mr-8">
            <h2 class="text-lg font-semibold text-blue-900">
              {{ title }}
            </h2>
            <p
              class="mt-2 text-blue-900 text-3xl font-bold tracking-tight sm:text-4xl sm:tracking-tight"
            >
              {{ subTitle }}
            </p>
            <p class="mt-3 text-xl text-gray-800">
              {{ description }}
            </p>
            <testimony-card :studantPhoto="studant[1].photo" :studantName="studant[1].name" :testimony="studant[1].testimony"></testimony-card>
            <div class="mt-8">
              <dark-rectangular-button title="Inicie aqui sua jornada."></dark-rectangular-button>
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
import DarkRectangularButton from "../UI/DarkRectangularButton.vue";

export default {
  components: {
    TestimonyCard,
    DarkRectangularButton
},
  props: {
    title: {
      type: String,
      require: true,
      default: 'Title'
    },
    subTitle: {
      type: String,
      require: true,
      default: 'Subtitle'
    },
    description: {
      type: String,
      require: true,
      default: 'Insert the paragraph'
    },
    image: {
      type: String,
      require: true,
      default: 'Put the image here'
    },
    direction: {
      type: String,
      require: true,
      default: 'right',
      validator: function(value) {
        return value === 'right' || value === 'left'
      }
    }
  },
  data() {
    return {
      studant: [
        {
        name: 'Lucas A.',
        photo: 'https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/testimonial-pic-02',
        testimony: 'Os cursos do Portal e a sala Ao Vivo mudaram minha vida operacional. A calma e paciência da equipe foram fundamentais para eu atingir minha consistência. Já conhecia o mercado e tinha perdido muito! Com vocês isso mudou! Não os conheço pessoalmente mas sinto como se fossem grandes amigos... Obrigado por tudo!'
        },
        {
        name: 'Eduardo G.',
        photo: 'https://res.cloudinary.com/portal-do-trader/image/upload/q_auto,f_auto/pdt-home/testimonial-pic-01',
        testimony: 'Muito obrigado por ceder estes materiais tão valiosos de forma gratuita. Sempre que preciso renovar as energias e/ou tirar dúvidas recorro ao CHAT PORTAL DO TRADER e SEMPRE, SEM EXCEÇÃO sou muito bem tratado, minhas dúvidas são esclarecidas e tudo corre muito bem. Muito obrigado mesmo PORTAL!'
        },
      ]
    }
  },
}
</script>
