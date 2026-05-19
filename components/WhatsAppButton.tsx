import { WHATSAPP_URL } from "@/lib/links";

/**
 * Floating WhatsApp button — fixed bottom-right on every page.
 * Honors the brand book: dark surface paired with neutral, no primary
 * mixing. Uses Void with a small Whim icon. Sits above all content but
 * below modals (z-30 < z-40 nav < z-50 modal).
 */
export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Sensu on WhatsApp"
      className="fixed bottom-6 right-6 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-void text-whim shadow-lg transition-colors duration-200 ease-sensu hover:bg-marble md:h-14 md:w-14"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M19.05 4.91A10.05 10.05 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.45 1.34 4.95L2 22l5.2-1.36A9.94 9.94 0 0 0 12 22h.01c5.52 0 9.99-4.48 9.99-10a9.95 9.95 0 0 0-2.95-7.09zM12 20.16h-.01a8.11 8.11 0 0 1-4.13-1.13l-.3-.18-3.08.81.83-3-.2-.31a8.13 8.13 0 0 1-1.24-4.35c0-4.49 3.65-8.14 8.13-8.14 2.17 0 4.21.85 5.74 2.39A8.07 8.07 0 0 1 20.13 12c0 4.49-3.65 8.16-8.13 8.16zm4.46-6.1c-.24-.12-1.45-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.41h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.52.1.46-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
      </svg>
    </a>
  );
}
