/**
 * Internal dependencies
 */
import { sanitize } from '../../../utils/miscellaneous';
import { getIconComponentByName } from '../../../utils/icons-map';

/**
 * External dependencies
 */
import { isEmpty, isArray } from 'lodash';
import Link from 'next/link';

const Footer = ({ footer }) => {
  const { copyrightText, footerMenuItems, sidebarOne, sidebarTwo, socialLinks } = footer;

  return (
    <footer className="footer bg-blue-600 p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-1 overflow-hidden text-white">
          {/* Widget One */}
          <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
            <div dangerouslySetInnerHTML={{ __html: sanitize(sidebarOne) }}></div>
          </div>

          {/* Widget Two */}
          <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
            <div dangerouslySetInnerHTML={{ __html: sanitize(sidebarTwo) }}></div>
          </div>

          {/* Footer Menus */}
          <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
            {!isEmpty(footerMenuItems) && isArray(footerMenuItems) ? (
              <ul>
                {footerMenuItems.map(menuItem => (
                  <li key={menuItem?.ID}>
                    <Link href={menuItem?.url}>
                      <a dangerouslySetInnerHTML={{ __html: menuItem?.title }} />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        <div className="mb-8 mt-8 w-full flex flex-wrap">
          {/* Copyright Text */}
          <div className="w-full md:w-1/2 lg:w-1/4 text-white">{copyrightText ? copyrightText : '© Lau Mayo Website 2022'}</div>

          <div className="w-full lg:w-3/4 flex justify-end">
            {!isEmpty(socialLinks) && isArray(socialLinks) ? (
              <ul className="flex items-center">
                {socialLinks.map(socialLink => (
                  <li key={socialLink?.iconName} className="ml-4">
                    <a target="_blank" rel="noreferrer" title={`Link to ${socialLink?.iconName}`} href={socialLink?.iconUrl || '/'}>
                      {getIconComponentByName(socialLink?.iconName)}
                      <span className="sr-only">{socialLink?.iconName}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
