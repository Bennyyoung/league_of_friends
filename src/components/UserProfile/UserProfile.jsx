// import './UserProfile.css';

export const UserProfile = () => {
  return (
    <div>
      <div
        className="page-header header-filter"
        data-parallax="true"
        style={{
          backgroundImage:
            "url('https://demos.creative-tim.com/bs3/material-kit/assets/img/examples/city.jpg')",
        }}
      ></div>
      <div className="main main-raised">
        <div className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto">
                <div className="profile">
                  <div className="avatar">
                    <img
                      src="https://www.livelingua.com/img/profilesTeachers/103/Guillaume-Deneufbourg-Square_Profile_S.jpg"
                      alt="Circle Image"
                      className="img-raised rounded-circle img-fluid"
                    />
                  </div>
                  <div className="name">
                    <h3 className="title">Christian Louboutin</h3>
                    <h6>Designer</h6>
                    <a
                      href="#pablo"
                      className="btn btn-just-icon btn-link btn-dribbble"
                    >
                      <i className="fa fa-dribbble"></i>
                    </a>
                    <a
                      href="#pablo"
                      className="btn btn-just-icon btn-link btn-twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="#pablo"
                      className="btn btn-just-icon btn-link btn-pinterest"
                    >
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
                <div className="follow">
                  <button
                    className="btn btn-fab btn-primary btn-round"
                    rel="tooltip"
                    title=""
                    data-original-title="Follow this user"
                  >
                    <i className="material-icons">add</i>
                  </button>
                </div>
              </div>
            </div>
            <div className="description text-center">
              <p>
                An artist of considerable range, Chet Faker &#x2014; the name
                taken by Melbourne-raised, Brooklyn-based Nick Murphy &#x2014;
                writes, performs and records all of his own music, giving it a
                warm, intimate feel with a solid groove structure.{' '}
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto">
                <div className="profile-tabs">
                  <ul
                    className="nav nav-pills nav-pills-icons justify-content-center"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#work"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">palette</i> Work
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#studio"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">camera</i> Studio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#favorite"
                        role="tab"
                        data-toggle="tab"
                      >
                        <i className="material-icons">favorite</i> Favorite
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content tab-space">
              <div className="tab-pane work active show" id="work">
                <div className="row">
                  <div className="col-md-7 ml-auto mr-auto ">
                    <h4 className="title">Latest Collections</h4>
                    <div className="row collections">
                      <div className="col-md-6">
                        <div
                          className="card card-background"
                          style={{
                            backgroundImage:
                              "url('http://www.ansa.it/webimages/img_457x/2018/1/9/2b87dfb4328e8a6f1dc643aa69af5fc9.jpg')",
                          }}
                        >
                          <a href="#pablo"></a>
                          <div className="card-body">
                            <label className="badge badge-warning">
                              Spring 2016
                            </label>
                            <a href="#pablo">
                              <h2 className="card-title">Stilleto</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="card card-background"
                          style={{
                            backgroundImage:
                              "url('https://i1.wp.com/blog.kakcho.com/wp-content/uploads/2017/12/xeanz6-l-610x610-jacket-tumblr-armygreenjacket-black-turtleneck-blackturtleneck-bag-blackbag-handbag-denim-jeans-bluejeans-pumps-.jpg')",
                          }}
                        >
                          <a href="#pablo"></a>
                          <div className="card-body">
                            <label className="badge badge-info">
                              Spring 2016
                            </label>
                            <a href="#pablo">
                              <h2 className="card-title">High Heels</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="card card-background"
                          style={{
                            backgroundImage:
                              "url('https://s3-eu-west-2.amazonaws.com/cadandthedandy/wp-content/uploads/2018/05/30130124/bespoke-business-suits-savile-row-3.jpg')",
                          }}
                        >
                          <a href="#pablo"></a>
                          <div className="card-body">
                            <label className="badge badge-danger">
                              Summer 2016
                            </label>
                            <a href="#pablo">
                              <h2 className="card-title">Flats</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="card card-background"
                          style={{
                            backgroundImage:
                              "url('http://www.backdownsouth.com/wp-content/uploads/2016/11/sockfancy004.jpg')",
                          }}
                        >
                          <a href="#pablo"></a>
                          <div className="card-body">
                            <label className="badge badge-success">
                              Winter 2015
                            </label>
                            <a href="#pablo">
                              <h2 className="card-title">Men's Sneakers</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-2 mr-auto ml-auto stats">
                    <h4 className="title">Stats</h4>
                    <ul className="list-unstyled">
                      <li>
                        <b>60</b> Products
                      </li>
                      <li>
                        <b>4</b> Collections
                      </li>
                      <li>
                        <b>331</b> Influencers
                      </li>
                      <li>
                        <b>1.2K</b> Likes
                      </li>
                    </ul>
                    <hr />
                    <h4 className="title">About his Work</h4>
                    <p className="description">
                      French luxury footwear and fashion. The footwear has
                      incorporated shiny, red-lacquered soles that have become
                      his signature.
                    </p>
                    <hr />
                    <h4 className="title">Focus</h4>
                    <span className="badge badge-primary">Footwear</span>
                    <span className="badge badge-rose">Luxury</span>
                  </div>
                </div>
              </div>
              <div className="tab-pane connections" id="studio">
                <div className="row">
                  <div className="col-md-5 ml-auto mr-auto">
                    <div className="card card-profile card-plain">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="card-header card-header-image">
                            <a href="#pablo">
                              <img
                                className="img"
                                src="http://www.ishootshows.com/wp-content/uploads/2008/07/todd-owyoung-portrait-145238_COB8628-square-600px.jpg"
                              />
                            </a>
                            <div
                              className="colored-shadow"
                              style={{
                                backgroundImage:
                                  "url('http://www.ishootshows.com/wp-content/uploads/2008/07/todd-owyoung-portrait-145238_COB8628-square-600px.jpg')",
                                opacity: '1',
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <h4 className="card-title">Anthon Jard</h4>
                            <h6 className="card-category text-muted">Model</h6>

                            <p className="card-description">
                              Don't be scared of the truth because we need to
                              restart the human foundation in truth...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5 mr-auto ml-auto">
                    <div className="card card-profile card-plain">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="card-header card-header-image">
                            <a href="#pablo">
                              <img
                                className="img"
                                src="http://new.kevinrees.com/wp-content/uploads/2016/12/Kevin-Portrait-Square.jpg"
                              />
                            </a>
                            <div
                              className="colored-shadow"
                              style={{
                                backgroundImage:
                                  "url('http://new.kevinrees.com/wp-content/uploads/2016/12/Kevin-Portrait-Square.jpg')",
                                opacity: '1',
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <h4 className="card-title">Marc Jacobs</h4>
                            <h6 className="card-category text-muted">
                              Designer
                            </h6>

                            <p className="card-description">
                              Don't be scared of the truth because we need to
                              restart the human foundation in truth...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 ml-auto mr-auto">
                    <div className="card card-profile card-plain">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="card-header card-header-image">
                            <a href="#pablo">
                              <img
                                className="img"
                                src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU3Nzk2NTA0Njc1ODIwNTQ5/rebbeca-marie-gomez-aka-becky-g-poses-for-a-portrait-at-the-2017-latin-american-music-awards-at-dolby-theatre-on-october-25-2017-in-hollywood-california-photo-by-gabriel-olsen_getty-images-square.jpg"
                              />
                            </a>
                            <div
                              className="colored-shadow"
                              style={{
                                backgroundImage:
                                  "url('https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU3Nzk2NTA0Njc1ODIwNTQ5/rebbeca-marie-gomez-aka-becky-g-poses-for-a-portrait-at-the-2017-latin-american-music-awards-at-dolby-theatre-on-october-25-2017-in-hollywood-california-photo-by-gabriel-olsen_getty-images-square.jpg')",
                                opacity: '1',
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <h4 className="card-title">Kendall Jenner</h4>
                            <h6 className="card-category text-muted">Model</h6>

                            <p className="card-description">
                              I love you like Kanye loves Kanye. Don't be scared
                              of the truth.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5 ml-auto mr-auto">
                    <div className="card card-profile card-plain">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="card-header card-header-image">
                            <a href="#pablo">
                              <img
                                className="img"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Jm45nkeAjmUPtmaxAKvFEMepzVTBQvDm2Y5MgcIOVcHY4iIR"
                              />
                            </a>
                            <div
                              className="colored-shadow"
                              style={{
                                backgroundImage:
                                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Jm45nkeAjmUPtmaxAKvFEMepzVTBQvDm2Y5MgcIOVcHY4iIR')",
                                opacity: '1',
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="card-body">
                            <h4 className="card-title">George West</h4>
                            <h6 className="card-category text-muted">
                              Model/DJ
                            </h6>

                            <p className="card-description">
                              I love you like Kanye loves Kanye.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane text-center gallery" id="favorite">
                <div className="row">
                  <div className="col-md-3 ml-auto">
                    <img
                      src="http://www.globalfashionstreet.com/wp-content/uploads/2018/03/the-different-kinds-of-womens-street-fashion-style-1.jpg"
                      className="rounded"
                    />
                    <img
                      src="https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2017/08/street-style-mens-overcoat.jpg"
                      className="rounded"
                    />
                  </div>
                  <div className="col-md-3 mr-auto">
                    <img
                      src="http://fashiongum.com/wp-content/uploads/2015/01/stilettos-summer-shoes-trend-6.jpg"
                      className="rounded"
                    />
                    <img
                      src="https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2016/06/pocket-square-how-to-1170x736.jpg"
                      className="rounded"
                    />
                    <img
                      src="https://rachealnaluyange.files.wordpress.com/2014/06/2012-fashion-bags-hot-women-s-handbag-b1462-women-s-handbag-vintage-one-shoulder-cross-body.jpg"
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
