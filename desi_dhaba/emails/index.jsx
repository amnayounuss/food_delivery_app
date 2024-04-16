import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

export function Email(props) {
  const { url } = props;

  return (
    <Html lang="en">
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ backgroundColor: '#f7f7f7', padding: '10px', textAlign: 'center' }}>Food Order Confirmation</h2>
        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Thank you for your order!</p>
        <p>Your order has been confirmed and will be delivered shortly.</p>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Item</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Chicken Burger</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>$10.00</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Pizza Margherita</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>$12.00</td>
          </tr>
        </table>
        
        <p style={{ fontWeight: 'bold' }}>Total: $22.00</p>
        
        <h3>Delivery Information</h3>
        <p>Address: 123 Main St, City, State, ZIP</p>
        <p>Contact: (123) 456-7890</p>
        
        <div style={{ backgroundColor: '#f7f7f7', padding: '10px', textAlign: 'center' }}>
          <p>Thank you for choosing our service!</p>
          <p>For any inquiries, please contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
        </div>
      </div>
      <Button href={url}>Click me</Button>
    </Html>
  );
}

export default Email;