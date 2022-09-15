<template>
  <div
    class="flex w-11/12 flex-col items-center space-y-4 rounded-xl border-1 text-white border-gray-100 p-4 md:flex-row md:px-6 lg:w-full shadow-xl mt-8 bg-gradient-to-tr from-blue-900 to-blue-400"
  >
    <p class="font-lato italic md:order-1 lg:text-md">
      {{ testimony }}
    </p>
    <div class="flex flex-col items-center md:mr-6">
      <div
        class="w-24 overflow-hidden rounded-full border border-2 border-emerald-400"
      >
        <img
          :src="studantPhoto"
          alt="Foto do Aluno"
        />
      </div>
      <span class="text-center font-lato font-bold lg:text-md text-emerald-400"> {{ studantName }} </span>
    </div>
  </div>
</template>

<script>
import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';

export default {
  props: {
    studantPhoto: {
      type: String,
      require: true,
    },
    studantName: {
      type: String,
      require: true,
      default: 'Studant Name'
    },
    testimony: {
      type: String,
      require: true,
      default: 'Studant testimony'
    }
  }
}
</script>