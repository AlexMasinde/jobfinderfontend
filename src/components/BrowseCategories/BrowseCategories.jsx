import React from "react";
import arrayGroups from "../../utils/arrayGroups";
import { useSearch } from "../../contexts/searchContext";

export default function BrowseCategories() {
  const { dispatch } = useSearch();
  const groups = arrayGroups();

  function serachCategory(category) {
    const searchObject = {
      where: {
        category: category,
      },
    };
    dispatch({
      type: "SET_SEARCH_JOBS",
      payload: searchObject,
    });

    //scroll to top of page
    window.scrollTo(0, 0);
  }

  return (
    <div className="col-md-12 col-sm-12 text-left card container px-2">
      <div className="my-3">
        <h5 className="d-inline-block">Browse By Job Categories</h5>
      </div>
      <table className="table table-sm mb-0">
        <tbody>
          <tr>
            {groups.map((group) => {
              return (
                <td>
                  <div className="col-md-3 col-sm-3 card-text">
                    <ul
                      className="list-group list-group-flush"
                      style={{ listStyleType: "circle" }}
                    >
                      {group.map((category) => {
                        return (
                          <li
                            key={category}
                            className=""
                            onClick={() => serachCategory(category)}
                          >
                            <p className="pointer" style={{ color: "#4680ff" }}>
                              {category}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
