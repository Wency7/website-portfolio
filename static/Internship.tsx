import timelineData from "../public/data/timeline.json";
import Tag from "./Tag";

function Timeline() {
  return (
    <div className="lg:text-xl text-md">
      {timelineData.data.map((item, index) => (
        <div key={"W" + index} className="flex">
          <div className="text-lg">
            <div className="flex justify-center items-center rounded-full w-20 h-20">
              <div className="flex h-[72px] w-[72px] font-bold rounded-full justify-center items-center">
                {item.year.toString()} - {item.joblevel.toString()}
              </div>
            </div>
            {index < timelineData.data.length - 1 ? (
              <div className="w-1 m-auto h-full"></div>
            ) : (
              <div className="h-16"></div>
            )}
          </div>
          <div className="flex flex-col justify-start h-max mt-5 px-6">
            <div className="font-bold">
              {item.title + " @ "}
              <span className="font-bold">{item.company}</span>
            </div>
            <div>{item.tasks}</div>
            <div
              className="mt-1 flex justify-evenly"
              aria-label="Technologies used:"
            >
              {item.tags.map((tag, index) => (
                <Tag key={"L" + index} title={tag} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
