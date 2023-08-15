import React from "react";
import PageTitle from "../../../components/PageTitle";
import { Form } from "react-bootstrap";
import upoloadImg from "../../../assets/images/covers/2.jpg";

export default function index() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Apps", path: "/apps/uploadedFile" },
          {
            label: "Uploaded File",
            path: "/apps/uploadedFile",
            active: true,
          },
        ]}
        title={"All uploaded files"}
      />

      <div className=" bg-white w-100 rounded row ">
        <div className=" d-flex align-items-center justify-content-between p-3 ">
          <button className=" btn btn-soft-primary ">Upload New File</button>
          <div className=" d-flex align-items-center ">
            <Form.Select
              style={{ width: "400px" }}
              className="cursor-pointer me-4 border-primary "
              aria-label="Default select example"
            >
              <option defaultValue="0">Sort by newest</option>
              <option value="1">Sort by oldest</option>
              <option value="2">Sort by smallest</option>
              <option value="3">Sort by largest</option>
            </Form.Select>

            <Form.Group style={{ width: "400px" }} className=" me-4 ">
              <Form.Control
                type="text"
                id="simpleinput"
                className=" border-primary"
                defaultValue="Search your files"
              />
            </Form.Group>
            <button className=" btn btn-primary">Search</button>
          </div>
        </div>
        <hr />
        <div className=" p-3 pt-0  ">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            label="Select All"
            className=" cursor-pointer mb-2"
          />
          <div className=" d-flex justify-content-between flex-wrap gap-3 ">
            <div className="  position-relative ">
              <div className="   bg-info">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="position-absolute top-2 end-2"
                />

                <div className=" d-inline position-absolute top-0 end-0 bg-white">
                  <i className="bi bi-three-dots-vertical "></i>
                </div>
                <img src={upoloadImg} alt="upoloadImg" className=" w-100" />
              </div>
              <h5 className=" mb-0 pb-0">Group 25674 .png</h5>
              <small>736.65 KB</small>
            </div>
            <div className="  position-relative">
              <div className="   bg-info">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="position-absolute top-2 end-2"
                />

                <div className=" d-inline position-absolute top-0 end-0 bg-white">
                  <i className="bi bi-three-dots-vertical "></i>
                </div>
                <img src={upoloadImg} alt="upoloadImg" className=" w-100" />
              </div>
              <h5 className=" mb-0 pb-0">Group 25674 .png</h5>
              <small>736.65 KB</small>
            </div>
            <div className="  position-relative">
              <div className="   bg-info">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="position-absolute top-2 end-2"
                />

                <div className=" d-inline position-absolute top-0 end-0 bg-white">
                  <i className="bi bi-three-dots-vertical "></i>
                </div>
                <img src={upoloadImg} alt="upoloadImg" className=" w-100" />
              </div>
              <h5 className=" mb-0 pb-0">Group 25674 .png</h5>
              <small>736.65 KB</small>
            </div>
            <div className="  position-relative">
              <div className="   bg-info">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="position-absolute top-2 end-2"
                />

                <div className=" d-inline position-absolute top-0 end-0 bg-white">
                  <i className="bi bi-three-dots-vertical "></i>
                </div>
                <img src={upoloadImg} alt="upoloadImg" className=" w-100" />
              </div>
              <h5 className=" mb-0 pb-0">Group 25674 .png</h5>
              <small>736.65 KB</small>
            </div>
            <div className="  position-relative">
              <div className="   bg-info">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="position-absolute top-2 end-2"
                />

                <div className=" d-inline position-absolute top-0 end-0 bg-white">
                  <i className="bi bi-three-dots-vertical "></i>
                </div>
                <img src={upoloadImg} alt="upoloadImg" className=" w-100" />
              </div>
              <h5 className=" mb-0 pb-0">Group 25674 .png</h5>
              <small>736.65 KB</small>
            </div>
            <div className="  position-relative">
              <div className="   bg-info">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="position-absolute top-2 end-2"
                />

                <div className=" d-inline position-absolute top-0 end-0 bg-white">
                  <i className="bi bi-three-dots-vertical "></i>
                </div>
                <img src={upoloadImg} alt="upoloadImg" className=" w-100" />
              </div>
              <h5 className=" mb-0 pb-0">Group 25674 .png</h5>
              <small>736.65 KB</small>
            </div>
            <div className="  position-relative">
              <div className="   bg-info">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="position-absolute top-2 end-2"
                />

                <div className=" d-inline position-absolute top-0 end-0 bg-white">
                  <i className="bi bi-three-dots-vertical "></i>
                </div>
                <img src={upoloadImg} alt="upoloadImg" className=" w-100" />
              </div>
              <h5 className=" mb-0 pb-0">Group 25674 .png</h5>
              <small>736.65 KB</small>
            </div>
            <div className="  position-relative">
              <div className="   bg-info">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="position-absolute top-2 end-2"
                />

                <div className=" d-inline position-absolute top-0 end-0 bg-white">
                  <i className="bi bi-three-dots-vertical "></i>
                </div>
                <img src={upoloadImg} alt="upoloadImg" className=" w-100" />
              </div>
              <h5 className=" mb-0 pb-0">Group 25674 .png</h5>
              <small>736.65 KB</small>
            </div>
            <div className="  position-relative">
              <div className="   bg-info">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="position-absolute top-2 end-2"
                />

                <div className=" d-inline position-absolute top-0 end-0 bg-white">
                  <i className="bi bi-three-dots-vertical "></i>
                </div>
                <img src={upoloadImg} alt="upoloadImg" className=" w-100" />
              </div>
              <h5 className=" mb-0 pb-0">Group 25674 .png</h5>
              <small>736.65 KB</small>
            </div>
            <div className=" position-relative">
              <div className="   bg-info">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="position-absolute top-2 end-2"
                />

                <div className=" d-inline position-absolute top-0 end-0 bg-white">
                  <i className="bi bi-three-dots-vertical "></i>
                </div>
                <img src={upoloadImg} alt="upoloadImg" className=" w-100" />
              </div>
              <h5 className=" mb-0 pb-0">Group 25674 .png</h5>
              <small>736.65 KB</small>
            </div>
            <div className="  position-relative">
              <div className="   bg-info">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="position-absolute top-2 end-2"
                />

                <div className=" d-inline position-absolute top-0 end-0 bg-white">
                  <i className="bi bi-three-dots-vertical "></i>
                </div>
                <img src={upoloadImg} alt="upoloadImg" className=" w-100" />
              </div>
              <h5 className=" mb-0 pb-0">Group 25674 .png</h5>
              <small>736.65 KB</small>
            </div>
            <div className="  position-relative">
              <div className="   bg-info">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="position-absolute top-2 end-2"
                />

                <div className=" d-inline position-absolute top-0 end-0 bg-white">
                  <i className="bi bi-three-dots-vertical "></i>
                </div>
                <img src={upoloadImg} alt="upoloadImg" className=" w-100" />
              </div>
              <h5 className=" mb-0 pb-0">Group 25674 .png</h5>
              <small>736.65 KB</small>
            </div>
          </div>

          <nav aria-label="..." className=" mt-5">
            <ul className="pagination">
              <li className="page-item disabled">
                <span className="page-link">Previous</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <span className="page-link">
                  2<span className="sr-only"></span>
                </span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
