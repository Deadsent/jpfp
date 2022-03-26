import React from "react";
import axios from "axios";
import SingleCampus from "./SingleCampus";
import { Link } from "react-router-dom";
const Campus = ({ campuses, setCampuses }) => {
  async function deleteCampuses(id) {
    try {
      const { data } = await axios.delete(`/api/campuses/${id}`);
      setCampuses(data);
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      <ul>
        {campuses.map((campus) => {
          return (
            <li key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                <SingleCampus campus={campus} />
              </Link>
              <button
                type="submit"
                onClick={() => {
                  event.preventDefault();
                  try {
                    deleteCampuses(campus.id);
                    location.reload();
                  } catch (error) {
                    throw error;
                  }
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Campus;
