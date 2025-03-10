import React from "react";
import Header from "./Header";

function Login() {
  function handleSubmit() {
    alert("Logged in");
  }

  return (
    <>
      <Header />
      <div class="flex h-[90dvh] bg-neutral-900">
        <div class="w-full max-w-xs m-auto bg-white p-5">
          <header>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="text-4xl m-auto"
            >
              <title></title>
              <path d="M18.078,16.345c-0.209-0.261-8.709-11.13-9.005-11.496 c-0.279-0.366-0.209-0.47-0.157-0.523c0.105-0.122,0.261-0.105,0.871-0.105c0.366,0,3.989-0.017,4.372-0.017 c0.784,0,0.906,0.07,0.993,0.087c0.087,0.035,0.296,0.209,0.453,0.383c0.087,0.105,7.699,9.214,7.768,9.301 c0.087,0.105,0.209,0.279,0.314,0.435c0.087,0.157,0.105,0.366-0.035,0.453c-0.087,0.052-4.302,1.794-4.424,1.829 c-0.122,0.052-0.348,0.139-0.523,0.105C18.618,16.798,18.357,16.676,18.078,16.345 M22.38,16.136l0.314,0.052 c0,0,1.01,0.192,1.115,0.226C23.913,16.432,24,16.519,24,16.554c0,0.087-0.052,0.122-0.139,0.174 c-0.07,0.052-4.633,2.856-4.72,2.909c-0.087,0.052-0.192,0.105-0.435,0.139c-0.453,0.087-1.306-0.157-1.585-0.209 c-0.261-0.052-11.461-2.543-11.548-2.578c-0.105-0.035-0.174-0.035-0.174-0.139c-0.017-0.157,0.226-0.209,0.418-0.279 c0.192-0.07,5.452-1.968,5.643-2.055c0.192-0.087,0.418-0.105,0.54-0.105s0.853,0.105,1.184,0.157s1.271,0.192,1.271,0.192 l2.142,2.769c0.366,0.435,0.61,0.61,0.923,0.627c0.157,0.017,0.331-0.035,0.453-0.087C18.061,18.035,22.38,16.136,22.38,16.136 M10.153,9.343c0,0,1.846,2.369,1.864,2.386c0.017,0.035,0.035,0.07,0.07,0.087v0.035c-0.07,0.052-3.362,3.1-3.379,3.118 l-3.466,1.271c0,0-0.105,0.035-0.157,0.07c-0.052,0.035-0.122,0.105-0.105,0.261c0,0.052,0.017,0.853,0.035,1.045 c-0.017,0.017,0,0-0.017,0.017c0,0-4.267,1.359-4.302,1.359c-0.209,0.07-0.61,0.209-0.662,0.174 c-0.087-0.07,0.017-0.174,0.07-0.244c0.052-0.07,8.796-8.674,9.127-9.022C9.7,9.395,10.153,9.343,10.153,9.343"></path>
            </svg>
          </header>
          <form>
            <div>
              <label class="block mb-2 text-black" for="username">
                Username
              </label>
              <input
                class="w-full p-2 mb-6 text-neutral-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="text"
                name="username"
              />
            </div>
            <div>
              <label class="block mb-2 text-black" for="password">
                Password
              </label>
              <input
                class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="password"
                name="password"
              />
            </div>
            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                class="w-full bg-gradient-to-r from-indigo-500 from-10%
                via-sky-500 via-30% to-emerald-500 to-90% hover:shadow-lg
                text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>
          <footer>
            <a
              class="text-indigo-700 hover:text-pink-700 text-sm float-left"
              href="#"
            >
              Forgot Password?
            </a>
            <a
              class="text-indigo-700 hover:text-pink-700 text-sm float-right"
              href="#"
            >
              Create Account
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Login;
