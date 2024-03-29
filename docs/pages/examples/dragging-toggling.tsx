import { Code, Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import PageNavigation from '~/components/PageNavigation';
import PageSubtitle from '~/components/PageSubtitle';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import DraggingExample from '~/examples/DraggingExample';
import DraggingTogglingComplexExample from '~/examples/DraggingTogglingComplexExample';
import DraggingTogglingResetExample from '~/examples/DraggingTogglingResetExample';
import TogglingExample from '~/examples/TogglingExample';
import allPromiseProps from '~/lib/allPromiseProps';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'examples/dragging-toggling';

export const getStaticProps: GetStaticProps<{
  code: Record<'default' | 'toggling' | 'reset' | 'complex', string>;
}> = async () => ({
  props: {
    code: await allPromiseProps({
      default: readCodeExample('examples/DraggingExample.tsx') as Promise<string>,
      toggling: readCodeExample('examples/TogglingExample.tsx') as Promise<string>,
      reset: readCodeExample('examples/DraggingTogglingResetExample.tsx') as Promise<string>,
      complex: readCodeExample('examples/DraggingTogglingComplexExample.tsx') as Promise<string>,
    }),
  },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <DraggingExample />
      <PageText>
        In order to enable Dragging you’ll have to:
        <ul>
          <li>
            add a <Code>storeColumnsKey: &apos;your_key&apos;</Code> property to the DataTable;
          </li>
          <li>
            add a <Code>draggable: true</Code> property to each Dragging candidate column;
          </li>
          <li>
            use the <Code>useDataTableColumns()</Code> hook to get the sorted columns.
          </li>
        </ul>
      </PageText>
      <CodeBlock language="typescript" content={code.default} />
      <PageText info>
        The default order of the columns is the order in which they are defined in the <Code>columns</Code> prop.
      </PageText>

      <PageSubtitle value="Toggling" />

      <PageText>
        In the below example you can toggle the first 3 columns. The last column is not toggleable and will always be
        visible. The first column is toggled off by default. Click with right mouse button on the header to select the
        columns you want to toggle.
      </PageText>

      <TogglingExample />

      <PageText>
        In order to enable Toggling you’ll have to:
        <ul>
          <li>
            add a <Code>storeColumnsKey: &apos;your_key&apos;</Code> property to the DataTable;
          </li>
          <li>
            add a <Code>toggleable: true</Code> property to each Toggling candidate column;
          </li>
          <li>
            use the <Code>useDataTableColumns()</Code> hook to get the sorted columns.
          </li>
        </ul>
      </PageText>

      <CodeBlock language="typescript" content={code['toggling']} />

      <PageText info>
        You may define which columns will be toggled by default by setting the <Code>defaultToggle: false</Code>{' '}
        property
      </PageText>

      <PageSubtitle value="Dragging & Toggling with context menu Reset" />
      <DraggingTogglingResetExample />
      <CodeBlock language="typescript" content={code['reset']} />

      <PageSubtitle value="Complex usage" />
      <DraggingTogglingComplexExample />
      <CodeBlock language="typescript" content={code['complex']} />

      <PageNavigation of={PATH} />
    </Container>
  );
}
