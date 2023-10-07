import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export const VerifyEmail = ({
  token,
  baseUrl,
}: {
  baseUrl: string;
  token: string;
}) => (
  <Html>
    <Head />
    <Preview>Email Verification Link</Preview>
    <Tailwind>
      <Body className="bg-white">
        <Container>
          <Heading className="text-2xl  ">
            Verify Your Email Address By Clicking Button Below{" "}
          </Heading>
          <Section>
            <Button
              pY={11}
              pX={23}
              className="px-4 py-2 text-white  bg-blue-600"
              href={`${baseUrl}/verify/${token || "token"}`}
            >
              Verify
            </Button>
          </Section>
          {/* <Text>This link will expires in 5 min.</Text> */}
          <Hr />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default VerifyEmail;
