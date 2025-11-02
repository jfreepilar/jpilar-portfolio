"use client";

import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import { emailSchema } from "@/validation/emailFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Heading, Section, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useForm } from "react-hook-form";
import z from "zod";
import { useNavigationInView } from "@/context/NavigationInViewProvider";

const ConnectWithMe = () => {
  type emailMessage = z.infer<typeof emailSchema>;
  const { ContactRef } = useNavigationInView();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: zodResolver(emailSchema) });

  const onsubmit = async (data: emailMessage) => {
    await axios.post("/api/send-email", data);
    console.log(data);
    reset();
  };

  return (
    <Section id="contact" ref={ContactRef}>
      <Heading as="h1">Connect with me</Heading>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onsubmit)}>
        <Box className="max-w-[500px]">
          <TextField.Root
            size="2"
            radius="none"
            variant="surface"
            color="purple"
            placeholder="Email address"
            autoComplete="off"
            className="bg-martinique! text-white!"
            {...register("email")}
          />
          {errors.email && <ErrorMessage error={errors.email.message} />}
        </Box>

        <Box className="max-w-[500px]">
          <TextArea
            radius="none"
            variant="surface"
            color="purple"
            placeholder="Write a message"
            className="h-[200px] bg-martinique! text-white!"
            {...register("message")}
          />

          {errors.message && <ErrorMessage error={errors.message.message} />}
        </Box>

        <Box className="w-[120px]">
          <Button
            text={`${isSubmitting ? "Sending..." : "Send"}`}
            type="submit"
            width="w-full!"
          />
        </Box>
      </form>
    </Section>
  );
};

export default ConnectWithMe;
