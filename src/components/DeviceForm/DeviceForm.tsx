import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { deviceSchema } from '../../schemas/deviceSchema/deviceSchema';
import type { DeviceFormData } from '../../schemas/deviceSchema/deviceSchema';

export function DeviceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeviceFormData>({
    resolver: zodResolver(deviceSchema),
  });

  function onSubmit(data: DeviceFormData) {
    alert(JSON.stringify(data));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded shadow space-y-3">
      <input
        {...register('name')}
        placeholder="Nome do dispositivo"
        className="border p-2 w-full"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        {...register('serial')}
        placeholder="Serial"
        className="border p-2 w-full"
      />
      {errors.serial && <p className="text-red-500">{errors.serial.message}</p>}

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Cadastrar
      </button>
    </form>
  );
}
