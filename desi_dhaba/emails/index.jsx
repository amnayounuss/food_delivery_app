import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

export function Email(props) {
    const { url } = props;

    return (
        <Html lang="en">
            <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f7f7f7' }}>
                <h2 style={{ color:'#fdb913', padding: '10px', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>Food Order Confirmation</h2>
                <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '18px' }}>Thank you for your order!</p>
                <p style={{ display:'flex', justifyContent:'center', fontSize: '16px', padding: '0 20px' }}>Your order has been confirmed and will be delivered shortly.</p>

                <table style={{ width: '100%', borderCollapse: 'round', margin: '20px 0',   }}>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', fontSize: '16px', fontWeight: 'bold' }}>Item</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', fontSize: '16px', fontWeight: 'bold' }}>Quantity</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', fontSize: '16px', fontWeight: 'bold' }}>Price</th>
                    </tr>
                    <tr>
                        
                        <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '16px' }}><img src='..//'/> Chicken Burger</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '16px' }}>2</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '16px' }}>$10.00</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '16px' }}><img src='..//' />Pizza Margherita</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '16px' }}>1</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '16px' }}>$12.00</td>
                    </tr>
                </table>

                <p style={{ fontWeight: 'bold', fontSize: '16px', padding: '0 20px', textAlign:'center' }}>Total: $22.00</p>

                <h3 style={{ fontSize: '16px', padding: '0 20px', textAlign: 'center' }}>Delivery Information</h3>
                <p style={{ fontSize: '16px', padding: '0 20px', textAlign: 'center' }}>Address: 123 Main St, City, State, ZIP</p>
                <p style={{ fontSize: '16px', padding: '0 20px', textAlign: 'center' }}>Contact: (123) 456-7890</p>

                <div style={{ backgroundColor: '#f7f7f7', padding: '10px', textAlign: 'center', fontSize: '16px' }}>
                    <p style={{ padding: '10px' }}>Thank you for choosing our service!</p>
                    <p style={{ padding: '10px' }}>For any inquiries, please contact us at&nbsp; <a href="mailto:support@example.com" style={{ color: '#0066cc' }}> amnayounus999@gmail.com</a>.</p>
                </div>
            </div>
        </Html>
    );
}

export default Email;