import { Card } from "react-bootstrap";

const ShareLink = () => {
  const shareInfo = {
    title: "Surūšiuotos VBE užduotys",
    text: "Surūšiuotos matematikos VBE užduotys",
    url: "https://vbesort.lt",
  };

  const handleShare = async (event: any) => {
    event.preventDefault();
    try {
      await navigator.share(shareInfo);
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <a href="/" onClick={handleShare}>
      dalinkitės
    </a>
  );
};

export default function InfoComponent() {
  return (
    <div>
      <p>
        Štai čia 2017 m. pagrindinės sesijos matematikos VBE užduotys,
        surūšiuotos pagal temas. Viskas nemokama. Naudokitės į valias. Jei
        patinka (arba nepatinka) šitas stuff – {<ShareLink />},{" "}
        <a href="mailto:naglis.suliokas@gmail.com">rašykit feedback’ą</a>,{" "}
        <a
          href="https://github.com/naglissul/vbe-sort#contribute"
          target="_blank"
          rel="noreferrer"
        >
          prisidėkit
        </a>{" "}
        prie tobulinimo, followinkit{" "}
        <a
          href="https://www.instagram.com/naglisaudrius/"
          target="_blank"
          rel="noreferrer"
        >
          instagrame
        </a>{" "}
        ir{" "}
        <a
          href="https://www.tiktok.com/@naglisaudrius"
          target="_blank"
          rel="noreferrer"
        >
          tiktoke
        </a>{" "}
        arba paremkit. O gal turit idėjų, kas būtų naudinga mokyklai?{" "}
        <a
          href="mailto:naglis.suliokas@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Parašykit man
        </a>
        .
      </p>
      <Card style={{ marginBottom: "15px" }}>
        <Card.Body>
          <Card.Title>
            <strong>
              Piniginis parėmimas, kad galėčiau tęsti darbą, tobulinant puslapį:
            </strong>
          </Card.Title>
          <Card.Text
            style={{
              paddingTop: "10px",
              paddingLeft: "30px",
            }}
          >
            <li>
              PayPal donation – gan daug mokesčių PayPal pasiima:{" "}
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=86R4K9Y6BLSXA"
                target="_blank"
                rel="noreferrer"
              >
                donation linkas
              </a>
            </li>
            <li>Revolut pavedimu: Naglis Šuliokas LT943250092929077836</li>
          </Card.Text>
        </Card.Body>
      </Card>

      <p>
        Senos versijos PDF atsisiųsti{" "}
        <a
          href="https://github.com/naglissul/vbe-sort/files/13438956/VBE-sort.pdf"
          target="_blank"
          rel="noreferrer"
        >
          čia
        </a>
      </p>
      <p>
        Tinklapio kodas{" "}
        <a
          href="https://github.com/naglissul/vbe-sort"
          target="_blank"
          rel="noreferrer"
        >
          čia
        </a>
      </p>

      <p>
        Užduočių šaltinis:{" "}
        <a
          href="https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/brandos-egzaminai/egzaminu-uzduotys/"
          target="_blank"
          rel="noreferrer"
        >
          nsa.smm.lt
        </a>
      </p>
      <p>
        Čia rasit atsakymus (pasiieškokit pagal metus ir užduoties numerį):{" "}
        <a
          href="https://www.nsa.smm.lt/egzaminai-ir-pasiekimu-patikrinimai/brandos-egzaminai/vertinimas/"
          target="_blank"
          rel="noreferrer"
        >
          nsa.smm.lt
        </a>
      </p>
      <p>
        Užduotys nesikartoja keliose kategorijose. Esant kelioms temoms viename
        uždavinyje, priskiriama tik viena kategorija. Prioritetiniai kriterijai
        bus patikslinti vėliau.
      </p>
    </div>
  );
}
