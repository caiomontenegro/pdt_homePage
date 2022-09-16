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
  </div>
</template>

<script>
import { ExternalLinkIcon } from "@heroicons/vue/solid";
import TestimonyCard from "@/components/cards/TestimonyCard.vue"

export default {
  components: {
    TestimonyCard
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
      studant: {
        name: 'Lucas A.',
        photo: 'https://res.cloudinary.com/portal-do-trader/image/upload/f_auto/pdt-home/testimonial-pic-02',
        testimony: 'Os cursos do Portal e a sala Ao Vivo mudaram minha vida operacional. A calma e paciência da equipe foram fundamentais para eu atingir minha consistência. Já conhecia o mercado e tinha perdido muito! Com vocês isso mudou! Não os conheço pessoalmente mas sinto como se fossem grandes amigos... Obrigado por tudo!'
      },
    }
  },
}
</script>
