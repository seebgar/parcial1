import React from "react";

export default function Who(props) {
  return (
    <div class="media">
      <img src={props.avatar} class="mr-3" alt="..." />>
      <div class="media-body">
        <h5 class="mt-0">
          {props.first_name} {props.last_name}
        </h5>
        <div class="d-flex justify-content-between">
          <div className="p-2">
            <a href="google.com">{props.nick}</a>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
