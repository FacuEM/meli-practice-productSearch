import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../breadcrumb";
import SearchBar from "../searchBar";
import { searchItems } from "./../../services";
import ResultItem from "./resultItem";

const Results = () => {
  let { search } = useLocation();
  const [items, setItems] = useState({});
  const item = search.slice(search.indexOf("=") + 1);
  const fetchData = async () => {
    const data = await searchItems(item);
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, [items]);

  const fourItems = (items) => items.slice(0, 4);
  const pickedItems = items.items ? fourItems(items.items) : [];

  return (
    <>
      <SearchBar />
      {items.categories && items.categories.length > 0 ? (
        items.categories[0].values.length > 0 ? (
          items.categories[0].values[0].path_from_root.length > 0 ? (
            <Breadcrumb
              className="breadcrumb"
              info={items.categories[0].values[0].path_from_root[0].name}
              prod={item.charAt(0).toUpperCase() + item.slice(1)}
            />
          ) : null
        ) : null
      ) : null}

      <div className="resultsWrapper">
        {pickedItems.map((item, i) => (
          <>
            <Link to={`/items/${item.id}`}>
              <ResultItem key={i} item={item} />
            </Link>
            {i === 3 ? null : <hr />}
          </>
        ))}
      </div>
    </>
  );
};

export default Results;
