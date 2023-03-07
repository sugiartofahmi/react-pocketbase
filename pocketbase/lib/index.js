import PocketBase from "pocketbase";
export const pocketbaseHooks = () => {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const getList = async () => {
    try {
      const list = await pb.collection("attendance").getFullList({
        sort: "-created",
      });
      return list || [];
    } catch (error) {
      console.log(error);
    }
  };
  const addList = async (data) => {
    try {
      await pb.collection("attendance").create(data);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getList,
    addList,
  };
};
