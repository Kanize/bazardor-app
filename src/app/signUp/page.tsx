'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {


    const onSubmit = async (e:React.SubmitEvent<HTMLElement>) =>{
        e.preventDefault();

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())

    const { data, error } = await authClient.signUp.email({
        name: String(user.name),
        email: String(user.email),
        password: String(user.password),
        callbackURL:"/"
    })

    if(data) {
        toast.success("Welcome")
        redirect("/")
    }
    if(error){
        toast.error("'User already exists. Use another email.'")
    }

    }

    return (
        <main className="min-h-screen bg-[#f0f5f1] px-4 py-8 text-gray-800">
        <div className="mx-auto w-full max-w-md">
            <div className="mb-5 text-center">
            <h1 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
            <p className="mt-1 text-sm text-gray-500">
                বিনা খরচে সাইন আপ করে সব নির্বাচিত ডাটা দেখুন।
            </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white/70 p-5 sm:p-6">
            <form 
            onSubmit={onSubmit}
            className="space-y-4">
                <div>
                <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium"
                >
                    নাম
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="যেমন: রহিম উদ্দিন"
                    autoComplete="name"
                    className="input h-11 w-full rounded-lg border px-2 border-gray-300 bg-transparent text-sm focus:border-green-600 focus:outline-none"
                    required
                />
                </div>

                <div>
                <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                >
                    ইমেইল
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="input h-11 w-full rounded-lg border px-2 border-gray-300 bg-transparent text-sm focus:border-green-600 focus:outline-none"
                    required
                />
                </div>

                <div>
                <label
                    htmlFor="password"
                    className="mb-1.5 block text-sm font-medium"
                >
                    পাসওয়ার্ড
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="কমপক্ষে ৮ অক্ষরের"
                    autoComplete="new-password"
                    minLength={8}
                    className="input h-11 w-full rounded-lg border px-2 border-gray-300 bg-transparent text-sm focus:border-green-600 focus:outline-none"
                    required
                />
                </div>

                <div>
                <label
                    htmlFor="confirmPassword"
                    className="mb-1.5 block text-sm font-medium"
                >
                    পাসওয়ার্ড নিশ্চিত করুন
                </label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="আবার লিখুন"
                    autoComplete="new-password"
                    minLength={8}
                    className="input h-11 w-full rounded-lg border px-2 border-gray-300 bg-transparent text-sm focus:border-green-600 focus:outline-none"
                    required
                />
                </div>

                <button
                type="submit"
                className="btn mt-1 h-11 min-h-0 w-full rounded-lg border-none bg-green-700 text-sm font-medium text-white shadow-md hover:bg-green-800"
                >
                অ্যাকাউন্ট তৈরি করুন
                </button>
            </form>

            <div className="my-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs text-gray-500">অথবা</span>
                <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <button
                type="button"
                className="btn h-10 min-h-0 rounded-lg border border-gray-300 bg-transparent px-2 text-xs text-gray-800 hover:bg-gray-50"
                >
                <span className="font-bold text-blue-500 pr-2">G</span>
                Google দিয়ে চালিয়ে যান
                </button>

                <button
                type="button"
                className="btn h-10 min-h-0 rounded-lg border border-gray-300 bg-transparent px-2 text-xs text-gray-800 hover:bg-gray-50"
                >
                <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.08 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
                GitHub দিয়ে চালিয়ে যান
                </button>
            </div>

            <p className="mt-4 text-center text-xs">
                অ্যাকাউন্ট আছে?{" "}
                <Link
                href="/signIn"
                className="font-medium text-green-700 hover:underline"
                >
                সাইন ইন করুন
                </Link>
            </p>
            </div>

            <div className="mt-5 text-center">
            <Link href="/" className="text-xs text-gray-500 hover:text-green-700">
                ← হোম পেজে ফিরে যান
            </Link>
            </div>
        </div>
        </main>
    );
};

export default SignUpPage;
