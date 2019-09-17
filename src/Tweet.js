import React from "react";

export default function Tweet(props) {
  return (
    <div>
      {props.tweetList.map((x, i) => {
        return (
          <div class="media">
            <img src={x.avatar} class="mr-3" alt="..." />>
            <div class="media-body">
              <h5 class="mt-0">
                {x.first_name} {x.last_name}
              </h5>
              <div class="d-flex justify-content-between">
                <div className="p-2">
                  <a href="google.com">{x.nick}</a>
                </div>

                <div className="p-2">
                  <a href="google.com">{x.date}</a>
                </div>
              </div>

              {x.content}
              <div className="row">
                <div class="d-flex justify-content-between">
                <div className="p-2">
                  <a href="google.com">{x.retweets} retweets</a>
                </div>

                <div className="p-2">
                  <a href="google.com">{x.favs} favs</a>
                </div>
              </div>
              </div>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
}
