import React from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";

//dummy data
// import { records as data } from "../../tables/data";
import userImg from "../../../assets/images/users/avatar-3.jpg";

const records = [
  {
    id: 1,
    img: userImg,
    name: "Admin",
    email: "admin@demo.com",
    permissions: "customer",
    point: "2455.00",
    status: "Active",
    actions: "edit delete",
  },
  {
    id: 2,
    img: userImg,
    name: "Admin",
    email: "admin@demo.com",
    permissions: "customer",
    point: "2455.00",
    status: "Active",
    actions: "edit delete",
  },
  {
    id: 3,
    img: userImg,
    name: "Admin",
    email: "admin@demo.com",
    permissions: "customer",
    point: "2455.00",
    status: "Active",
    actions: "edit delete",
  },
  {
    id: 4,
    img: userImg,
    name: "Admin",
    email: "admin@demo.com",
    permissions: "customer",
    point: "2455.00",
    status: "Active",
    actions: "edit delete",
  },
  {
    id: 5,
    img: userImg,
    name: "Admin",
    email: "admin@demo.com",
    permissions: "customer",
    point: "2455.00",
    status: "Active",
    actions: "edit delete",
  },
  {
    id: 6,
    img: userImg,
    name: "Admin",
    email: "admin@demo.com",
    permissions: "customer",
    point: "2455.00",
    status: "Active",
    actions: "edit delete",
  },
  {
    id: 7,
    img: userImg,
    name: "Admin",
    email: "admin@demo.com",
    permissions: "customer",
    point: "2455.00",
    status: "Active",
    actions: "edit delete",
  },
  {
    id: 8,
    img: userImg,
    name: "Admin",
    email: "admin@demo.com",
    permissions: "customer",
    point: "2455.00",
    status: "Active",
    actions: "edit delete",
  },
  {
    id: 9,
    img: userImg,
    name: "Admin",
    email: "admin@demo.com",
    permissions: "customer",
    point: "2455.00",
    status: "Active",
    actions: "edit delete",
  },
  {
    id: 10,
    img: userImg,
    name: "Admin",
    email: "admin@demo.com",
    permissions: "customer",
    point: "2455.00",
    status: "Active",
    actions: "edit delete",
  },
];

const columns = [
  {
    Header: "Avator",
    accessor: "img",
    Cell: ({ cell }: { cell: any }) => (
      <div>
        <img
          className="rounded"
          src={cell.value}
          alt="User"
          width="40"
          height="40"
        />
      </div>
    ),
  },
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Email",
    accessor: "email",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Permissions",
    accessor: "permissions",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Available wallet points",
    accessor: "point",
    Cell: ({ cell }: { cell: any }) => <div></div>,
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell }: { cell: any }) => (
      <div>
        {cell.value === "Active" && (
          <button className="btn btn-success btn-sm">Active</button>
        )}
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
            className="bi bi-person-check-fill me-3"
            style={{ fontSize: "1.2rem", color: "gray" }}
          ></i>
          <i
            className="bi bi-arrow-down-right-square me-3"
            style={{ fontSize: "1.2rem", color: "blue" }}
          ></i>
          <i
            className="bi bi-x-octagon"
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
          { label: "Apps", path: "/apps/users" },
          {
            label: "Users List",
            path: "/apps/users",
            active: true,
          },
        ]}
        title={"Users List"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Users</h4>
              <p className="text-muted fs-14 mb-4">
                Search your valuable product.
              </p>
              <Table
                columns={columns}
                data={records}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
                nameFor={"Users"}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
