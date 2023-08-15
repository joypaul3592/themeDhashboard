import { Row, Col, Card } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";
import Table from "../../../components/Table";

//dummy data
const records = [
  {
    id: 1,
    name: "Burt",
    shop: "Chawkbazar Vendor shop...",
    values: "Red, Blue, Yellow",
    actions: "edit delete",
  },
  {
    id: 2,
    name: "Bruno",
    shop: "Chawkbazar Vendor shop...",
    values: "Small, Medium, Large",
    actions: "edit delete",
  },
  {
    id: 3,
    name: "Alvarado",
    shop: "Chawkbazar Vendor shop...",
    values: "Red, Blue, Yellow",
    actions: "edit delete",
  },
  {
    id: 4,
    name: "Lilia",
    shop: "Chawkbazar Vendor shop...",
    values: "Small, Medium, Large",
    actions: "edit delete",
  },
  {
    id: 5,
    name: "Amanda",
    shop: "Chawkbazar Vendor shop...",
    values: "Red, Blue, Yellow",
    actions: "edit delete",
  },
  {
    id: 6,
    name: "Alexandra",
    shop: "Chawkbazar Vendor shop...",
    values: "Small, Medium, Large",
    actions: "edit delete",
  },
  {
    id: 7,
    name: "Diana",
    shop: "Chawkbazar Vendor shop...",
    values: "Red, Blue, Yellow",
    actions: "edit delete",
  },
  {
    id: 8,
    name: "Goodman",
    shop: "Chawkbazar Vendor shop...",
    values: "Small, Medium, Large",
    actions: "edit delete",
  },
  {
    id: 9,
    name: "Edith",
    shop: "Chawkbazar Vendor shop...",
    values: "Red, Blue, Yellow",
    actions: "edit delete",
  },
  {
    id: 10,
    name: "Juana",
    shop: "Chawkbazar Vendor shop...",
    values: "Small, Medium, Large",
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
    Header: "Shop",
    accessor: "shop",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
  },
  {
    Header: "Values",
    accessor: "values",
    Cell: ({ cell }: { cell: any }) => <div>{cell.value}</div>,
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
          { label: "Apps", path: "/apps/attributes" },
          {
            label: "Attributes List",
            path: "/apps/attributes",
            active: true,
          },
        ]}
        title={"Attributes List"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Attributes</h4>
              <p className="text-muted fs-14 mb-4">A Table For Attributes</p>

              <Table
                columns={columns}
                data={records}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
                nameFor={"Attributes"}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
