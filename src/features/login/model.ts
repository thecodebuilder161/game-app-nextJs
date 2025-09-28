import { z } from 'zod';

export const LoginFormSchema = z.object({
    username: z
        .string()
        .min(3, 'Username must be at least 3 characters long')
        .max(20, 'Username must be at most 20 characters long')
        .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')
        .trim(),
    password: z
        .string()
        .min(3, 'Password must be at least 3 characters long')
        .max(20, 'Password must be at most 20 characters long')
        .trim(),
});

export type Player = {
  name: string;
  avatar: string;
  event: string;
};

export type LoginResponse = {
    status: string;
    player: Player;
    error?: string;
};
