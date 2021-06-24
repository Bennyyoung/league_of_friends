import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
const { Footer } = Layout;

export const FooterSection = () => {
  return (
    <div>
      <footer style={{ textAlign: 'center', marginTop: 'auto', width: '100%', position: 'fixed' }}>
        League of Friends © {new Date().getFullYear()} a subsidiary of{' '}
        <a href="https://bloomhubng.com">BloomHub Limited</a>
      </footer>
    </div>
  );
};
