interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phone,
  message,
  email,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>Phone Number: {phone}</p>
    <p>Email: {email}</p>
    <p>
      Your message: <br />
      {message}
    </p>
    <p>Thank you for contacting us.</p>
  </div>
);
