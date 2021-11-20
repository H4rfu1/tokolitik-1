<template>
<div
  class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50"
>
  <div class="fixed inset-0 transition-opacity">
    <div @click.prevent="handleClose"
      class="absolute inset-0 bg-gray-500 opacity-75"
    ></div>
  </div>

  <div
    class="z-10 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-headline"
  >
    <div class="bg-white px-4 pt-4 pb-4 sm:p-5 sm:pb-5">
      <div class="sm:flex sm:items-start">
        <div
        class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
          <div class="flex items-center justify-between mb-4 ">
            <h3
              class="text-lg leading-6 font-medium text-gray-900"
              id="modal-headline"
            >
              <slot name="header">{{ Email }}</slot>
            </h3>
            <button >
              <svg @click.prevent="handleClose" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="mt-2">
            Apakah email yang Anda masukkan sudah benar?
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 px-4 py-2 sm:px-6 sm:flex sm:flex-row-reverse">
      <slot name="footer"></slot>
    </div>
  </div>
</div>
</template>

<script>

export default ({
  methods: {
    handleClose () {
      this.$emit('close')
    }
  },
  props: {
    email: {
      type: String
    }
  }
})
</script>
