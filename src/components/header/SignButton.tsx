"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignButton = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {user ? (
        <>
          {/* Profile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-full px-2 py-1 transition hover:bg-gray-100"
            aria-expanded={isOpen}
            aria-label="Open profile menu"
          >
            <Image
            width={30}
            height={30}
              src={
                user.image ||
                "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
              }
              alt={user.name || "Profile"}
              className="h-8 w-8 rounded-full object-cover"
            />

            <span className="max-w-24 truncate text-sm font-medium text-gray-800">
              {user.name}
            </span>

            <span className="text-xs text-gray-500">
              {isOpen ? "▲" : "▼"}
            </span>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <>
              <button
                aria-label="Close profile menu"
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setIsOpen(false)}
              />

              <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-gray-200 bg-[#fbfcfa] p-3 text-gray-800 shadow-lg">
                {/* User Information */}
                <div className="border-b border-gray-200 px-1 pb-3">
                  <p className="truncate text-sm font-semibold">
                    {user.name}
                  </p>

                  <p className="truncate text-xs text-gray-500">
                    {user.email}
                  </p>
                </div>

                {/* Menu Links */}
                <div className="space-y-1 pt-2">
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-gray-100"
                  >
                    <span>👤</span>
                    আমার প্রোফাইল
                  </Link>

                  <button
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-red-500 hover:bg-red-50"
                  >
                    <span>↪</span>
                    সাইন আউট
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/signIn"
            className="rounded-md px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signUp"
            className="rounded-md bg-green-700 px-4 py-2 text-sm text-white hover:bg-green-800"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default SignButton;