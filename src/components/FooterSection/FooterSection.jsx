import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
const { Footer } = Layout;

export const FooterSection = () => {
  return (
    <Layout>
      <Footer style={{ textAlign: 'center', marginTop: 'auto', width: '100%', position: 'fixed' }}>
        League of Friends © {new Date().getFullYear()} a subsidiary of{' '}
        <a href="https://bloomhubng.com">BloomHub Limited</a>
      </Footer>
    </Layout>
  );
};
