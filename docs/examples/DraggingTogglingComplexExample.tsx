import { IconColumnRemove, IconColumns1 } from '@tabler/icons-react';
import sortBy from 'lodash/sortBy';
import { DataTable, DataTableSortStatus, useDataTableColumns } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { companies, type Company } from '~/data';

export default function DraggingTogglingComplexExample() {
  const key = 'draggable-toggleable-complex-example';

  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: 'name',
    direction: 'asc',
  });

  const [records, setRecords] = useState(sortBy(companies, 'name'));

  useEffect(() => {
    const data = sortBy(companies, sortStatus.columnAccessor) as Company[];
    setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
  }, [sortStatus]);

  const { effectiveColumns, resetColumnsOrder, resetColumnsToggle } = useDataTableColumns({
    key,
    columns: [
      { accessor: 'name', width: '40%', toggleable: true, draggable: true, sortable: true },
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
      records={records}
      columns={effectiveColumns}
      sortStatus={sortStatus}
      onSortStatusChange={setSortStatus}
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
