import { useForm } from "react-hook-form";

function App() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
            name="first-name"
            {...register("first-name")}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="block font-bold mb-2 text-white"
            htmlFor="last-name"
          >
            Last Name:
          </label>
          <input
            className="w-full p-2 border border-gray-400 rounded-sm"
            type="text"
            name="last-name"
            {...register("last-name")}
          />
        </div>
        <div className="flex flex-col">
          <label className="block font-bold mb-2 text-white" htmlFor="email">
            Email Address:
          </label>
          <input
            className="w-full p-2 border border-gray-400 rounded-sm"
            type="email"
            name="email"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col">
          <label className="block font-bold mb-2 text-white" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full p-2 border border-gray-400 rounded-sm"
            type="password"
            name="password"
            {...register("password")}
          />
        </div>
        <div className=" mt-2 mb-2 text-white">
          <input type="checkbox" name="male" id="male" /> Male
        </div>
        <div className=" mt-2 mb-2 text-white">
          <input type="checkbox" name="female" id="female" /> Female
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
