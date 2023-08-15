import React from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";

//dummy data

const records = [
  {
    id: 1,
    name: "Backpack",
    icon: "Icon",
    slug: "new-backpack",
    actions: "edit delete",
  },
  {
    id: 2,
    name: "Coupons",
    icon: "Icon",
    slug: "product-coupons",
    actions: "edit delete",
  },
  {
    id: 3,
    name: "Featured Products",
    icon: "Icon",
    slug: "featured-products",
    actions: "edit delete",
  },
  {
    id: 4,
    name: "Flash Sale",
    icon: "Icon",
    slug: "flash-sale",
    actions: "edit delete",
  },
  {
    id: 5,
    name: "Gift Collection",
    icon: "Icon",
    slug: "gift-collection",
    actions: "edit delete",
  },
  {
    id: 6,
    name: "Kids Collection",
    icon: "Icon",
    slug: "kids-collection",
    actions: "edit delete",
  },
  {
    id: 7,
    name: "Men's Collection",
    icon: "Icon",
    slug: "men's Collection",
    actions: "edit delete",
  },
  {
    id: 8,
    name: "	On Sale",
    icon: "Icon",
    slug: "	on Sale",
    actions: "edit delete",
  },
  {
    id: 9,
    name: "	Sports",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 10,
    name: "Sunglass",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 11,
    name: "Women",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 12,
    name: "	Sports",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 13,
    name: "Sunglass",
    icon: "Icon",
    slug: "Sunglass",
    actions: "edit delete",
  },
  {
    id: 14,
    name: "Watch",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 15,
    name: "Sunglass",
    icon: "Icon",
    slug: "Sunglass",
    actions: "edit delete",
  },
  {
    id: 16,
    name: "Women",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 17,
    name: "	Sports",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 18,
    name: "Sunglass",
    icon: "Icon",
    slug: "Sunglass",
    actions: "edit delete",
  },
  {
    id: 19,
    name: "Watch",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 20,
    name: "	Sports",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 21,
    name: "	Sports",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 22,
    name: "Watch",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 23,
    name: "Sunglass",
    icon: "Icon",
    slug: "Sunglass",
    actions: "edit delete",
  },
  {
    id: 24,
    name: "Watch",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 25,
    name: "	Sports",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 26,
    name: "Sunglass",
    icon: "Icon",
    slug: "Sunglass",
    actions: "edit delete",
  },
  {
    id: 27,
    name: "Watch",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 28,
    name: "Women",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 29,
    name: "Sunglass",
    icon: "Icon",
    slug: "Sunglass",
    actions: "edit delete",
  },
  {
    id: 30,
    name: "Watch",
    icon: "Icon",
    slug: "Watch",
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
    Header: "Slug",
    accessor: "slug",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Icon",
    accessor: "icon",
    Cell: ({ cell }: { cell: any }) => (
      <div>
        <i
          className="bi bi-cart-check"
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
          { label: "Apps", path: "/apps/tags" },
          {
            label: "Tags List",
            path: "/apps/tags",
            active: true,
          },
        ]}
        title={"Tags List"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Tags</h4>
              <p className="text-muted fs-14 mb-4">
                Search your valuable Tags.
              </p>
              <Table
                columns={columns}
                data={records}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
                nameFor={"Tags"}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
