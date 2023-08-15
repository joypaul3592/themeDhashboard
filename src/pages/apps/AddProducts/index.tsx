import React from "react";
import PageTitle from "../../../components/PageTitle";
import { Col, Form, Row } from "react-bootstrap";

export default function index() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Apps", path: "/apps/addProducts" },
          {
            label: "Add Products",
            path: "/apps/addProducts",
            active: true,
          },
        ]}
        title={"Add Products"}
      />

      <div className=" bg-white p-2 rounded">
        <h4>Product Information</h4>
        <hr />

        <Form className="form-horizontal">
          <Row>
            <div className=" d-flex align-content-center justify-content-between col-12 gap-3 px-3">
              <Form.Group className="mb-3 col-6">
                <Form.Label column lg={2} htmlFor="simpleinput">
                  Product Name *
                </Form.Label>
                <Col lg={10}>
                  <Form.Control
                    type="text"
                    id="simpleinput"
                    defaultValue="Product Name"
                  />
                </Col>
              </Form.Group>

              <Form.Group className="mb-3 col-6 ">
                <Form.Label column lg={2}>
                  Category *
                </Form.Label>
                <Col lg={10}>
                  <Form.Select>
                    <option>Women Clothing</option>
                    <option>Beauty and Health</option>
                    <option>Man Shart</option>
                    <option>Women Shoe</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </div>
            <div className=" d-flex align-content-center justify-content-between col-12 gap-3 px-3">
              <Form.Group className="mb-3 col-6">
                <Form.Label column lg={2} htmlFor="simpleinput">
                  Tags *
                </Form.Label>
                <Col lg={10}>
                  <Form.Control
                    type="text"
                    id="simpleinput"
                    defaultValue="Type to add tags"
                  />
                </Col>
              </Form.Group>

              <Form.Group className="mb-3 col-6 ">
                <Form.Label column lg={2}>
                  Brand
                </Form.Label>
                <Col lg={10}>
                  <Form.Select>
                    <option>Ford</option>
                    <option>Jordan</option>
                    <option>Hyundai</option>
                    <option>Easy</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </div>
          </Row>
        </Form>
      </div>
    </>
  );
}
