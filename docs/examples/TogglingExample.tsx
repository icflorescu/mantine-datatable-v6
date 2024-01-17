import { Button, Group, Stack, Text } from '@mantine/core';
import { IconBuildingCommunity, IconBuildingSkyscraper, IconMap, IconRoadSign } from '@tabler/icons-react';
import { DataTable, useDataTableColumns } from 'mantine-datatable';
import { companies } from '~/data';

export default function TogglingExample() {
  const key = 'toggleable-example';

  const { effectiveColumns, resetColumnsToggle } = useDataTableColumns({
    key,
    columns: [
      {
        accessor: 'name',
        title: (
          <Group spacing={4} mt={-1}>
            <IconBuildingSkyscraper size={16} />
            <Text inherit mt={1}>
              Company
            </Text>
          </Group>
        ),
        width: '40%',
        toggleable: true,
        defaultToggle: false,
      },
      {
        accessor: 'streetAddress',
        title: (
          <Group spacing={4} mt={-1}>
            <IconRoadSign size={16} />
            <Text inherit mt={1}>
              Street Address
            </Text>
          </Group>
        ),
        width: '60%',
        toggleable: true,
      },
      {
        accessor: 'city',
        title: (
          <Group spacing={4} mt={-1}>
            <IconBuildingCommunity size={16} />
            <Text inherit mt={1}>
              City
            </Text>
          </Group>
        ),
        width: 160,
        toggleable: true,
      },
      {
        accessor: 'state',
        width: 40,
        textAlignment: 'right',
        title: (
          <Group position="right">
            <IconMap size={16} />
          </Group>
        ),
      },
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
