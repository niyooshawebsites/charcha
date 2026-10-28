import UiList from "../ui/UiList";

export type LaneProps = {
  id: string;
  name: string;
  shortDesc: string,
  loginDesc: string,
  image: string;
  followers: string;
  createdAt: string;
};

export type LanesProps = {
  data: LaneProps[];
};

const LaneList = ({ data }: LanesProps) => {
  return <UiList type="lane" data={data} />;
};

export default LaneList;
