"use client";

import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import { useNavigationInView } from "@/context/NavigationInViewProvider";
import { emailSchema } from "@/validation/emailFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Heading,
  Section,
  Spinner,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const ConnectWithMe = () => {
  type emailMessage = z.infer<typeof emailSchema>;
  const { ContactRef } = useNavigationInView();
  const [disabled, setDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: zodResolver(emailSchema) });

  const onsubmit = async (data: emailMessage) => {
    setDisabled(true);
    await axios.post("/api/send-email", data);
    setDisabled(false);
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
            className="h-[200px] bg-martinique! text-white!"
            {...register("message")}
          />

          {errors.message && <ErrorMessage error={errors.message.message} />}
        </Box>

        <Box className="w-[120px]">
          <Button
            text={isSubmitting ? "Sending" : "Send"}
            icon={isSubmitting ? <Spinner /> : null}
            type="submit"
            width="w-full!"
            disabled={isSubmitting}
          />
        </Box>
      </form>
    </Section>
  );
};

export default ConnectWithMe;
