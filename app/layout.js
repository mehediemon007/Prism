import 'swiper/css';
import "./style.css";


export const metadata = {
  title: "Prism",
  description: "Developed by Mehedi Hasan Emon, mail: mehediemon7@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
