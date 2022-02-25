import React from "react";
import { categories } from "../../utils/jobCategories";

export default function BrowseCategories() {
  return (
    <div className="col-md-12 col-sm-12 text-left card container px-2">
      <div className="my-3">
        <h5 className="d-inline-block">Browse By Job Categories</h5>
      </div>
      <table className="table table-sm mb-0">
        <tbody>
          <tr>
            <td>
              <div className="col-md-3 col-sm-3 card-text">
                <ul
                  className="list-group list-group-flush"
                  style={{ listStyleType: "circle" }}
                >
                  {categories.map((category) => {
                    return (
                      <li key={category} className="">
                        <p className="text-primary">{category}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
