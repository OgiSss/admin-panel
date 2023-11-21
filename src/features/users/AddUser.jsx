import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import UserForm from "./UserForm";
import useAddUser from "./useAddUser";
import Input from "../../ui/Input";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const StyledButtonAdd = styled(Button)`
  max-width: 10rem;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

function AddUser() {
  const { isLoading, addUser } = useAddUser();
  let [, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState("");

  function handleAddClick(data) {
    addUser(data);
  }

  useEffect(() => {
    if (search) {
      setSearchParams({ filter: search });
    } else {
      setSearchParams({});
    }
  }, [search, setSearchParams]);

  return (
    <>
      <StyledHeader>
        <Input
          name="search"
          placeholder="Search..."
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Modal>
          <Modal.Open opens="add">
            <StyledButtonAdd>Add user</StyledButtonAdd>
          </Modal.Open>
          <Modal.Window name="add">
            <UserForm
              isLoading={isLoading}
              onConfirm={(data) => handleAddClick(data)}
              isEdit={false}
            />
          </Modal.Window>
        </Modal>
      </StyledHeader>
    </>
  );
}

export default AddUser;
