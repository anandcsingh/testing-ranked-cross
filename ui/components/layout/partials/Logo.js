import React from 'react';
import classNames from 'classnames';
import Link from 'next/link'

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link href="/welcome">
          Ranked
        </Link>
      </h1>
    </div>
  );
}

export default Logo;