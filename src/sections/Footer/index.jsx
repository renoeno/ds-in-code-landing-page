import "@renoeno/dsc-design-system-meiuca/dist/components/icon";
import "@renoeno/dsc-design-system-meiuca/dist/components/link";
import iconGithub from "@renoeno/design-assets-meiuca/dist/assets/icons/github";
import "./style.scss";

export default function AppFooter() {
  return (
    <div className="section-footer">
      <dsc-icon icon={iconGithub} size="lg"></dsc-icon>
      <dsc-link href="#" target="_blank">
        Repositório do projeto
      </dsc-link>
    </div>
  );
}
