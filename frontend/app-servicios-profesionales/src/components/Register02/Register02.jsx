import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import "../Register02/register02.css";

export default function Register02() {
  const steps = ["Paso 1", "Paso 2"];
  const [currentStep, setCurrentStep] = useState(2);
  const [complete, setComplete] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="register ">
        <div>
          <form className="flex flex-col items-center p-2 m-3 gap-y-8 ">
            <h1 className="text-black text-[40px] ">Crear cuenta</h1>

            {/* Barra de Progreso */}
            <div className="flex justify-between">
              {steps?.map((step, i) => (
                <div
                  key={i}
                  className={`step-item ${currentStep === i + 1 && "active"} ${
                    (i + 1 < currentStep || complete) && "complete"
                  } `}
                >
                  <div className="step">
                    {i + 1 < currentStep || complete ? (
                      <TiTick size={24} />
                    ) : (
                      i + 1
                    )}
                  </div>
                  <p className="text-[#6079FD]">{step}</p>
                </div>
              ))}
            </div>
            {/* Fin barra de progreso */}

            <div className="flex gap-[1.5rem]">
              <input className="ipt-reg-s" placeholder="Calle" />

              <input className="ipt-reg-s" placeholder="Número" />
            </div>

            <input className="ipt-reg-l" placeholder="Barrio" />

            <input className="ipt-reg-l" placeholder="Ciudad" />

            <input className="ipt-reg-l" placeholder="Teléfono" />
            {!complete && (
              <button
                className="btn-reg "
                onClick={() => {
                  currentStep === steps.length
                    ? setComplete(true)
                    : setCurrentStep((prev) => prev + 1);
                }}
              >
                {currentStep === steps.length ? "Registrarse" : "Siguiente"}
              </button>
            )}

            <div className="flex flex-col items-center justify-center">
              <p className="text-[#000000BF] text-[28px]">
                ¿Ya tienes una cuenta?
              </p>
              <a href="#" className="text-[#454BE0E0] text-[30px] underline">
                Inicia sesión
              </a>
            </div>
          </form>
        </div>
        <div>
          <img
            src="../src/assets/register.png"
            alt="electricista"
            className="w-[465px] h-[748px]"
          />
        </div>
      </div>
    </div>
  );
}
