"use client"; // Mark the component as client-side

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ValidateToken() {
  const [loading, setLoading] = useState(true); // To display "Verifying..." text while token is being checked
  const router = useRouter();

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  useEffect(() => {
    // Check if the token exists in the cookies
    const token = getCookie("analogueshifts");

    if (!token) {
      // If no token, redirect the user to the external auth page
      window.location.href = "https://auth.analogueshifts.app?app=resume";
    } else {
      // If token exists, grant access (redirect to the dashboard or home page)
      router.push("/my-resumes"); // Redirect to dashboard or desired page
    }

    setLoading(false); // Stop loading once token check is complete
  }, [router]);

  return (
    <main className="w-full h-max min-h-screen flex justify-center items-center">
      {/* Display "Verifying..." text while the token is being checked */}
      {loading ? (
        <h2 className="text-2xl font-semibold">Verifying...</h2>
      ) : null}
    </main>
  );
}
