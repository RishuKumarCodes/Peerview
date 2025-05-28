import { z } from 'zod';

export const vendorSchema = z.object({
  name: z.string().min(2, "Vendor name is required"),
  category: z.string().optional(),
  description: z.string().optional(),
  websiteLink: z.string().url().optional(),
  image: z.string().url().optional(),
  featured: z.boolean().optional(),
});
