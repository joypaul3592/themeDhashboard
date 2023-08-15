import PageTitle from "../../../components/PageTitle";
import { Button, Col, Form, Row } from "react-bootstrap";
import Select from "react-select";
import FileUploader from "../../../components/FileUploader";
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
                <Form.Label column lg={2} htmlFor="Quantity">
                  Quantity
                </Form.Label>
                <Col lg={10}>
                  <Form.Control
                    type="text"
                    id="Quantity"
                    defaultValue="Type to add Quantity"
                  />
                </Col>
              </Form.Group>

              <Form.Group className="mb-3 col-6 ">
                <Form.Label column lg={2}>
                  Product Type
                </Form.Label>
                <Col lg={10}>
                  <Form.Select>
                    <option>variable</option>
                    <option>simple</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </div>
            <div className=" d-flex align-content-center justify-content-between col-12 gap-3 px-3">
              <Form.Group className="mb-3 col-6">
                <Form.Label column lg={2} htmlFor="price">
                  Price/Unit
                </Form.Label>
                <Col lg={10}>
                  <Form.Control
                    type="text"
                    id="price"
                    defaultValue="Type to add price"
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-3 col-6">
                <Form.Label column lg={2} htmlFor="tags">
                  Tags *
                </Form.Label>
                <Col lg={10}>
                  <Select
                    id="tags"
                    isMulti={true}
                    options={[
                      { value: "on-sale", label: "on-sale" },
                      { value: "winter-offer", label: "winter-offer" },
                      {
                        value: "gift-collection",
                        label: "Vangift-collectionilla",
                      },
                      {
                        value: "winter-collection",
                        label: "winter-collection",
                      },
                      { value: "kids-collection", label: "kids-collection" },
                      { value: "flash-sale", label: "flash-sale" },
                    ]}
                    className="react-select"
                    classNamePrefix="react-select"
                  ></Select>
                </Col>
              </Form.Group>
            </div>
            <div className=" px-3">
              <FileUploader
                onFileUpload={(files) => {
                  console.log("Uploaded files - ", files);
                }}
              />

              <div className="clearfix text-end mt-3">
                <Button variant="danger">
                  <i className="uil uil-arrow-right me-1"></i> Submit
                </Button>
              </div>
            </div>
          </Row>
        </Form>
      </div>
    </>
  );
}
