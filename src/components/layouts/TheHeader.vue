<template>
  <div class="relative bg-slate-900 overflow-hidden w-full h-full">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-gradient-to-r from-slate-900 to-blue-900"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon class="text-blue-900" points="50,0 100,0 50,100 50,100" />
        </svg>

        <Popover>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8 md:w-[800px]">
            <nav
              class="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div
                class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
              >
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">Portal do trader</span>
                    <img
                      alt="Workflow"
                      class="h-8 w-auto sm:h-14 sm:w-80"
                      src="https://res.cloudinary.com/portal-do-trader/image/upload/v1602874706/pdt-home/logo_horiz_branco_full.png"
                    />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span class="sr-only">Abrir menu principal</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="font-medium text-gray-200 hover:text-gray-400"
                  >{{ item.name }}</a
                >
                <a
                  href="#"
                  class="font-medium text-emerald-400 hover:text-emerald-500"
                  @click="activeSignInModal"
                  >Entrar</a
                >
              </div>
            </nav>
          </div>

          <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div
                class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
              >
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="https://res.cloudinary.com/portal-do-trader/image/upload/v1513012105/live/bs4-navbar-logo_p4tvfr.png"
                      alt=""
                    />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span class="sr-only">Fechar Menu Principal</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</a
                  >
                </div>
                <a
                  href="#"
                  class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  @click="activeSignInModal"
                >
                  Entrar
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
        <signin-form :class="{hidden: signinModal}" @toggle-modal="activeSignInModal"></signin-form>
          <div class="sm:text-center lg:text-left text-gray-200">
            <h1
              class="text-4xl tracking-tight sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight"
            >
              <span class="block xl:inline">Onde</span>
              {{ " " }}
              <span class="block text-emerald-400 xl:inline font-bold"
                >traders consistentes</span
              >
              <span class="block xl:inline"> se encontram</span>
              {{ " " }}
            </h1>
            <p
              class="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              Estudamos mais de 300 mil traders para criar um sistema
              educacional completo, que te ensina a melhorar seus resultados e a
              operar na Bolsa com mais segurança.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-emerald-500 md:py-4 md:text-lg md:px-10 border-solid border-emerald-400 hover:border-gray-800 border-2 duration-75"
                >
                  Registrar-se
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-emerald-500 md:py-4 md:text-lg md:px-10 border-solid border-emerald-400 border-2 duration-75 hover:border-gray-800"
                >
                  Cursos Gratuitos
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://res.cloudinary.com/portal-do-trader/image/fetch/v1643639785/https://res.cloudinary.com/portal-do-trader/image/upload/f_webp%2Ct_ghost-blog-image/v1/blog-images/2021/05/gestao-de-risco.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

const navigation = [
  { name: "Aprenda", href: "#" },
  { name: "Ao Vivo", href: "#" },
  { name: "Blog", href: "#" },
];
</script>

<script>
import SigninForm from '@/components/forms/SigninForm.vue'

export default {
  components: {
    SigninForm
  },
  data() {
    return {
      signinModal: true
    }
  },
  methods: {
    activeSignInModal() {
      this.signinModal = !this.signinModal
    }
  }
}
</script>
