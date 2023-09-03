import FoodData from "../Data";
import Card from "./Card";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-[100%] mx-auto mt-16">
      {FoodData ? (
        FoodData.map((item, i) => {
          return <Card key={i} data={item} />;
        })
      ) : (
        <div>Nothing</div>
      )}
    </div>
  );
};

export default Home;
