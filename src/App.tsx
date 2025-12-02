import { Layout } from './components/Layout';
import { Card } from './components/Card';

function App() {
  return (
    <Layout>
      Hello World!
      <Card
        title='React'
        paragraph='Frontend'
        id={1}
      />
      <Card
        title='Typescript'
        paragraph='Backend'
        id={1}
      />
      <Card
        title='SQL'
        paragraph='Banco de Dados'
        id={1}
      />
    </Layout>
  );
}

export default App;
