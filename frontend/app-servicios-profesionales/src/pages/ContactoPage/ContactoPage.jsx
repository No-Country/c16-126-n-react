import React, { useState, useEffect } from "react";

export default function ContactoPage() {
  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form action="#">
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-lg font-bold text-[#07074D] "
              >
                Nombre Completo:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ingrese Nombre Completo"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="mb-3 block text-lg font-bold text-[#07074D] "
              >
                Dirección de email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="ejemplo@email.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="subject"
                className="mb-3 block text-lg font-bold text-[#07074D] "
              >
                Asunto:
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Ingrese  un asunto"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="message"
                className="mb-3 block text-lg font-bold text-[#07074D] "
              >
                Mensaje
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Escriba su mensaje"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-blue-700 py-3 px-8 text-lg font-semibold text-white outline-none">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
