import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
  faGoogleScholar,
  faOrcid,
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SocialLinks() {
  return (
    <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
      <a href="mailto:jguo27@cs.washington.edu" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </a>
      <a href="https://x.com/yourhandle" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
      </a>
      <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </a>
      <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a href="https://scholar.google.com/citations?user=your_id" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGoogleScholar} size="lg" />
      </a>
      <a href="https://orcid.org/your-orcid-id" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faOrcid} size="lg" />
      </a>
    </div>
  );
}

export default SocialLinks;
