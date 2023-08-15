import React from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";

//dummy data

const records = [
  {
    id: 1,
    shopName: "Chawkbazar Vendor shop",
    amount: "$305.00",
    status: "Approved",
    created: "2 years ago",
    actions: "see",
  },
  {
    id: 2,
    shopName: "Chawkbazar Vendor shop",
    amount: "$305.00",
    status: "Approved",
    created: "2 years ago",
    actions: "see",
  },
  {
    id: 3,
    shopName: "Chawkbazar Vendor shop",
    amount: "$305.00",
    status: "Approved",
    created: "2 years ago",
    actions: "see",
  },
  {
    id: 4,
    shopName: "Chawkbazar Vendor shop",
    amount: "$305.00",
    status: "Approved",
    created: "2 years ago",
    actions: "see",
  },
  {
    id: 5,
    shopName: "Chawkbazar Vendor shop",
    amount: "$305.00",
    status: "Approved",
    created: "2 years ago",
    actions: "see",
  },
  {
    id: 6,
    shopName: "Chawkbazar Vendor shop",
    amount: "$305.00",
    status: "Approved",
    created: "2 years ago",
    actions: "see",
  },
  {
    id: 7,
    shopName: "Chawkbazar Vendor shop",
    amount: "$305.00",
    status: "Approved",
    created: "2 years ago",
    actions: "see",
  },
  {
    id: 8,
    shopName: "Chawkbazar Vendor shop",
    amount: "$305.00",
    status: "Approved",
    created: "2 years ago",
    actions: "see",
  },
  {
    id: 9,
    shopName: "Chawkbazar Vendor shop",
    amount: "$305.00",
    status: "Approved",
    created: "2 years ago",
    actions: "see",
  },
  {
    id: 10,
    shopName: "Chawkbazar Vendor shop",
    amount: "$305.00",
    status: "Approved",
    created: "2 years ago",
    actions: "see",
  },
];

const columns = [
  {
    Header: "Shop Name",
    accessor: "shopName",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Amount",
    accessor: "amount",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell }: { cell: any }) => (
      <div>
        {cell.value === "Approved" && (
          <button className="btn btn-soft-info btn-sm">Approved</button>
        )}
      </div>
    ),
  },
  {
    Header: "Created",
    accessor: "created",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Actions",
    accessor: "actions",
    Cell: ({ cell }: { cell: any }) => (
      <div>
        <>
          <i
            className="bi bi-eye me-4"
            style={{ fontSize: "1.2rem", color: "gray" }}
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
          { label: "Apps", path: "/apps/withdrawals" },
          {
            label: "Withdrawals List",
            path: "/apps/withdrawals",
            active: true,
          },
        ]}
        title={"Withdrawals List"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Orders</h4>
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
                nameFor={"Withdrawals"}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
