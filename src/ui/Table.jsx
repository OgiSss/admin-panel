import { createContext, useContext } from "react";
import styled from "styled-components";
import ContextMenu from "./ContextMenu";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import Modal from "./Modal";
import YesNoDialog from "./YesNoDialog";
import UserForm from "../features/users/UserForm";

const StyledTable = styled.div`
  border: 0.1rem solid var(--color-grey-200);

  font-size: 1.6rem;
  background-color: var(--color-grey-0);
  border-radius: 0.7rem;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns};
  align-items: center;
  transition: none;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 1rem 1.6rem;
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns};

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns};
  font-size: 1.6rem;
  align-items: center;
  padding: 0 1.6rem;

  &:nth-child(2n) {
    background-color: var(--color-grey-50);
  }
`;

const StyledBody = styled.section`
  margin: 0;
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const StyledCell = styled.div`
  padding: 1rem 0;
`;

const StyledActionsCell = styled.div`
  padding: 1rem 1.6rem;
`;

const StyledHeaderColumn = styled.div``;

const TableContext = createContext();

function Table({
  children,
  columns,
  isActionsAvailable,
  handleEditClick,
  handleRemoveClick,
  cellNames,
}) {
  return (
    <TableContext.Provider
      value={{
        columns,
        isActionsAvailable,
        handleEditClick,
        handleRemoveClick,
        cellNames,
      }}
    >
      <StyledTable role="table" $columns={columns}>
        {children}
      </StyledTable>
    </TableContext.Provider>
  );
}

function Headers({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" $columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}

function HeaderColumn({ children }) {
  return <StyledHeaderColumn>{children}</StyledHeaderColumn>;
}

function Cell({ children }) {
  return <StyledCell>{children}</StyledCell>;
}

function ActionsCell({ rowData }) {
  const { handleEditClick, handleRemoveClick } = useContext(TableContext);
  return (
    <StyledActionsCell>
      <Modal>
        <ContextMenu>
          <ContextMenu.Toggle id="actionsCell">
            <HiMiniEllipsisVertical />
          </ContextMenu.Toggle>

          <ContextMenu.List id="actionsCell">
            <Modal.Open opens="edit">
              <ContextMenu.Button>Edit</ContextMenu.Button>
            </Modal.Open>
            <Modal.Open opens="remove">
              <ContextMenu.Button>Remove</ContextMenu.Button>
            </Modal.Open>
          </ContextMenu.List>
        </ContextMenu>

        <Modal.Window name="edit">
          {
            <UserForm
              onConfirm={(data) => handleEditClick(data)}
              isEdit={true}
              userToEdit={rowData}
            />
          }
        </Modal.Window>
        <Modal.Window name="remove">
          <YesNoDialog
            onConfirm={() => handleRemoveClick(rowData)}
            cancelLabel="Cancel"
            confirmLabel="Yes"
          />
        </Modal.Window>
      </Modal>
    </StyledActionsCell>
  );
}

function Row({ data }) {
  const { columns, isActionsAvailable, cellNames } = useContext(TableContext);
  return (
    <StyledRow role="row" $columns={columns}>
      {cellNames.map((item, index) => (
        <Cell key={index}>{data[item]}</Cell>
      ))}
      {isActionsAvailable && <ActionsCell rowData={data} />}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Headers = Headers;
Table.HeaderColumn = HeaderColumn;
Table.Row = Row;
Table.Body = Body;
Table.Cell = Cell;

export default Table;
