import Li from "./li";
const FooterLanding = () => {
  return (
    <footer className="bg-white fixed bottom-0 left-0 right-0 -z-10 shadow-lg w-full">
      <ul className="flex flex-wrap justify-center gap-5">
        <Li title="User" herf="#" custom="landing-li" />
        <Li title="Contacs" herf="#" custom="landing-li" />
        <Li title="Terms Of Servise" herf="#" custom="landing-li" />
        <Li title="Privacy Policy" herf="#" custom="landing-li" />
        <Li title="Help" herf="#" custom="landing-li" />
      </ul>
    </footer>
  );
};

export default FooterLanding;
