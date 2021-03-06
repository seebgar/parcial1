import React from "react";
import Who from "./Who";

export default function Panel(props) {
  return (
    <div style={{ marginLeft: "1em" }}>
      <div className="row">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Buscar en Twitter"
          />
        </div>
      </div>

      <div className="row">
        <div>
          <h6>
            <strong>promocionado por club colombia</strong>
          </h6>
          <div
            class="card"
            style={{ width: "15em", backgroundColor: "rgb(245,248,250)" }}
          >
            {props.trendList.map((x, i) => {
              return (
                <div class="card-body" style={{marginTop: '-1em'}}>
                  <h5 class="card-title">{x.hashtag}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {x.tweets} tweets
                  </h6>
                  <hr />
                </div>
              );
            })}
            <a style={{ margin: "0em 2em " }} href="google.com">
              Monstrar más
            </a>
            <br />
          </div>
        </div>
      </div>

      <br />
      <div className="row">
        <div>
          <h4>
            <strong>A quién seguir</strong>
          </h4>
          <div
            class="card"
            style={{ width: "15em", backgroundColor: "rgb(245,248,250)" }}
          >
            {props.follows.map((x, i) => {
              return (
                  <Who avatar={x.avatar} first_name={x.first_name} last_name={x.last_name} nick={x.nick} />
              );
            })}
            <a style={{ margin: "0em 2em " }} href="google.com">
              Monstrar más
            </a>
            <br />
          </div>
        </div>
      </div>

      <br />
      <footer>
        <div
          className="row"
          style={{ color: "rgb(100, 100, 100)", fontSize: "10px" }}
        >
          <div className="col">Terminos</div>
          <div className="col">Politicas</div>
          <div className="col">Cookies</div>
        </div>
        <div
          className="row"
          style={{ color: "rgb(100, 100, 100)", fontSize: "10px" }}
        >
          <div className="col">@2019</div>
        </div>
      </footer>
    </div>
  );
}
