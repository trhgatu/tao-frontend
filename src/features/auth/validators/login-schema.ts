import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Email không hợp lệ' }),
  password: z.string().min(6, { message: 'Tối thiểu 6 ký tự' }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
