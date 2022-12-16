import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >

      {useRouter().pathname != '/welcome' &&
        <ul className="list-reset">
          <li>
            <Link href="rank">Rank</Link>
          </li>
          <li>
            <Link href="lineage">Lineage</Link>
          </li>
          <li><Link href="students">Students</Link>
          </li>

        </ul>
      }
    </nav>
  );
}

export default FooterNav;