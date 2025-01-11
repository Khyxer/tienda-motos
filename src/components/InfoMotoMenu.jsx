import { Accordion, Kbd, HR } from "flowbite-react";

export function InfoMotoMenu() {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Motor</Accordion.Title>
        <Accordion.Content>
          <div className="flex justify-between">
            <p className=" font-medium ">Tipo</p>
            <p className="text-gray-500 ">4 tiempos, 2 cilindros en línea</p>
          </div>
          <HR.Trimmed className="w-full bg-gray-200 h-[2px] md:my-4" />
          <div className="flex justify-between">
            <p className=" font-medium ">Cilindrada</p>
            <p className="text-gray-500 ">650 cc</p>
          </div>
          <HR.Trimmed className="w-full bg-gray-200 h-[2px] md:my-4" />
          <div className="flex justify-between">
            <p className=" font-medium ">Potencia</p>
            <p className="text-gray-500 ">75 CV a 8.500 rpm</p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Dimensiones</Accordion.Title>
        <Accordion.Content>
          <div className="flex justify-between">
            <p className=" font-medium ">Peso</p>
            <p className="text-gray-500 ">208 kg</p>
          </div>
          <HR.Trimmed className="w-full bg-gray-200 h-[2px] md:my-4" />
          <div className="flex justify-between">
            <p className=" font-medium ">Altura del asiento</p>
            <p className="text-gray-500 ">820 mm</p>
          </div>
          <HR.Trimmed className="w-full bg-gray-200 h-[2px] md:my-4" />
          <div className="flex justify-between">
            <p className=" font-medium ">Capacidad de combustible</p>
            <p className="text-gray-500 ">17 litros</p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Características</Accordion.Title>
        <Accordion.Content>
          <div className="flex flex-wrap gap-1">
            <Kbd>ABS</Kbd>
            <Kbd>Control de tracción</Kbd>
            <Kbd>Modos de conducción</Kbd>
            <Kbd>Pantalla TFT</Kbd>
            <Kbd>Encendido de luces automaticas</Kbd>
            <Kbd>ERO3</Kbd>
            <Kbd>ASC</Kbd>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
