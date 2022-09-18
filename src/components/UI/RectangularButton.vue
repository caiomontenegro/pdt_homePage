<template>
  <div class="rounded-md shadow">
    <a
      href="#"
      class="w-full flex items-center justify-center px-8 py-3 border  text-base font-medium rounded-md text-white bg-gray-800 hover:bg-emerald-500 md:py-4 md:text-lg md:px-10 border-solid border-emerald-400 hover:border-gray-800 border-2 duration-75"
    >
      {{ title }}
    </a>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      require: false,
      default: 'link text'
    }
  }
}
</script>