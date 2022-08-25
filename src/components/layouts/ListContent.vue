<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-lg text-indigo-600 font-semibold">Transactions</h2>
        <p class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">MILHARES DE TRADERS FREQUENTAM O PORTAL DIARIAMENTE?</p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Nossos traders profissionais estruturaram toda a jornada de aprendizado em um plano, com todas as etapas que você precisa passar para conquistar seus objetivos no mercado.</p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'ESPECIALISTAS E TRADERS PROFISSIONAIS',
    description:
      'reconhecidos no mercado e com mais de 10 anos de experiência. Esse é o time que elabora nosso conteúdo.',
    icon: GlobeAltIcon,
  },
  {
    name: 'PLATAFORMA DE E-LEARNING EAD COMPLETA ',
    description:
      'com centenas de vídeos gratuitos, artigos, perguntas de fixação e discussão.',
    icon: ScaleIcon,
  },
  {
    name: 'COMUNIDADE DE TRADERS E INVESTIDORES',
    description:
      'que enfrenta os mesmos desafios que você e está sempre disponível para ajudar todos os dias.',
    icon: LightningBoltIcon,
  },
  {
    name: 'ANÁLISE TÉCNICA, PRICE ACTION, TAPE READING, FUNDAMENTALISTA E MAIS.',
    description:
      'Acreditamos na diversidade de técnicas para cada aluno encontrar o seu caminho.',
    icon: AnnotationIcon,
  },
  {
    name: 'DAY TRADE, SWING TRADE, POSITION E ALOCAÇÃO DE CARTEIRAS.',
    description:
      'Aprenda técnicas para operar cada modalidade de acordo com seus objetivos.',
    icon: AnnotationIcon,
  },
  {
    name: 'DÓLAR, ÍNDICE, AÇÕES, OPÇÕES, FOREX E ATÉ BITCOIN.',
    description:
      'Nosso conteúdo educacional engloba todos os principais ativos do mercado.',
    icon: AnnotationIcon,
  },
]
</script>