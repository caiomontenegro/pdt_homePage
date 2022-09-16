<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
      <div>
        <h2 class="text-lg font-semibold text-blue-900">Tudo o que precisa!</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-blue-900">Está no Portal do Trader</p>
        <p class="mt-4 text-lg text-gray-900">Veja você mesmo por que o portal do trader é o melhor site para aprender a operar.</p>
      </div>
      <div class="mt-12 lg:col-span-2 lg:mt-0">
        <dl class="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <CheckIcon class="absolute h-6 w-6 text-green-500" aria-hidden="true" />
              <p class="ml-9 text-lg font-medium leading-6 text-blue-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-900">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Desenvolva suas habilidades',
    description: 'para vencer no mercado com especialistas reconhecidos e um plano educacional completo, etapa por etapa',
  },
  { name: 'Interaja ao vivo com traders e investidores profissionais', description: 'em nossos chats, gurpos, lives diárias, aulas ao vivo e redes sociais.' },
  {
    name: 'Fuja das armadilhas do mercado.',
    description: 'Percorra um caminho confiável e fique livre das "roubadas" mais comuns do mercado financeiro.',
  },
  { name: 'Proposta justa', description: 'Nós nunca vamos iludir ninguém com fórmulas mágicas, solucṍes milagrosas nem promessas de enriquecimento rápido' },
  { name: 'Acessível a Iniciantes', description: 'Nosso conteúdo também foi pensado para acelerar o aprendizado daqueles que estão começando e ainda não tem nenhuma bagagem.' }
]
</script>