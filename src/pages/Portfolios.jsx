import PortfolioCard from "../components/portfolio/PortfolioCard";
import { portfolioData } from "../components/portfolio/data";

export default function Portfolios() {
  return (
    <section className="portfolio section container" id="portfolio">
      {portfolioData.map((portfolio, index) => (
        <PortfolioCard
          key={index}
          imgs={portfolio.imgs}
          title={portfolio.title}
          description={portfolio.description}
          github={portfolio.github}
          online={portfolio.online}
        />
      ))}
    </section>
  );
}
