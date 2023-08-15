import React from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";

//dummy data
// import { records as data } from "../../tables/data";
import userImg1 from "../../../assets/images/users/avatar-8.jpg";
import userImg2 from "../../../assets/images/users/avatar-7.jpg";
import userImg3 from "../../../assets/images/users/avatar-5.jpg";

const records = [
  {
    id: 1,
    name: "Burt",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 2,
    name: "Bruno",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 3,
    name: "Alvarado",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 4,
    name: "Lilia",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 5,
    name: "Amanda",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 6,
    name: "Alexandra",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 7,
    name: "Diana",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 8,
    name: "Goodman",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 9,
    name: "Edith",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 10,
    name: "Juana",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 11,
    name: "Fitzgerald",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 12,
    name: "Madden",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 13,
    name: "Jewell",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 14,
    name: "Kerr",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 15,
    name: "Washington",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 16,
    name: "Audrey",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 17,
    name: "Allison",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 18,
    name: "Holder",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 19,
    name: "Atkinson",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 20,
    name: "Delaney",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 21,
    name: "Myrna",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 22,
    name: "Erna",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 23,
    name: "Fannie",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 24,
    name: "Melody",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 25,
    name: "Letitia",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 26,
    name: "Nina",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 27,
    name: "Byrd",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 28,
    name: "Chen",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 29,
    name: "Alexandria",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 30,
    name: "Page",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
  {
    id: 31,
    name: "Clare",
    img: "img",
    Icon: "Icon",
    actions: "edit delete",
  },
];

const columns = [
  {
    Header: "ID",
    accessor: "id",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },

  {
    Header: "Image",
    accessor: "img",
    Cell: ({ cell }: { cell: any }) => (
      <div className=" d-flex ">
        <img
          className="rounded me-1"
          src={userImg1}
          alt="User"
          width="40"
          height="40"
        />
        <img
          className="rounded me-1"
          src={userImg2}
          alt="User"
          width="40"
          height="40"
        />
        <img
          className="rounded me-1"
          src={userImg3}
          alt="User"
          width="40"
          height="40"
        />
      </div>
    ),
  },

  {
    Header: "Icon",
    accessor: "Icon",
    Cell: ({ cell }: { cell: any }) => (
      <div>
        <i
          className="bi bi-house"
          style={{ fontSize: "1.2rem", color: "gray" }}
        ></i>
      </div>
    ),
  },
  {
    Header: "Actions",
    accessor: "actions",
    Cell: ({ cell }: { cell: any }) => (
      <div>
        <>
          <i
            className="bi bi-pencil-square me-4"
            style={{ fontSize: "1.2rem", color: "gray" }}
          ></i>
          <i
            className="bi bi-trash"
            style={{ fontSize: "1.2rem", color: "red" }}
          ></i>
        </>
      </div>
    ),
  },
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: records.length,
  },
];

export default function index() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Apps", path: "/apps/brands" },
          {
            label: "Brands List",
            path: "/apps/brands",
            active: true,
          },
        ]}
        title={"Brands List"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Brands</h4>
              <p className="text-muted fs-14 mb-4">
                Search your valuable Brands.
              </p>
              <Table
                columns={columns}
                data={records}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
                nameFor={"Brands"}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
