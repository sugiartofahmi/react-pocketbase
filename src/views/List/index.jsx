import { lazy, useEffect, useState } from "react";
import { pocketbaseHooks } from "../../../pocketbase/lib";
const Table = lazy(() => import("../../components/Table"));
const List = () => {
  document.title = "TASKU | List";
  const { getList } = pocketbaseHooks();
  const [list, setList] = useState([]);
  useEffect(() => {
    const loadList = async () => setList(await getList());
    loadList();
  }, []);
  console.log(list);
  return (
    <Table>
      {list &&
        list.length > 0 &&
        list.map((el, i) => (
          <tr key={i} className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img
                    className="object-cover w-full h-full rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/1782/1782851.png"
                    alt="icon-user"
                  />
                </div>
                <div>
                  <p className="font-semibold text-black">{el.name}</p>
                  <p className="text-xs text-gray-600">{el.nim}</p>
                </div>
              </div>
            </td>

            <td className="px-4 py-3 text-xs border">
              <span
                className={`px-2 py-1 font-semibold leading-tight ${
                  el.rated >= 80 ? "text-green-700" : "text-red-700"
                } bg-green-100 rounded-sm`}
              >
                {el.rated}
              </span>
            </td>
            <td className="px-4 py-3 text-sm border">{el.created}</td>
          </tr>
        ))}
    </Table>
  );
};

export default List;
