import React from "react";

const StudentAssignment = () => {
  return (
    <div>
      <h1>Assignments</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Unit</th>
            <th scope="col">Assignment</th>
            <th scope="col">Due Date</th>
            <th scope="col">Total Marks</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Embedded Systems</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1ykRPCe3qZILTDjgI71o_4uFgCI3aODe4/view?usp=drive_link"
                download="Embedded-CAT1"
                class="btn btn-link"
              >
                CAT 1
              </a>
            </td>
            <td>30/08/2023 12:00 p.m</td>
            <th scope="row">15</th>
            <td>Submitted</td>
          </tr>
          <tr>
            <td>Software Engineering</td>
            <td>
              {" "}
              <a
                href="https://drive.google.com/file/d/1yrkM672-Pb9iv2MR1hprccURDXcXLmdO/view?usp=drive_link"
                download="SE-CAT1"
                class="btn btn-link"
              >
                CAT 1
              </a>
            </td>
            <td>05/06/2023 1:00 p.m</td>
            <th scope="row">30</th>
            <td>Not submitted</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentAssignment;
