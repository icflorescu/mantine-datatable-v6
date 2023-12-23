import { DataTable, useDataTableColumns } from 'mantine-datatable';
import { companies, type Company } from '~/data';

import { Button, Group, Stack } from '@mantine/core';

export default function DraggingExample() {
  const key = 'draggable-example';

  const { effectiveColumns, resetColumnsOrder } = useDataTableColumns<Company>({
    key,
    columns: [
      { accessor: 'name', width: '40%', draggable: true },
      { accessor: 'streetAddress', width: '60%', draggable: true },
      { accessor: 'city', width: 160, ellipsis: true, draggable: true },
      { accessor: 'state' },
    ],
  });

  return (
    <Stack>
      <DataTable withBorder withColumnBorders storeColumnsKey={key} records={companies} columns={effectiveColumns} />
      <Group position="right">
        <Button onClick={resetColumnsOrder}>Reset Column Order</Button>
      </Group>
    </Stack>
  );
}
