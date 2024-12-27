import "./header8.css";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function header8() {
  return (
    <div>
      <div className="header8">
        <div className="div-header8">
            <p className="fw-bold mb-3 fw-bold fs-2" style={{ fontFamily:"Edu" }}>MoonRight</p>
            <p className="mb-3 ">123 stree New York City</p>
            <p className="mb-1">Office Telephone: 0000000000</p>
            <p className="mb-3">Mobile: 0000000000</p>
            <p>Email: admin@gmail.com</p>
            <p className="pt-2">Mon-Fri: 9am to 6pm</p>
            <div className="div-grid-header8">
                <TelegramIcon/>
                <InstagramIcon/>
                <XIcon/>
                <WhatsAppIcon/>
            </div>
        </div>
      </div>
    </div>
  );
}
