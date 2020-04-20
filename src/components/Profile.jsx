/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Picture from "./Picture";
import Wall from "./Wall";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "DocMustang",
      locked: "Public",
      friendscount: 2000,
      birthday: "" + new Date(),
      created_at: "" + new Date(),
      info: true,
    };
    this.openBasicInfo = this.openBasicInfo.bind(this);
    this.openPosts = this.openPosts.bind(this);
  }

  openBasicInfo() {
    this.setState({ info: true });
  }

  openPosts() {
    this.setState({ info: false });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="card-title mb-4">
                  <div className="d-flex justify-content-start">
                    <Picture />
                    <div className="middle" style={{ width: "70%" }}>
                      <h2
                        className="d-block"
                        style={{ fontsize: "1.5rem", fontWeight: "bold" }}
                      >
                        {this.state.name}
                      </h2>
                      <h6 className="d-block">
                        {this.state.friendscount} friends
                      </h6>
                      <h6 className="d-block">{this.state.tweetcount} Posts</h6>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active "
                          style={{ cursor: "pointer" }}
                          onClick={this.openBasicInfo}
                          id="basicInfo-tab"
                          data-toggle="tab"
                          role="tab"
                          aria-controls="basicInfo"
                          aria-selected="true"
                        >
                          Basic Info
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          style={{ cursor: "pointer" }}
                          onClick={this.openPosts}
                          id="connectedServices-tab"
                          data-toggle="tab"
                          role="tab"
                          aria-controls="connectedServices"
                          aria-selected="false"
                        >
                          Posts
                        </a>
                      </li>
                    </ul>
                    {this.state.info ? (
                      <div className="tab-content ml-1" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="basicInfo"
                          role="tabpanel"
                          aria-labelledby="basicInfo-tab"
                        >
                          <div className="row">
                            <div className="col-sm-3 col-md-2 col-5">
                              <label style={{ fontWeight: "bold" }}>
                                Full Name
                              </label>
                            </div>
                            <div className="col-md-8 col-6">
                              {this.state.name}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3 col-md-2 col-5">
                              <label style={{ fontWeight: "bold" }}>
                                Profile is
                              </label>
                            </div>
                            <div className="col-md-8 col-6">
                              {this.state.locked}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3 col-md-2 col-5">
                              <label style={{ fontWeight: "bold" }}>
                                Birthday
                              </label>
                            </div>
                            <div className="col-md-8 col-6">
                              {this.state.birthday}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3 col-md-2 col-5">
                              <label style={{ fontWeight: "bold" }}>
                                Friends
                              </label>
                            </div>
                            <div className="col-md-8 col-6">
                              Show all friends
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3 col-md-2 col-5">
                              <label style={{ fontWeight: "bold" }}>
                                Joined at
                              </label>
                            </div>
                            <div className="col-md-8 col-6">
                              {this.state.created_at}
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    ) : (
                      <Wall />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
