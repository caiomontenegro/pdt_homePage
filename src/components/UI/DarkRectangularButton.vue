<template>
  <div class="inline-flex rounded-md shadow">
    <a
      href="#"
      class="inline-flex items-center justify-center px-5 py-3 border-2 border-gray-700 bg-blue-900 text-base font-medium rounded-md text-gray-200 hover:bg-gray-800 hover:border-indigo-600 duration-300"
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
      default: 'Button Title'
    }
  }
}
</script>