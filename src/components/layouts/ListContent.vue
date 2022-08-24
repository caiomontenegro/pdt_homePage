<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="m-4 md:m-16">
    <div class="font-bold text-3xl text-center p-16">
      <h1>Por que milhares de traders frequentam o portal diariamente?</h1>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
      <div v-for="person in people" :key="person.email" class="relative rounded-lg border-2 border-emerald-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 bg-indigo-700">
        <div class="flex-shrink-0">
          <img class="md:h-18 md:w-20" :src="person.imageUrl" alt="" />
        </div>
        <div class="flex-1 min-w-0">
          <a href="#" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            <p class="text-xl font-medium text-gray-100">
              {{ person.name }}
            </p>
            <p class="text-md text-gray-100 ">
              {{ person.role }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: 'Especialistas e traders profissionais',
    email: 'leslie.alexander@example.com',
    role: 'reconhecidos no mercado e com mais de 10 anos de experiência. Esse é o time que elabora nosso conteúdo.',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_rec.png',
  },
  {
    name: 'Comunidade de traders e investidores',
    email: 'leslie.alexander@example.com',
    role: ' que enfrenta os mesmos desafios que você e está sempre disponível para ajudar todos os dias.',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/c_scale,w_61/v1602874705/pdt-home/icon_msg.png',
  },
  {
    name: 'Day trade, swing trade, postion e alocação de carteiras',
    email: 'leslie.alexander@example.com',
    role: 'Aprenda técnicas para operar cada modalidade de acordo com seus objetivos.',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/c_scale,w_61/v1602874705/pdt-home/icon_modalities.png',
  },
  {
    name: 'plataforma de e-learning EAD completa',
    email: 'leslie.alexander@example.com',
    role: 'com centenas de vídeos gratuitos, artigos, perguntas de fixação e discussão.',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_elearning.png',
  },
  {
    name: 'Análise técnica, price action, tape reading, fundamentalista e mais',
    email: 'leslie.alexander@example.com',
    role: 'Acreditamos na diversidade de técnicas para cada aluno encontrar o seu caminho.',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_chart.png',
  },
  {
    name: 'Dólar, índice, ações, opções, forex e até bitcoin',
    email: 'leslie.alexander@example.com',
    role: 'Nosso conteúdo educacional engloba todos os principais ativos do mercado.',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/pdt-home/icon_bs.png',
  },
]
</script>