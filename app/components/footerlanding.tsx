import Li from "./li";
const FooterLanding = () => {
  return (
    <footer className="bg-white shadow-lg border-t border-gray-400/30 py-2 w-full">
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
