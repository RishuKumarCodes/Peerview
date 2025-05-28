import { z } from 'zod';

export const vendorSchema = z.object({
  name: z.string().min(2, "Vendor name is required"),
  category: z.string().optional(),
  description: z.string().optional(),
  location:z.string().min(2,"Location is required"),
  avatar: z.string().url().optional(),
  featured: z.boolean().optional(),
});
