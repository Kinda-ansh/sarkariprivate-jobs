import React from "react";
import useDataFetching from "../Helper/useDataFetching";
import Error_image from "../Assets/Oops...... Something Went Wrong.png";

const QuickLinks2 = () => {
  const { data, loading, error } = useDataFetching('/home/web');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data || !data.LatestNewsMarque || data.LatestNewsMarque.length === 0) {
    return <div><img src={Error_image} alt="Error occurred" /></div>;
  }

  return (
    <div>
      <div className="flex flex-wrap">
        {data.LatestNewsMarque.slice(0, 4).map((result, index) => (
          <React.Fragment key={result.id}>
            <a href="#" className="text-blue-500 hover:text-blue-700">{result.title}</a>
            {index !== data.LatestNewsMarque.slice(0, 4).length - 1 && <span className="mx-4">||</span>}
            {(index + 1) % 3 === 0 && <br />} {/* Insert a line break after every 3rd title */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks2;
