export default function SignupForm() {
  return (
    <form
      action="#"
      className="flex flex-col items-center gap-y-7 p-5 border-2 border-black rounded-lg"
    >
      <h2>Sign Up</h2>
      <label htmlFor="name" className="flex flex-col gap-y-1.5">
        Name
        <input
          className="p-2 border-2 border-black rounded-lg"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
      </label>
      <label htmlFor="email" className="flex flex-col gap-y-1.5">
        Email
        <input
          className="p-2 border-2 border-black rounded-lg"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
      </label>
      <label htmlFor="password" className="flex flex-col gap-y-1.5">
        Password
        <input
          className="p-2 border-2 border-black rounded-lg"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
      </label>
      <button
        type="submit"
        className="py-2 px-5 rounded-lg bg-emerald-600 text-white"
      >
        Submit
      </button>
    </form>
  );
}
