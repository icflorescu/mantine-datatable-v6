import { Code, Container } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import { readCodeFile } from '~/lib/code';

const PATH = 'component-properties';

export const getStaticProps: GetStaticProps<{ code: string }> = async () => ({
  props: { code: await readCodeFile('../package/DataTable.props.ts') },
});

export default function Page({ code }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText>
        Mantine DataTable component is written in Typescript and its properties are well documented with additional
        JSDoc annotations, so you can harness the full power of your IDE to build type safe applications with
        confidence. Here is the actual source of <Code>DataTable.props.ts</Code>:
      </PageText>
      <Prism language="typescript" noCopy>
        {code}
      </Prism>
      <PageNavigation of={PATH} />
    </Container>
  );
}
