import { z } from 'zod';

export const deviceSchema = z.object({
  name: z.string().min(3, 'Nome muito curto'),
  serial: z.string().min(6, 'Serial inválido'),
});

export type DeviceFormData = z.infer<typeof deviceSchema>;
