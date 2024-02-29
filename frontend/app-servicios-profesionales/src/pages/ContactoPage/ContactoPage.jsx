import React, { useState, useEffect } from "react";

export default function ContactoPage() {
  return (
    <>
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form action="#">
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-lg font-bold text-[#07074D] "
              >
                Nombre Completo:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ingrese Nombre Completo"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="email"
                class="mb-3 block text-lg font-bold text-[#07074D] "
              >
                Dirección de email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="ejemplo@email.com"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-lg font-bold text-[#07074D] "
              >
                Asunto:
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Ingrese  un asunto"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="message"
                class="mb-3 block text-lg font-bold text-[#07074D] "
              >
                Mensaje
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Escriba su mensaje"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button class="hover:shadow-form rounded-md bg-blue-700 py-3 px-8 text-lg font-semibold text-white outline-none">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
