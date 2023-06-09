import { useEffect, useState } from "react";
import { Table } from "antd";
import { usePersistedState } from "../hooks/usePersistedState";
import storageKeys from "../constants/storageKeys";
import { getUsers } from "../api/api";
import Loading from "../components/UI/Loading/Loading";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>View</a>,
  },
];

const Users = () => {
  const [users, setUsers, isCached] = usePersistedState(storageKeys.users, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isCached) {
      getUsers().then((data) => {
        const modData = data.map((item) => {
          return { key: item.id, ...item };
        });
        setUsers(modData);
      });
      console.log(users);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <Table
        className="overflow-y-scroll"
        key={users.id}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <>
              <p
                style={{
                  margin: 0,
                }}
              >
                Email: {record.email}
              </p>
              <p>
                Address:{" "}
                {record.address.city +
                  ", " +
                  record.address.street +
                  "," +
                  record.address.suite}
              </p>
            </>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={users}
      />
    </>
  );
};

export default Users;
