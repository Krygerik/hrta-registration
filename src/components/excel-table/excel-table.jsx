import * as React from "react";
import { Table } from 'semantic-ui-react'

export const ExcelTable = React.memo((props) => {
  const [tableData, setTableData] = React.useState([]);

  React.useEffect(() => {
    const fetchRows = async () => {
      const rows = await props.firstSheet.getRows();
      console.log('props.firstSheet:', props.firstSheet);

      setTableData(rows);
    }

    if (props.firstSheet) {
      fetchRows();
    }
  }, [props.firstSheet]);

  return (
    <Table singleLine>
      {
        !!props?.firstSheet?.headerValues?.length && (
          <Table.Header>
            <Table.Row>
              {
                props?.firstSheet?.headerValues.map((item, key) => (
                  <Table.HeaderCell key={key}>
                    {item}
                  </Table.HeaderCell>
                ))
              }
            </Table.Row>
          </Table.Header>
        )
      }
      {
        !!tableData.length && (
          <Table.Body>
            {
              tableData.map((item, key) => (
                <Table.Row key={key}>
                  <Table.Cell>{item.timeRegistration}</Table.Cell>
                  <Table.Cell>{item.nickName}</Table.Cell>
                  <Table.Cell>{item.discord}</Table.Cell>
                  <Table.Cell>{item.email}</Table.Cell>
                  <Table.Cell>{item.desiredPlayTime}</Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        )
      }
    </Table>
  )
});
