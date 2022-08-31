<template>
  <div class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
    <div class="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Publicações recentes</h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">Fique por dentro do que os nossos especialistas estão falando:</p>
      </div>
      <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        <div v-for="post in posts" :key="post.title">
          <div>
            <a :href="post.category.href" class="inline-block">
              <span :class="[post.category.color, 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium']">{{ post.category.name }}</span>
            </a>
          </div>
          <a :href="post.href" class="mt-4 block">
            <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
            <p class="mt-3 text-base text-gray-500">{{ post.description }}</p>
          </a>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a :href="post.author.href">
                <span class="sr-only">{{ post.author.name }}</span>
                <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" alt="" />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a :href="post.author.href">{{ post.author.name }}</a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time :datetime="post.datetime">{{ post.date }}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{{ post.readingTime }} read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    title: 'A bolha das criptos',
    href: '#',
    category: { name: 'Artigo', href: '#', color: 'bg-indigo-100 text-indigo-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Eduardo Becker',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '6 min',
  },
  {
    title: 'Montando o seu setup',
    href: '#',
    category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Caio Sasaki',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '4 min',
  },
  {
    title: 'Gerencimento de risco básico',
    href: '#',
    category: { name: 'Estudos', href: '#', color: 'bg-green-100 text-green-800' },
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Karina Pavan',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '11 min',
  },
]
</script>