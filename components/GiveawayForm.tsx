"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { addToast } from "@heroui/toast";
import { Loader2, Send } from "lucide-react";

// 1. Define the validation schema with Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  twitter: z
    .string()
    .min(1, "Twitter/X handle is required.")
    .max(15, "Handle can't be more than 15 characters."),
  submissionUrl: z.string()
  .min(1, { message: "A submission link is required." })
  .refine((url) => url.includes(".com"), {
    message: "Please enter a valid URL",
  }),
});

// 2. Infer the type for TypeScript
type FormValues = z.infer<typeof formSchema>;

export const GiveawayForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
  setIsLoading(true);
  try {
    const response = await fetch("/api/submit-entry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Something went wrong.");
    }

    addToast({
      title: "Success",
      description: result.message,
      color: "success",
    });
    reset(); // Clear the form on success
  } catch (error: any) {
    addToast({
      title: "Error",
      description: error.message,
      color: "danger",
    });
  } finally {
    setIsLoading(false);
  }
};

  const inputStyles =
    "w-full rounded-md border-2 border-black bg-white p-3 font-comic text-lg text-black placeholder-gray-500 focus:border-[#ea88ea] focus:outline-none focus:ring-2 focus:ring-[#ea88ea]/50 transition-all";
  const errorStyles = "mt-1 text-sm font-bold text-yellow-300";

  return (
    <div className="w-full max-w-2xl mx-auto pointer-events-auto">
      <div className="flex flex-col gap-4 rounded-lg border-[3px] border-[#ea88ea] bg-black/60 p-6 backdrop-blur-sm shadow-[8px_8px_0_#5b2359]">
        <h2 className="text-center font-modak text-4xl text-white [text-shadow:2px_2px_0_#000]">
          Submit Your Entry
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <input
              id="name"
              {...register("name")}
              placeholder="Full Name"
              className={inputStyles}
              disabled={isLoading}
            />
            {errors.name && (
              <p className={errorStyles}>
                <span role="img" aria-label="warning">
                  ⚠️
                </span>{" "}
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Email Address"
              className={inputStyles}
              disabled={isLoading}
            />
            {errors.email && (
              <p className={errorStyles}>
                <span role="img" aria-label="warning">
                  ⚠️
                </span>{" "}
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Twitter/X Handle Field */}
          <div>
            <label htmlFor="twitter" className="sr-only">
              Twitter/X Handle
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-comic text-lg text-gray-500">
                @
              </span>
              <input
                id="twitter"
                {...register("twitter")}
                placeholder="YourSocialMedia"
                className={`${inputStyles} pl-8`}
                disabled={isLoading}
              />
            </div>
            {errors.twitter && (
              <p className={errorStyles}>
                <span role="img" aria-label="warning">
                  ⚠️
                </span>{" "}
                {errors.twitter.message}
              </p>
            )}
          </div>

          {/* Submission URL Field */}
          <div>
            <label htmlFor="submissionUrl" className="sr-only">
              Submission URL
            </label>
            <input
              id="submissionUrl"
              type="text"
              {...register("submissionUrl")}
              placeholder="Link to your post"
              className={inputStyles}
              disabled={isLoading}
            />
            {errors.submissionUrl && (
              <p className={errorStyles}>
                <span role="img" aria-label="warning">
                  ⚠️
                </span>{" "}
                {errors.submissionUrl.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="h-[60px] tracking-wide w-full flex items-center justify-center gap-3 rounded-lg border-2 border-black bg-[#ea88ea] px-8 py-3 font-luckiest text-[24px] text-white shadow-md transition-all hover:bg-[#d978d9] hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:pointer-events-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-3 w-3 animate-spin" />
              </>
                ) : (
              <>
                <span>Enter Giveaway</span>
                <Send className="h-6 w-6" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};