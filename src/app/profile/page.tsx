"use client";

import { useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const [name, setName] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("নাম লিখুন");
      return;
    }

    setIsSaving(true);

    try {
      const { error } = await authClient.updateUser({
        name: name.trim(),
      });

      if (error) {
        toast.error(error.message || "আপডেট করা যায়নি");
        return;
      }

      toast.success("প্রোফাইল আপডেট হয়েছে");
      setName("");
    } catch {
      toast.error("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/signIn");
    router.refresh();
  };

  if (isPending) {
    return (
      <main className="min-h-screen bg-[#f0f5f1] px-4 py-8">
        <div className="mx-auto max-w-2xl text-sm text-gray-500">
          প্রোফাইল লোড হচ্ছে...
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-[#f0f5f1] px-4 py-8">
        <div className="mx-auto max-w-2xl rounded-xl border border-gray-200 bg-white/70 p-6">
          <h1 className="text-xl font-bold">আমার প্রোফাইল</h1>
          <p className="mt-2 text-sm text-gray-500">
            প্রোফাইল দেখতে প্রথমে সাইন ইন করুন।
          </p>
          <button
            onClick={() => router.push("/signIn")}
            className="mt-4 rounded-lg bg-green-700 px-4 py-2 text-white hover:bg-green-800"
          >
            সাইন ইন
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f0f5f1] px-4 py-8 text-gray-800">
      <div className="mx-auto max-w-2xl">
        {/* Page Heading */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User Information */}
        <section className="mb-5 flex flex-col justify-between gap-4 rounded-xl border border-gray-200 bg-white/70 p-4 sm:flex-row sm:items-center">
          <div className="flex min-w-0 items-center gap-3">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name || "Profile"}
                width={58}
                height={58}
                unoptimized
                className="h-14 w-14 rounded-xl object-cover"
              />
            ) : (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                👤
              </div>
            )}

            <div className="min-w-0">
              <h2 className="truncate font-semibold">{user.name}</h2>
              <p className="truncate text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="shrink-0 rounded-lg border cursor-pointer border-red-400 px-3 py-2 text-sm text-red-500 transition hover:bg-red-50"
          >
            ↪ সাইন আউট
          </button>
        </section>

        {/* Update Profile Form */}
        <section className="rounded-xl border border-gray-200 bg-white/70 p-5">
          <h2 className="mb-6 font-semibold">তথ্য</h2>

          <form onSubmit={handleUpdate} className="space-y-3">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={user.name || "আপনার নাম লিখুন"}
                className="h-10 w-full rounded-lg border border-gray-200 bg-transparent px-3 text-sm outline-none focus:border-green-600"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="w-full rounded-lg cursor-pointer bg-green-700 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSaving ? "আপডেট হচ্ছে..." : "আপডেট"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Profile;
