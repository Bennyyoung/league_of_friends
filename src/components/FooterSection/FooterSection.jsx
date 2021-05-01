import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;

export const FooterSection = () => {
  return (
    <Layout>
      <Footer style={{ textAlign: 'center' }}>
        League of Friends © {new Date().getFullYear()} a subsidiary of{' '}
        <a href="bloomhubng.com">BloomHub Limited</a>
      </Footer>
    </Layout>
  );
};
