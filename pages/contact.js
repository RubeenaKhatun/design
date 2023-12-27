import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
export default function Component() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <img
        alt="Abstract Background"
        className="absolute inset-0 h-full w-full object-cover"
        src="/background.png"
      />
      <div className="relative mx-auto max-w-4xl rounded-lg border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
        <h1 className="mb-6 text-center font-serif text-6xl font-bold">
          Contact Us
        </h1>
        <p className="mb-8 text-center text-xl">
          We'd love to hear from you. Here's how you can reach us:
        </p>
        <div className="grid grid-cols-1 gap-14 text-center md:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4">
              <MdOutlineDriveFileRenameOutline className="mb-2 h-8 w-8" />
              <h2 className="mb-2 text-xl font-semibold">Name</h2>
            </div>
            <p className="text-2xl">Owner's Name</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4">
              <MdMail className="mb-2 h-8 w-8" />
              <h2 className="mb-2 text-xl font-semibold">Email</h2>
            </div>
            <p className="text-2xl">owner@example.com</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4">
              <FaPhoneFlip className="mb-2 h-8 w-8" />
              <h2 className="mb-2 text-xl font-semibold">Phone</h2>
            </div>
            <p className="text-2xl">(123) 456-7890</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4">
              <FaMapMarkerAlt className="mb-2 h-8 w-8" />
              <h2 className="mb-2 text-xl font-semibold">Address</h2>
            </div>
            <p className="text-2xl">123 Main Street, City, State, ZIP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MailboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function MapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}

function PersonStandingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
