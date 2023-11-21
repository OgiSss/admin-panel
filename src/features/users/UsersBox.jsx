import Table from "../../ui/Table";
import useUsers from "./useUsers";
import Spinner from "../../ui/Spinner";
import useDeleteUser from "./useDeleteUser";
import useEditUsers from "./useEditUsers";
import AddUser from "./AddUser";

function UsersBox() {
  const { isLoading, users } = useUsers();
  const { deleteUser } = useDeleteUser();
  const { editUsers } = useEditUsers();

  const data =
    users?.data?.map((user) => {
      return {
        ...user.attributes,
        id: user.id,
      };
    }) || [];

  function handleEditClick(user) {
    editUsers(user);
  }

  function handleRemoveClick(user) {
    deleteUser(user.id);
  }

  return (
    <>
      <AddUser />
      <Table
        columns="1fr 1fr 1fr 1fr 1fr 60px"
        handleEditClick={handleEditClick}
        handleRemoveClick={handleRemoveClick}
        isActionsAvailable={true}
        cellNames={["id", "name", "surname", "email", "phoneNumber"]}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Table.Headers>
              <Table.HeaderColumn>ID</Table.HeaderColumn>
              <Table.HeaderColumn>NAME</Table.HeaderColumn>
              <Table.HeaderColumn>SURNAME</Table.HeaderColumn>
              <Table.HeaderColumn>EMAIL</Table.HeaderColumn>
              <Table.HeaderColumn>Phone number</Table.HeaderColumn>
            </Table.Headers>
            <Table.Body
              data={data}
              render={(item, index) => (
                <Table.Row key={index} data={item}></Table.Row>
              )}
            ></Table.Body>
          </>
        )}
      </Table>
    </>
  );
}

export default UsersBox;
