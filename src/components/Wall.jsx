import React, { Component } from "react";
import Modal from "react-modal";

class Wall extends Component {
  constructor() {
    super();
    this.state = {
      name: "DocMustang",
      tweet: "",
      arrayOfPosts: [{ id: "1", content: "Hello world!" }],
      comment: "",
      tweetC: "",
      modalIsOpen: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.tweet = this.tweet.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.comment = this.comment.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      (prevState) => {
        return {
          ...prevState.post,
          [name]: value,
        };
      },
      () => this.state
    );
  }

  tweet(e) {
    e.preventDefault();

    let pom = this.state.arrayOfPosts;

    let array = [{ id: this.state.name, content: this.state.tweet }];
    pom.map((item) => array.push(item));

    this.setState({ arrayOfPosts: array });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  comment() {
    console.log(this.state.comment);
    let pom = this.state.comments;
    pom.push({ name: this.state.name, content: this.state.comment });
    this.setState({ comments: pom });
  }

  render() {
    return (
      <div>
        <div
          style={{
            margine: "auto",
            padding: "10px",
            position: "relative",
            width: "80%",
            left: "10%",
          }}
        >
          <form onSubmit={this.tweet}>
            <textarea
              maxLength="150"
              name="tweet"
              onChange={this.handleInput}
              value={this.state.tweet}
              className="form-control"
              placeholder="Whats on your mind?"
            ></textarea>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
        {this.state.arrayOfPosts.map((item) => (
          <div
            className="card bg-info text-white"
            onClick={() => {
              this.openModal();
              this.setState({ tweetC: item.content, tweetId: item.id });
            }}
            style={{ margin: "5px", width: "80%", left: "10%" }}
          >
            <div
              className="card-header"
              style={{ color: "yellow", cursor: "pointer" }}
            >
              {this.state.name}
            </div>
            <div style={{ cursor: "pointer" }} className="card-body">
              {item.content}
            </div>
          </div>
        ))}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
        >
          <div
            style={{ margin: "5px", width: "80%", left: "10%" }}
            className="card bg-info text-white"
          >
            <div className="card-header" style={{ color: "yellow" }}>
              {this.state.name}
            </div>
            <div className="card-body">{this.state.tweetC}</div>
          </div>
          <div
            style={{ margin: "5px", width: "80%", left: "10%" }}
            className="card"
          >
            <textarea
              onChange={this.handleInput}
              name="comment"
              value={this.state.comment}
              className="form-control"
            ></textarea>
            <button onClick={this.comment} className="btn btn-primary">
              Comment
            </button>
          </div>
          {this.state.comments.map((item) => (
            <div
              style={{ margin: "5px", width: "70%", left: "15%" }}
              className="card bg-info text-white"
            >
              <div style={{ color: "yellow" }} className="card-header">
                {item.name}
              </div>
              <div className="card-body">{item.content}</div>
            </div>
          ))}
        </Modal>
      </div>
    );
  }
}

export default Wall;
