"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { ToastContainer, toast } from "react-toastify"; // Import toast notification components
import "react-toastify/dist/ReactToastify.css"; // Import toast notification styles

export function ConnectToYourDevice() {
    const router = useRouter(); // Initialize router for navigation
    const [deviceId, setDeviceId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Replace with your actual device ID and password check
        if (deviceId === "DEVICE123" && password === "exit") {
            console.log("Form submitted");
            router.push("/my-device"); // Redirect to /my-device on successful login
        } else {
            toast.error("Incorrect device ID or password!"); // Use toast for error notification
        }
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input mt-[7rem]">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Connect Your Device
            </h2>
            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="deviceId">Device ID</Label>
                    <Input
                        id="deviceId"
                        placeholder="Enter your device ID"
                        type="text"
                        value={deviceId}
                        onChange={(e) => setDeviceId(e.target.value)}
                    />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                    type="submit"
                >
                    Connect Device &rarr;
                    <BottomGradient />
                </button>
            </form>

            <ToastContainer /> {/* Render the ToastContainer to display notifications */}
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
