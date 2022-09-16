<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-lg font-semibold text-blue-900">6 anos no mercado</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Consolidados com muita experiência</p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gray-900">entenda por que acreditamos que juntos somos mais fortes</p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center rounded-md bg-blue-900 p-3 shadow-lg">
                    <component :is="feature.icon" class="h-6 w-6 text-emerald-400" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium tracking-tight text-blue-900">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-gray-900">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  AcademicCapIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/vue/outline'

const features = [
  {
    name: '+12 milhões ',
    description: 'de visualizações no youtube',
    icon: AcademicCapIcon,
  },
  {
    name: '+6 milhões',
    description: 'de mensagens na sala ao vivo',
    icon: LockClosedIcon,
  },
  {
    name: '+300 mil',
    description: 'usuários cadastrados',
    icon: UserGroupIcon
  },
  {
    name: '+1 milhão',
    description: 'de aulas gratuitas vistas no último ano',
    icon: ShieldCheckIcon,
  },
  {
    name: '+7 mil',
    description: 'transmissões e aulas produzidas',
    icon: CogIcon,
  },
  {
    name: '1,5 milhão',
    description: 'de atividades respondidas em nossa plataforma',
    icon: ServerIcon,
  },
]
</script>