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
import userImg4 from "../../../assets/images/users/avatar-5.jpg";

const records = [
  {
    id: 1,
    name: "Women",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 2,
    name: "Watch",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 3,
    name: "	Sports",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 4,
    name: "Sunglass",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 5,
    name: "Women",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 6,
    name: "Sunglass",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 7,
    name: "Women",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 8,
    name: "Watch",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 9,
    name: "	Sports",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 10,
    name: "Sunglass",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 11,
    name: "Women",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 12,
    name: "	Sports",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 13,
    name: "Sunglass",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sunglass",
    actions: "edit delete",
  },
  {
    id: 14,
    name: "Watch",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 15,
    name: "Sunglass",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sunglass",
    actions: "edit delete",
  },
  {
    id: 16,
    name: "Women",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 17,
    name: "	Sports",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 18,
    name: "Sunglass",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sunglass",
    actions: "edit delete",
  },
  {
    id: 19,
    name: "Watch",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 20,
    name: "	Sports",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 21,
    name: "	Sports",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 22,
    name: "Watch",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 23,
    name: "Sunglass",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sunglass",
    actions: "edit delete",
  },
  {
    id: 24,
    name: "Watch",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 25,
    name: "	Sports",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sports",
    actions: "edit delete",
  },
  {
    id: 26,
    name: "Sunglass",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sunglass",
    actions: "edit delete",
  },
  {
    id: 27,
    name: "Watch",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 28,
    name: "Women",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Women",
    actions: "edit delete",
  },
  {
    id: 29,
    name: "Sunglass",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sunglass",
    actions: "edit delete",
  },
  {
    id: 30,
    name: "Watch",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Watch",
    actions: "edit delete",
  },
  {
    id: 31,
    name: "	Sports",
    details: "	A wonderful serenity has taken possession of m...",
    img: "img",
    bannerimg: "bannerimg",
    icon: "Icon",
    slug: "Sports",
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
    Header: "Details",
    accessor: "details",
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
    Header: "Banner Image",
    accessor: "bannerimg",
    Cell: ({ cell }: { cell: any }) => (
      <div className=" d-flex ">
        <img
          className="rounded me-1"
          src={userImg4}
          alt="User"
          width="80"
          height="40"
        />
      </div>
    ),
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
          { label: "Apps", path: "/apps/categories" },
          {
            label: "Categories List",
            path: "/apps/categories",
            active: true,
          },
        ]}
        title={"Categories List"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Categories</h4>
              <p className="text-muted fs-14 mb-4">
                Search your valuable Categories.
              </p>
              <Table
                columns={columns}
                data={records}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
                nameFor={"Categories"}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
