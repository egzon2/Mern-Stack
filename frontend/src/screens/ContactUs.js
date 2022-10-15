import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import { FaHeadset, FaMapMarkerAlt } from 'react-icons/fa';
import './../styles/css/contactus.min.css';

export default function ContactUs() {
  const [kontakti, setKontakti] = useState(false);
  const [lokacioni, setLokacioni] = useState(false);

  function toggleKontakti() {
    setLokacioni(false);
    setKontakti(true);
  }

  function toggleLokacioni() {
    setLokacioni(true);
    setKontakti(false);
  }

  return (
    <Container>
      <div className="buttons">
        <div
          className="button"
          style={kontakti ? { backgroundColor: 'brown' } : {}}
          onClick={() => toggleKontakti()}
        >
          <FaHeadset
            size={50}
            className="buttonIcon"
            style={kontakti ? { color: 'white' } : {}}
          />
          <h3
            style={
              kontakti
                ? { padding: 0, margin: 0, color: 'white' }
                : { padding: 0, margin: 0 }
            }
            className="buttonTitle"
          >
            Kujdesi për klientin
          </h3>
        </div>

        <div
          className="button"
          style={lokacioni ? { backgroundColor: 'brown' } : {}}
          onClick={() => toggleLokacioni()}
        >
          <FaMapMarkerAlt
            size={50}
            style={lokacioni ? { color: 'white' } : {}}
            className="buttonIcon"
          />
          <h3
            style={
              lokacioni
                ? { padding: 0, margin: 0, color: 'white' }
                : { padding: 0, margin: 0 }
            }
            className="buttonTitle"
          >
            Lokacioni
          </h3>
        </div>
      </div>

      {kontakti && (
        <div className="kontakti">
          <h1>Kontakti</h1>
          <p>
            E-mail: info@amazona.com
            <br />
            Telefoni: <a href="tel:+38344123456">+38344123456</a>
            <br />
            Mobile:
            <a href="tel:+044 123 321">044 123 321</a>
          </p>
        </div>
      )}

      {lokacioni && (
        <div className="lokacioni">
          <h1>Lokacioni</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11738.70914439682!2d21.14951267909037!3d42.647000949779645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549e8d5d607f25%3A0xa31dd05b21bd09de!2sUBT%20College!5e0!3m2!1sen!2s!4v1664304390294!5m2!1sen!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>
            Lagjja Kalabria UBT
            <br />
            "Prishtine 10000, Kosove"
          </p>
        </div>
      )}
    </Container>
  );
}
