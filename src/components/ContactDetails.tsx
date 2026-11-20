import { useState } from "react";

export default function ContactDetails({ email }: { email: string }) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <div className="grid gap-6 rounded-md border border-[#344448] bg-[#0d181a] p-6 sm:p-8 md:grid-cols-2 md:items-center md:gap-12">
      <div>
        <p className="text-xl font-semibold text-[#e9edf0]">Let’s connect.</p>
        <p className="mt-2 max-w-[40ch] leading-[1.7] text-[#b4c1c3]">
          Have a question or an opportunity to share?
        </p>
      </div>
      {email ? (
        <div className="min-w-0">
          <a
            className="inline-flex max-w-full items-center gap-3 text-[#70dd99] underline decoration-[#4d8d68] underline-offset-4 hover:text-[#a2edba]"
            href={`mailto:${email}`}
          >
            <svg
              className="h-5 w-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <span className="break-all">{email}</span>
          </a>
          <div className="mt-4">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded border border-[#405155] px-3 py-2 font-['IBM_Plex_Mono',monospace] text-xs text-[#d1dddd] hover:border-[#70dd99] hover:text-[#70dd99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#70dd99]"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
              </svg>
              {copyStatus === "copied" ? "Copied" : "Copy email"}
            </button>
            <p role="status" className="mt-2 text-xs text-[#b4c1c3]">
              {copyStatus === "error"
                ? "Couldn’t copy. Select the address above to copy it."
                : copyStatus === "copied"
                  ? "Email address copied."
                  : ""}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-[#aebdc0]">Email address coming soon</p>
      )}
    </div>
  );
}
