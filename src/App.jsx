import { useForm } from "react-hook-form";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm(); // You can set default Values using defaultValues object on the useForm()

  const onSubmit = (data) => {
    console.log(data);
    // Reset the form after submitting
    reset();
  };

  return (
    <div className=" bg-gray-500 rounded-md w-1/2 border border-gray-700 mx-auto mt-8 p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <h1 className="text-center font-bold text-xl text-white">
            React-Hook-Form Example
          </h1>
        </div>
        <div className="mb-4">
          <label
            className=" block font-bold mb-2 text-white"
            htmlFor="first-name"
          >
            First Name:
          </label>
          <input
            className=" w-full p-2 border border-gray-400 rounded-sm"
            type="text"
            name="firstName"
            {...register("firstName", { required: "This field is required" })}
          />
          <p className=" text-red-400">{errors.firstName?.message}</p>
        </div>
        <div className="mb-4">
          <label
            className="block font-bold mb-2 text-white"
            htmlFor="last-name"
          >
            Last Name:
          </label>
          <input
            className="w-full p-2 border border-gray-400 rounded-sm"
            type="text"
            name="lastName"
            {...register("lastName", { required: "This field is required" })}
          />
          <p className=" text-red-400">{errors.lastName?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-white" htmlFor="email">
            Email Address:
          </label>
          <input
            className="w-full p-2 border border-gray-400 rounded-sm"
            type="email"
            name="email"
            {...register("email", { required: "This field is required" })}
          />
          <p className=" text-red-400">{errors.email?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-white" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full p-2 border border-gray-400 rounded-sm"
            type="password"
            name="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <p className=" text-red-400">{errors.password?.message}</p>
        </div>
        <div className=" mb-4">
          <p>Do you agree to terms and conditions?</p>
        </div>
        <div className=" mt-2 mb-4 text-white">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            {...register("terms")}
          />
          Yes
        </div>
        <div className=" mt-2 mb-2">
          <button
            className=" border border-gray-200 rounded-2xl p-2 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
