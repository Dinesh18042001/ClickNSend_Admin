import React, { useEffect, Component, useState } from "react";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import http from "../../../Config/HTTP_request";
import Table from "react-bootstrap/Table";
import moment from "moment";
import AddIcon from "@mui/icons-material/Add";
import "../../admin.css";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from "../../SideNav/sideBar";
import Loader from "../../../Components/Loader/Loader";
import Dropdown from "react-bootstrap/Dropdown";
import TablePagination from "../../../Components/Pagination/Pagination";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { OverlayTrigger, Popover, Stack } from "react-bootstrap";
import { Box } from "@mui/material";
import { IoReload } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  MdRemoveRedEye,
  MdDelete,
  MdMode,
  MdToggleOn,
  MdOutlineFileCopy,
} from "react-icons/md";
import CustomSnackbar from "../../../Components/notify/Snackbar";
import { apiAdminConfig } from "../../../utils/api";
import Nodata from "../../../Components/nodata/Nodata";

const Contant = () => {

  const tempData = [
    // {
    //   id: 1,
    //   name: 'Test',
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   status: "Active",
    //   createdAt: "2021-10-10",
    // },
    {
      id: 2,
      name: "Privacy Policy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      createdAt: "2021-10-10",
    },
  ]



  const navigate = useNavigate();
  const [posts, setPosts] = useState(tempData);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [query, setQuery] = useState("");
  const [filterState, setFilterState] = useState([]);
  const [filterCity, setfilterCity] = useState([]);
  const [filterdeptName, setfilterdeptName] = useState([]);
  const [snackData, setsnackdata] = React.useState({
    open: false,
    message: "",
    status: "",
  });

  let tablehead = [
    "S/N",
    "Name",
    "Description",  
    "Created At",
    "Action",
  ];
  const fetchdata = async () => {
    // setLoading(true);
    // await apiAdminConfig
    //   .get("doctor_admin")
    //   .then((response) => {
    //     if (response.data.status === 200) {
    //       let apidata = response.data.data;
    //       setPosts(apidata);
    //       setLoading(false);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
  };
  // state data
  const getstatedata = async () => {
    // let api = {
    //   path: "distinctStates",
    //   method: "GET",
    // };
    // let response = await http(api);

    // if (response.response) {
    //   setLoading(false);
    //   console.log("response.response", response.response);
    // } else {
    //   if (response.status === 200) {
    //     setFilterState(response.data);
    //   }
    // }
  };

  //city data
  const getCitydata = async () => {
    // let api = {
    //   path: "distinctCities",
    //   method: "GET",
    // };
    // let response = await http(api);

    // if (response.response) {
    //   setLoading(false);
    //   console.log("response.response", response.response);
    // } else {
    //   if (response.status === 200) {
    //     setfilterCity(response.data);
    //   }
    // }
  };

  //specialization data
  const getdeptNames = async () => {
    // let api = {
    //   path: "deptNames",
    //   method: "GET",
    // };
    // let response = await http(api);

    // if (response.response) {
    //   setLoading(false);
    //   console.log("response.response", response.response);
    // } else {
    //   if (response.status === 200) {
    //     let spec = await response.data.data.map((el) => el.specialization);
    //     setfilterdeptName(spec);
    //   }
    // }
  };

  const [filter, setFilter] = useState({
    state: "",
    city: "",
    specialization: "",
  });
  // handle state, city, spec filter
  const handleFilterchange = async (e) => {
    console.log(e.target.name, e.target.value);
    e.target.value !== "0" ?
      setFilter({ ...filter, [e.target.name]: e.target.value }) : setFilter({ ...filter, [e.target.name]: "" });
  };

  const handleFilter = async () => {
    await apiAdminConfig
      .post("doctorfilterstatecitySpec", filter)
      .then((response) => {
        if (response.status === 200) {
          let apidata = response.data.data;
          setPosts(apidata);
        }
      })
      .catch((error) => {
        console.log("error---->", error);
      });
  };

  // handle promote
  const handlepromote = async (value) => {
    // setLoading(true);
    // let body = {
    //   id: value._id,
    //   promoted: value.promoted === true ? false : true,
    // };
    // await apiAdminConfig
    //   .post(`doctorpromote`, body)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       setLoading(false);
    //       fetchdata();
    //       setTimeout(() => {
    //         setsnackdata({
    //           open: true,
    //           message: response.data.message,
    //           status: "success",
    //         });
    //       }, 1500);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
  };

  // Handle Status
  const handleStatus = async (value) => {
    // setLoading(true);
    // await apiAdminConfig
    //   .put(`doctor/${value._id}`, {
    //     active: value.is_active === true ? false : true,
    //   })
    //   .then((response) => {
    //     console.log("response", response);
    //     if (response && response?.status === 200) {
    //       fetchdata();
    //       setLoading(false);
    //       setTimeout(() => {
    //         setsnackdata({
    //           open: true,
    //           message: response.data.message,
    //           status: "success",
    //         });
    //       }, 1000);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error---->", error);
    //   });
  };

  //handle Delete function
  const handledelete = async (value) => {
    // await apiAdminConfig
    //   .delete(`removedoctor/${value}`)
    //   .then((response) => {
    //     console.log("response", response);
    //     if (response && response?.status === 200) {
    //       fetchdata();
    //       setTimeout(() => {
    //         setsnackdata({
    //           open: true,
    //           message: response.data.message,
    //           status: "success",
    //         });
    //       }, 1000);
    //       window.location.reload();
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error---->", error);
    //   });
  };

  // useEffect(() => {
  //   fetchdata();
  //   getstatedata();
  //   getCitydata();
  //   getdeptNames();
  // }, []);

  // Get current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPost = posts
    // .filter(
    //   (el) =>
    //     el.doctorName.toLowerCase().includes(query.toLowerCase()) ||
    //     el.email.toLowerCase().includes(query.toLowerCase()) ||
    //     el.specialization.toLowerCase().includes(query.toLowerCase()) ||
    //     el.contactNumber.toString().includes(query.toString())
    // )
    // .slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  useEffect(() => {
    // if (snackData.open && snackData.status == 'error') {
    //   setTimeout(() => {
    //     setsnackdata({
    //       open: false,
    //       message: "",
    //       status: "error",
    //     });
    //   }, 3000);
    // } else if (snackData.open && snackData.status == 'success') {
    //   setTimeout(() => {
    //     setsnackdata({
    //       open: false,
    //       message: "",
    //       status: "success",
    //     });
    //   }, 1000);
    // }
  }, [snackData.open])

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
        <>
          <CustomSnackbar value={snackData} />
          <Row className="mt-4">
            <Col md={4} sm={4} style={{ textAlign: "left" }}>
              <h3 style={{ height: "40px" }}>
             Privacy Policy
              </h3>
            </Col>
            <Col md={8} sm={8}>
              <Stack className="content-header" direction="horizontal" gap={3}>
                <Box>
                  <InputGroup className="mb-3">
                    <InputGroup.Text className="search-bar">
                      <BsSearch />
                    </InputGroup.Text>
                    <Form.Control
                      className="search-input"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      placeholder="Search"
                      onChange={(e) => {
                        setCurrentPage(1);
                        setQuery(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: '#FF7534',
                    textTransform: "none"
                  }}
                    startIcon={<AddIcon style={{ color: "#fff" }} />}
                    onClick={() => {
                      navigate(`/master/privacy/add`);
                    }}
                  >
                    Add
                  </Button>
                </Box>
              </Stack>
            </Col>
          </Row>
          <div className="adminContant">
            <Card style={{ width: "100%" }}>
              <Card.Body className="mt-2" style={{ minHeight: "300px" }}>
                {currentPost && currentPost.length !== 0 ? (
                  <Table size="lg" responsive>
                    <thead
                      style={{
                        color: "#fff",
                        padding: "10px",
                        backgroundColor: '#FF7534',
                        textAlign: "left",
                        width: "100%",
                      }}
                    >
                      <tr style={{ width: "100%" }}>
                        {tablehead.map((el, id) => {
                          return (
                            <th
                              key={id}
                              // style={
                              //   id === 0
                              //     ? { width: "100%" }
                              //     : el === "Action"
                              //       ? { minWidth: "15vh", textAlign: "center" }
                              //       : { minWidth: "25vh" }
                              // }
                            >
                              {el}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody style={{ textAlign: "left" }}>
                      {currentPost.map((el, id) => {
                        return (
                          <tr key={id}>
                            <td>{id + 1}</td>
                            <td>{el.name}</td>
                            <td>{el.description}</td>
                            <td style={{ width: "20vh" }}>
                              {moment(el.createdAt).format("DD/MM/YYYY")}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <Dropdown>
                                <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={
                                  <Popover id="popover-basic">
                                    <Popover.Body>
                                      <Stack gap={2}>
                                        <Dropdown.Item
                                          onClick={() => {
                                            navigate(
                                              `/master/privacy/edit/${el._id}`
                                            );
                                          }}
                                        >
                                          <MdMode size={18} /> Edit
                                        </Dropdown.Item>
                                        {/* <Dropdown.Item
                                          onClick={() => handleStatus(el)}
                                        >
                                          <MdToggleOn size={18} /> Change Status
                                        </Dropdown.Item> */}
                                        <Dropdown.Item
                                          onClick={() => {
                                            handledelete(el._id);
                                          }}
                                        >
                                          <MdDelete size={18} /> Delete
                                        </Dropdown.Item>
                                      </Stack>
                                    </Popover.Body>
                                  </Popover>
                                }>
                                  <Dropdown.Toggle
                                    variant="light"
                                    id="dropdown-basic"
                                  >
                                    <BsThreeDotsVertical />
                                  </Dropdown.Toggle>
                                </OverlayTrigger>
                              </Dropdown>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                ) : (
                  <div>
                    <Nodata />
                  </div>
                )}
              </Card.Body>
              <Card.Footer
               style={{
                backgroundColor: "#fff",
                color: "#000",
                padding: "10px",
              }}
              >
                <div className="justify-content-between flex-wrap d-flex align-items-center">
                  <Card.Text className="footer-text">
                    Showing {indexOfFirstPost + 1}-{indexOfLastPost} out of{" "}
                    {posts.length}
                  </Card.Text>
                  <TablePagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                  />
                </div>
              </Card.Footer>
            </Card>
          </div>{" "}
        </>
      {/* )} */}
    </>
  );
};

class Rides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }
  render() {
    return (
      <div>
        {this.state.windowWidth >= 600 ? (
          <Sidebar>
            <Contant />
          </Sidebar>
        ) : (
          <div style={{ width: "95%", margin: "80px auto" }}>
            {" "}
            <Contant />
          </div>
        )}
      </div>
    );
  }
}

export default Rides;
