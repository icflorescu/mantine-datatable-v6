import { Container } from '@mantine/core';
import ExternalLink from '~/components/ExternalLink';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import { MANTINE_LINK } from '~/config';

const PATH = 'mantine-v7-support';

export default function Page() {
  return (
    <Container>
      <PageTitle of={PATH} />
      <PageText info>
        If you are using <ExternalLink to={MANTINE_LINK}>Mantine V7</ExternalLink>, please use{' '}
        <ExternalLink to="https://icflorescu.github.io/mantine-datatable/">Mantine DataTable V7</ExternalLink>.
      </PageText>
      <PageText>
        Mantine DataTable V6 supports <ExternalLink to="https://v6.mantine.dev/">Mantine V6</ExternalLink>.
        <br />
        <ExternalLink to={MANTINE_LINK}>Mantine V7</ExternalLink> is supported by{' '}
        <ExternalLink to="https://icflorescu.github.io/mantine-datatable/">Mantine DataTable V7</ExternalLink>.
      </PageText>
      <PageNavigation of={PATH} />
    </Container>
  );
}
