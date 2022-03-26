import React from "react";
import axios from "axios";

const Campus = ({ campuses, setCampuses }) => {

  async function deleteCampuses(id) {
    try {
      console.log(id, "id log");
      const { data } = await axios.delete(`/api/campuses/${id}`);
      console.log(data, "data log");
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
              {campus.name}
              <button
                type="submit"
                onClick={() => {
                  event.preventDefault();
                  try {
                    deleteCampuses(campus.id);
                    location.reload()
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
