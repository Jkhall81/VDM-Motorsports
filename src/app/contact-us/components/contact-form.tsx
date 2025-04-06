"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  // ...
  const formSchema = z.object({
    fullName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    phoneNumber: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits." })
      .max(15, { message: "Phone number is too long" })
      .regex(/^\+?[1-9]\d{1,14}$/, {
        message: "Invalid phone number format.",
      }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters long." })
      .max(3000, { message: "Message cannot exceed 3000 characters." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const inputStyles = "border-neutral-400 bg-neutral-100";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="z-[30] space-y-8 border-2 2xl:ml-20 2xl:mr-0 mx-20 shadow-2xl bg-gray-400 px-10 py-20 w-[600px] 2xl:w-[30vw] border-neutral-500 rounded-xl"
      >
        {/* Full name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  className={inputStyles}
                  placeholder="John Haldane"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  className={inputStyles}
                  placeholder="111-222-3456"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  className={inputStyles}
                  placeholder="address@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Messages</FormLabel>
              <FormControl>
                <Textarea
                  className={inputStyles}
                  placeholder="Please enter your message here"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
