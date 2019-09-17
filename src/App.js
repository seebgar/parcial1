import React from "react";
import "./App.css";
import Menu from "./Menu";
import axios from "axios";
import Tweet from "./Tweet";
import Panel from "./Panel";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [{}],
      tweets: [{}],
      trends: [{}],
      tofollow: [{}],
    };

    this.get_twitter = this.get_twitter.bind(this);
  }

  componentDidMount() {
    this.get_twitter();
  }

  get_twitter() {
    axios(
      "https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json"
    )
      .then(content => {
        if (content.data) {
          const data = content.data;
          this.setState({ menu: data.menu, tweets: data.tweets, trends: data.trends, tofollow: data.tofollow });
        }
      })
      .catch(error => this.setState({ error: { message: error.message } }));
  }

  render() {
    return (
      <div>
        <div>
          <div className="container" style={{marginTop: '2em'}}>
            <div className="row">

              <div className="col-s">
                <Menu menuList={this.state.menu} />
              </div>


              <div className="col">
                <h2>Inicio</h2>
                <hr />
                <div>
                <Tweet tweetList={this.state.tweets}/>
                </div>
              </div>


              <div className="col-s">
                <Panel trendList={this.state.trends} follows={this.state.tofollow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
