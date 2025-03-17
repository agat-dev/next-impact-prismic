import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import * as prismic from '@prismicio/client';

/**
 * Props for `RelationContenu`.
 */
export type RelationContenuProps =
  SliceComponentProps<Content.RelationContenuSlice>;


export const createClient = () => {
  const client = prismic.createClient('next-impact', {
  accessToken: 'MC5aOVp0WHhFQUFDRUFsNTRY.77-977-9AU1_77-977-9egYn77-9Jh1NMk7vv70TAO-_vSTvv71L77-9AO-_vVTvv73vv70FfwM',
  });

  return client
};

/**
 * Component for "RelationContenu" Slices.
 */
const RelationContenu: FC<RelationContenuProps> = async ({ slice }) => {
  const client = createClient();


  const pages = await client.getAllByType("page", {
    graphQuery: `{
      page {
        ...pageFields
      }
    }`,
  });


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {pages.map
        (page => (
          <div key={page.id}>
            <h1>{page.data.title[0]?.text || "Untitled"}</h1>
          </div>
        ))
        }
    </section>
  );
};

export default RelationContenu;
