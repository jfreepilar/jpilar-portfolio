import { NextRequest, NextResponse } from "next/server";
import { emailSchema } from "@/validation/emailFormValidation";
import { ZodError } from "zod";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const parsed = emailSchema.parse(body);
  const { email, message } = await parsed;

  try {
    if (parsed) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: "From my Web Portfolio",
        text: message,
        replyTo: email,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: error.flatten((issue) => issue.message) },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "An unexpected occured." },
      { status: 500 }
    );
  }
};
