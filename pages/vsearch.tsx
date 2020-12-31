import Layout from "../components/layout";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  randomClass?: string
}

export default function VSearchPage({ randomClass }:Props):ReactElement {
  return (
    <Layout inPage="vsearch" randomClass={randomClass}>
      <Head>
        <title>Video Search</title>
      </Head>
      <Heading as="h1" size="xl" fontWeight="regular" px={4}>
        VSearch
      </Heading>
    </Layout>
  );
}
