<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-indigo-900">Conheça a equipe!</h2>
          <p class="text-xl text-gray-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nam consectetur tempora voluptates? Saepe excepturi quo minima! Consequuntur, laudantium eligendi sunt, illum voluptas dolor perferendis vitae, harum fugiat dolore id.</p>
        </div>
        <div class="lg:col-span-2">
          <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
            <li v-for="person in people" :key="person.name">
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img class="h-20 w-20 rounded-full lg:h-20 lg:w-20 border-2 border-indigo-700" :src="person.imageUrl" alt="" />
                <div class="space-y-1 text-lg font-medium leading-6">
                  <h3>{{ person.name }}</h3>
                  <p class="text-indigo-800">{{ person.role }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: 'Caio Sasaki',
    role: 'Co-Founder / Trader',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/c_fill,g_auto,f_auto,w_115/especialistas/caio-sasaki-photos-square-trader.jpeg',
  },
  {
    name: 'Marcos Moore',
    role: 'Trader',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/c_fill,g_auto,f_auto,w_115/especialistas/marcos-moore-photos-square-trader.jpeg',
  },
  {
    name: 'Augusto Andrea',
    role: 'Economista',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/c_fill,g_auto,f_auto,w_115/especialistas/augusto-andrea-photos-square-trader.jpeg',
  },
  {
    name: 'Francisco Alves',
    role: 'Trader',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/c_fill,g_auto,f_auto,w_115/especialistas/francisco-alves-photos-square-trader.jpeg',
  },
  {
    name: 'Gabriel Fioravante',
    role: 'Cripto Ativos',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/c_fill,g_auto,f_auto,w_115/especialistas/gabriel-fioravante-photos-square-trader.jpeg',
  },
  {
    name: 'Karina Pavan',
    role: 'Trainer em PNL',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/c_fill,g_auto,f_auto,w_115/especialistas/karina-pavan-photos-square-trader.jpeg',
  },
  {
    name: 'Eduardo Becker',
    role: 'Swing Trader',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/c_fill,g_auto,f_auto,w_115/especialistas/eduardo-becker-photos-square-trader.jpeg',
  },
  {
    name: 'Leo Rodrigues',
    role: 'Day Trader',
    imageUrl:
      'https://res.cloudinary.com/portal-do-trader/image/upload/c_fill,g_auto,f_auto,w_115/especialistas/leonardo-rodrigues-photos-square-trader.jpeg',
  },
  // More people...
]
</script>