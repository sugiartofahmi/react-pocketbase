import { lazy, useEffect, useState } from "react";
import { pocketbaseHooks } from "../../../pocketbase/lib";
import { useNavigate } from "react-router-dom";
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));
const Task = () => {
  document.title = "TASKU | Task";
  const navigate = useNavigate();
  const { addList } = pocketbaseHooks();
  const [nim, setNim] = useState();
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const data = {
    nim,
    name,
    url,
  };
  const upload = () => {
    addList(data);
    navigate("/list");
  };

  return (
    <ContentLayout>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              NIM
            </label>
            <input
              onChange={(e) => setNim(e.target.value)}
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Input your NIM"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Input your Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              URL
            </label>
            <input
              onChange={(e) => setUrl(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Input url task"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={upload}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </ContentLayout>
  );
};

export default Task;
