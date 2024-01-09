import { Button, Group, Stack } from '@mantine/core';
import { DataTable, useDataTableColumns } from 'mantine-datatable';
import { companies } from '~/data';

export default function TogglingExample() {
  const key = 'toggleable-example';

  const { effectiveColumns, resetColumnsToggle } = useDataTableColumns({
    key,
    columns: [
      { accessor: 'name', width: '40%', toggleable: true, defaultToggle: false },
      { accessor: 'streetAddress', width: '60%', toggleable: true },
      { accessor: 'city', width: 160, toggleable: true },
      { accessor: 'state' },
    ],
  });

  return (
    <Stack>
      <DataTable withBorder withColumnBorders storeColumnsKey={key} records={companies} columns={effectiveColumns} />
      <Group position="right">
        <Button onClick={resetColumnsToggle}>Reset Column Toggled</Button>
      </Group>
    </Stack>
  );
}
