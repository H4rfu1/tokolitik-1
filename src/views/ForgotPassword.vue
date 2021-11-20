<template>
<div class="min-h-screen px-16 py-16 mx-auto flex flex-wrap items-center justify-center bg-theme1">
    <div class="lg:w-3/5 lg:pr-0 pr-0">
      <h1 class="title-font font-bold text-5xl">Touta</h1>
      <p class="leading-relaxed mt-4 fon">Situs Kosmetik Halal Terlengkap & Terpercaya #1 di Indonesia.</p>
    </div>
    <div class="text-center lg:w-2/6 xl:w-2/5 md:w-2/3 bg-white rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 shadow-xl">
        <router-link to="/login">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </router-link>
        <h1 class="font-sans text-xl font-extrabold">Atur ulang kata sandi</h1>
        <form action="" class="pt-8 text-sm font-sans">
            <div class="pt-3 px-4 ">
                <label class="float-left text-left mb-5" for="username">Masukkan e-mail atau nomor HP yang terdaftar. Kami akan mengirimkan kode verifikasi untuk atur ulang kata sandi.</label>
                <input type="text" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm" placeholder="Masukkan email / Nomor HP" required>
            </div>
            <div class="pt-12">
                <button type="submit" class="text-white font-bold bg-theme1 rounded-lg py-2 px-8 hover:bg-blue-500">
                    Lanjut
                </button>
            </div>
        </form>
    </div>
</div>
</template>
