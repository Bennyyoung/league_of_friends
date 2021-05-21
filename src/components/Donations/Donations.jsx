import { usePaystackPayment } from 'react-paystack';
import './Donations.css';
import { Space, Card } from 'antd';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
 container: {
  width: '100%',
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
 },
 section_title: {
  width: '100%',
  textAlign: 'center',
  padding: '45px 0 30px 0',
 },

 section_title_h1: {
  color: '#353535',
  fontSize: '50px',
  letterSpacing: '5px',
  marginBottom: '5px',
 }
}));


const oneThousandConfig = {
  reference: new Date().getTime(),
  email: 'softbloom28@gmail.com',
  amount: 100000,
  publicKey: 'pk_live_b89ba11c211333da9fe52c29a28072d7b15acf8f',
};

const fiveHundredConfig = {
  reference: new Date().getTime(),
  email: 'softbloom28@gmail.com',
  amount: 50000,
  publicKey: 'pk_live_b89ba11c211333da9fe52c29a28072d7b15acf8f',
};


const threeHundredConfig = {
  reference: new Date().getTime(),
  email: 'softbloom28@gmail.com',
  amount: 30000,
  publicKey: 'pk_live_b89ba11c211333da9fe52c29a28072d7b15acf8f',
};

export const Donations = () => {
 const classes = useStyles();


 const OneThousandPayment = () => {
  const initializePayment = usePaystackPayment(oneThousandConfig);
  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => {
        initializePayment();
      }}
      className="button button-primary mt-2"
    >
      Donate ₦1000
    </div>
  );
};

  const FiveHundredPayment = () => {
    const initializePayment = usePaystackPayment(fiveHundredConfig);
    return (
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          initializePayment();
        }}
        className="button button-primary mt-2"
      >
        Donate ₦500
      </div>
    );
  };

  const ThreeHundredPayment = () => {
    const initializePayment = usePaystackPayment(threeHundredConfig);
    return (
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          initializePayment();
        }}
        className="button button-primary mt-2"
      >
        Donate ₦300
      </div>
    );
  };

  return (
    <Space direction="vertical" className={classes.container}>
      <div className={classes.section_title}>
        <h1 className={classes.section_title_h1}>Buy us a Coffee</h1>
      </div>

      <Card title="Donate ₦1000" style={{ width: 300 }}>
        <p>
          <OneThousandPayment />
        </p>
      </Card>

      <Card title="Donate ₦500" style={{ width: 300 }}>
        <p>
          <FiveHundredPayment />
        </p>
      </Card>

      <Card title="Donate ₦300" style={{ width: 300 }}>
        <p>
          <ThreeHundredPayment />
        </p>
      </Card>
    </Space>
  );
};
