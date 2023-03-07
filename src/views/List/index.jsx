import { lazy } from "react";
const Table = lazy(() => import("../../components/Table"));
const List = () => {
  document.title = "TASKU | List";
  return (
    <Table>
      <tr className="text-gray-700">
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
              <p className="font-semibold text-black">Fahmi Sugiarto</p>
              <p className="text-xs text-gray-600">41037006200033</p>
            </div>
          </div>
        </td>

        <td className="px-4 py-3 text-xs border">
          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
            90
          </span>
        </td>
        <td className="px-4 py-3 text-sm border">2023-03-07</td>
      </tr>
    </Table>
  );
};

export default List;
