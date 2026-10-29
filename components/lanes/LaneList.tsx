import UiList from "../ui/UiList";

// export type LaneProps = {
//   id: string;
//   name: string;
//   shortDesc: string;
//   loginDesc: string;
//   image: string;
//   followers: number;
//   createdAt: string;
// };

// export type LanesProps = {
//   data: LaneProps[];
//   type: "lane";
// };

const LaneList = ({ type, data }) => {
  return <UiList type={type} data={data} />;
};

export default LaneList;
