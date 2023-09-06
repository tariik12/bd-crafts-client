import 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const {tranID} = useParams()
    return (
        <div>
            <h1>payment success {tranID}</h1>
        </div>
    );
};

export default PaymentSuccess;