/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export function Signin() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-20 w-auto"
            src="https://cdn.discordapp.com/attachments/886680287742930961/1033705565345554522/pink-white-alphabet-letter-m-logo-design-icon-vector-28813614s.jpg"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-red-900">
            Create an Account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-pink-400 px-3 py-2 text-pink-900 placeholder-gray-500 focus:z-10 focus:border-pink-400 focus:outline-none focus:ring-red-500 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-pink-400 px-3 py-2 text-pink-900 placeholder-gray-500 focus:z-10 focus:border-pink-400 focus:outline-none focus:ring-red-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <br/>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-pink-400 px-3 py-2 text-pink-900 placeholder-gray-500 focus:z-10 focus:border-pink-400 focus:outline-none focus:ring-red-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-pink-400 px-3 py-2 text-pink-900 placeholder-gray-500 focus:z-10 focus:border-pink-400 focus:outline-none focus:ring-red-500 sm:text-sm"
                placeholder=" Confirm Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-pink-700 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-pink-500"
              >
                I agree to all terms and conditions
              </label>
            </div>

          </div>

          <div>
            <Link to="/">
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-pink-100 group-hover:text-pink-700"
                    aria-hidden="true"
                  />
                </span>
                Sign up
              </button>
            </Link>
          </div>
        </form>
        <br/>
        <Link to="/Login">
        <p className="mt-2 text-center text-sm text-pink-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-pink-500 hover:text-red-700"
            >Already have an account? Login
            </a>
          </p>
        </Link>
      </div>
    </div>
  );
}
