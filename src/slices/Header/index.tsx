import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import * as prismic from '@prismicio/client';
import React from 'react';
/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

const Header: FC<HeaderProps> = ({ slice }) => {

console.log(slice.primary.link)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

          {Array.isArray(slice.primary.link) && slice.primary.link.map((item) => (
            <PrismicNextLink
              key={item.key}
              field={item}
              className="text-red-500"
              />
      ))}
    
    </section>
  );
};

export default Header;
