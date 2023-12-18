import { Code, Container } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import CodeBlock from '~/components/CodeBlock';
import PageNavigation from '~/components/PageNavigation';
import PageSubtitle from '~/components/PageSubtitle';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import ResizingComplexExample from '~/examples/ResizingComplexExample';
import ResizingExample from '~/examples/ResizingExample';
import allPromiseProps from '~/lib/allPromiseProps';
import readCodeExample from '~/lib/readCodeExample';

const PATH = 'examples/resizing';

export const getStaticProps: GetStaticProps<{
  code: Record<'default' | 'complex', string>;
}> = async () => ({
  props: {
    code: await allPromiseProps({
      default: readCodeExample('examples/ResizingExample.tsx') as Promise<string>,
      complex: readCodeExample('examples/ResizingComplexExample.tsx') as Promise<string>,
    }),
  },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <ResizingExample />
      <PageText>
        In order to enable <strong>column resizing</strong> you’ll have to:
        <ul>
          <li>
            add a <Code>storeColumnsKey: your_key</Code> property to the DataTable (since the order of the columns is
            persisted in the local storage);
          </li>
          <li>
            add a <Code>resizable: true</Code> property to each <strong>resizing candidate</strong> column;
          </li>
          <li>
            use <Code>useDragToggleColumns()</Code> hook to get the effective columns.
          </li>
        </ul>
      </PageText>
      <CodeBlock language="typescript" content={code.default} />

      <PageText idea>
        The default width of the columns is the <Code>width</Code> in which they are defined in the <Code>columns</Code>{' '}
        prop.
      </PageText>

      <PageText info>
        Of course, you can reset the column width to the default value by using the <Code>resetColumnsWidth()</Code>{' '}
        function.
        <br />
        You may also set up the column with to <Code>initial</Code> by double-clicking on the resize handle.
      </PageText>

      <PageSubtitle value="Complex usage" />
      <ResizingComplexExample />

      <CodeBlock language="typescript" content={code['complex']} />
      <PageNavigation of={PATH} />
    </Container>
  );
}
