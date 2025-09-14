"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoading } from "@/contexts/LoadingContext";
import { loginSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { loading, setLoading } = useLoading();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setLoading(true);
    setIsSubmitting(true);

    try {
      if (!formRef.current) return;

      const formData = new FormData(formRef.current);
      // Convert FormData to plain object to send JSON
      const payload = Object.fromEntries(formData.entries());

      // Call your custom login API (adjust URL if needed)
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/v/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          credentials: "include",
        }
      );

      const data = await res.json();

      if (!res.ok || data.success === false) {
        toast.error(data.error || "Login failed");
      } else {
        toast.success("Login successful!");
        // Redirect on successful login
        window.location.href = "/dashboard";
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute start-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus-visible:border-primary !shadow-none !ring-0"
                      disabled={loading}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute start-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary focus-visible:border-primary !shadow-none !ring-0"
                      disabled={loading}
                    />
                    <Button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 !p-0 bg-transparent hover:bg-transparent text-muted-foreground h-[unset]"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remember Me & Forgot Password */}
          <div className="mt-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                className="border border-neutral-500 w-4.5 h-4.5"
              />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <Link
              href="/auth/forgot-password"
              className="text-primary font-medium hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full rounded-lg h-[52px] text-sm mt-2"
            disabled={loading || isPending}
          >
            {isSubmitting || isPending ? (
              <>
                <Loader2 className="animate-spin h-4.5 w-4.5 mr-2" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </Form>

      {/* <div className="mt-8 relative text-center before:absolute before:w-full before:h-px before:bg-neutral-300 dark:before:bg-slate-600 before:top-1/2 before:left-0">
        <span className="relative z-10 px-4 bg-white dark:bg-slate-900 text-base">
          Or sign in with
        </span>
      </div> */}
      {/* Social Login */}
      {/* <SocialLogin /> */}
      {/* Signup Prompt */}
      {/* <div className="mt-8 text-center text-sm">
        <p>
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-primary font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div> */}
    </>
  );
};

export default LoginForm;
