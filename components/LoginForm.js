import Link from "next/link";

export default function Component() {
  return (
    <div className="mx-10 flex h-screen items-center justify-center sm:m-0 md:m-0 lg:m-0">
      <div className="w-full max-w-full rounded-2xl border border-gray-200/10 bg-white/10 p-8 shadow-2xl backdrop-blur-lg sm:w-[400px]">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Login
        </h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-200" htmlFor="username">
              Username
            </label>
            <input
              className="rounded-md border border-gray-300/10 bg-white/10 px-4 py-2 text-white placeholder-gray-300 focus:border-blue-500 focus:ring-blue-500"
              id="username"
              placeholder="Enter your username"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-200" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-md border border-gray-300/10 bg-white/10 px-4 py-2 text-white placeholder-gray-300 focus:border-blue-500 focus:ring-blue-500"
              id="password"
              placeholder="Enter your password"
              type="password"
            />
          </div>
          <button className="mt-4 rounded bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 font-bold text-white hover:from-purple-500 hover:to-blue-500">
            Login
          </button>
        </form>
        <div className="mt-6 flex justify-between text-sm text-gray-200">
          <Link className="hover:text-blue-500" href="/signup">
            New User? Sign Up
          </Link>
          <Link className="hover:text-blue-500" href="#">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}
