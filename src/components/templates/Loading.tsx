import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  height: number;
}

const Loading = (props: Props) => {
  const { height } = props;
  return (
    <>
      <Skeleton height={height} baseColor="#e2e8f0" highlightColor="#cbd5e1" borderRadius={30} />
    </>
  );
};

export default Loading;
