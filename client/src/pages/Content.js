import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Waypoint } from "react-waypoint";

const GET_ITEMS_FEED = gql`
  query Feed($offset: Int, $limit: Int) {
    feed(offset: $offset, limit: $limit) {
      id
      description
      url
    }
  }
`;

export default function Content() {
  const [offset, setOffset] = useState(0);
  const [limit] = useState(24);

  const { loading, error, data, fetchMore } = useQuery(GET_ITEMS_FEED, {
    variables: { offset, limit },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (!data) return <p>Not found</p>;

  return (
    <div className="box">
      {data.feed.map((item, i) => (
        <div className="item" key={item.id}>
          <div
            className="item-text"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></div>
          <img src={"./images/" + item.url} />
        </div>
      ))}
      <Waypoint
        onEnter={() => {
          setOffset(offset + 24);
          return fetchMore({
            variables: { offset, limit },
          });
        }}
      />
    </div>
  );
}
