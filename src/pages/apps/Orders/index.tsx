import React from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";

//dummy data

const records = [
  {
    id: 1,
    trackingNumber: "20230320801834",
    deliveryFee: "$50.00",
    total: "$305.00",
    orderDate: "5 months ago",
    status: "Publish",
    shippingAddress: "1780 Angus Road, New York, New York, 10022, US",
    actions: "see",
  },
  {
    id: 2,
    trackingNumber: "20230320801834",
    deliveryFee: "$50.00",
    total: "$305.00",
    orderDate: "5 months ago",
    status: "Publish",
    shippingAddress: "1780 Angus Road, New York, New York, 10022, US",
    actions: "see",
  },
  {
    id: 3,
    trackingNumber: "20230320801834",
    deliveryFee: "$50.00",
    total: "$305.00",
    orderDate: "5 months ago",
    status: "Publish",
    shippingAddress: "1780 Angus Road, New York, New York, 10022, US",
    actions: "see",
  },
  {
    id: 4,
    trackingNumber: "20230320801834",
    deliveryFee: "$50.00",
    total: "$305.00",
    orderDate: "5 months ago",
    status: "Publish",
    shippingAddress: "1780 Angus Road, New York, New York, 10022, US",
    actions: "see",
  },
  {
    id: 5,
    trackingNumber: "20230320801834",
    deliveryFee: "$50.00",
    total: "$305.00",
    orderDate: "5 months ago",
    status: "Publish",
    shippingAddress: "1780 Angus Road, New York, New York, 10022, US",
    actions: "see",
  },
  {
    id: 6,
    trackingNumber: "20230320801834",
    deliveryFee: "$50.00",
    total: "$305.00",
    orderDate: "5 months ago",
    status: "Publish",
    shippingAddress: "1780 Angus Road, New York, New York, 10022, US",
    actions: "see",
  },
  {
    id: 7,
    trackingNumber: "20230320801834",
    deliveryFee: "$50.00",
    total: "$305.00",
    orderDate: "5 months ago",
    status: "Publish",
    shippingAddress: "1780 Angus Road, New York, New York, 10022, US",
    actions: "see",
  },
  {
    id: 8,
    trackingNumber: "20230320801834",
    deliveryFee: "$50.00",
    total: "$305.00",
    orderDate: "5 months ago",
    status: "Publish",
    shippingAddress: "1780 Angus Road, New York, New York, 10022, US",
    actions: "see",
  },
  {
    id: 9,
    trackingNumber: "20230320801834",
    deliveryFee: "$50.00",
    total: "$305.00",
    orderDate: "5 months ago",
    status: "Publish",
    shippingAddress: "1780 Angus Road, New York, New York, 10022, US",
    actions: "see",
  },
  {
    id: 10,
    trackingNumber: "20230320801834",
    deliveryFee: "$50.00",
    total: "$305.00",
    orderDate: "5 months ago",
    status: "Publish",
    shippingAddress: "1780 Angus Road, New York, New York, 10022, US",
    actions: "see",
  },
];

const columns = [
  {
    Header: "ID",
    accessor: "id",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Tracking Number",
    accessor: "trackingNumber",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Delivery Fee",
    accessor: "deliveryFee",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Total",
    accessor: "total",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Order Date",
    accessor: "orderDate",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell }: { cell: any }) => (
      <div>
        {cell.value === "Publish" && (
          <button className="btn btn-soft-success btn-sm">Publish</button>
        )}
      </div>
    ),
  },
  {
    Header: "Shipping Address",
    accessor: "shippingAddress",
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
          { label: "Apps", path: "/apps/orders" },
          {
            label: "Orders List",
            path: "/apps/products",
            active: true,
          },
        ]}
        title={"Orders List"}
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
                nameFor={"Orders"}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
