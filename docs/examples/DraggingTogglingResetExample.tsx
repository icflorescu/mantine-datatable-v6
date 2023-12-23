import { IconColumnRemove, IconColumns1 } from '@tabler/icons-react';
import { DataTable, useDataTableColumns } from 'mantine-datatable';
import { companies } from '~/data';

export default function DraggingTogglingResetExample() {
  const key = 'toggleable-reset-example';

  const { effectiveColumns, resetColumnsOrder, resetColumnsToggle } = useDataTableColumns({
    key,
    columns: [
      { accessor: 'name', width: '40%', toggleable: true, draggable: true },
      { accessor: 'streetAddress', width: '60%', toggleable: true, draggable: true },
      { accessor: 'city', width: 160, ellipsis: true, toggleable: true, draggable: true },
      { accessor: 'state' },
    ],
  });

  return (
    <DataTable
      withBorder
      withColumnBorders
      storeColumnsKey={key}
      records={companies}
      columns={effectiveColumns}
      rowContextMenu={{
        items: () => [
          {
            key: 'reset-columns.toggled',
            icon: <IconColumnRemove size={16} />,
            onClick: resetColumnsToggle,
          },
          {
            key: 'reset-columns-order',
            icon: <IconColumns1 size={16} />,
            onClick: resetColumnsOrder,
          },
        ],
      }}
    />
  );
}
