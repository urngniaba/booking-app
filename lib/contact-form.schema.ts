import * as z from "zod";       

export function getContactFormSchema(t?: (key: string) => string) {
  return z.object({
    name: z.string().min(2, {
      message: t ? t("name") : "Name must be at least 2 characters.",
    }),
    email: z.email({
      message: t ? t("email") : "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
      message: t ? t("message") : "Message must be at least 10 characters.",
    }),
  });
}

export type ContactFormValues = z.infer<
  Awaited<ReturnType<typeof getContactFormSchema>>
>;
