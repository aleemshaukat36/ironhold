"use client";
import { Button, Card, Col, Flex, Row } from "antd";
import Image from "next/image";

import IronHoldLogo from "@/assets/img/ironhold-logo.jpeg";
import LoginForm from "@/forms/LoginForm";
import ForgetPassForm from "@/forms/ForgetPasswordForm";
import { PropsWithChildren, useState } from "react";
import FlipCard from "@/components/FlipCard";

export default function Page() {
  const [side, setSide] = useState<String>("front");

  const getYear = () => {
    return new Date().getFullYear();
  };

  const Footer = ({ children }: PropsWithChildren) => {
    return (
      <Row justify={"center"}>
        <Col span={24}>
          <Flex
            justify="space-between"
            style={{
              marginLeft: -36,
              padding: '0px 37px',
              height: 39,
              width: "122%",
              backgroundColor: "#58585b",
              color: "#fff",
            }}
          >
            {children}
          </Flex>
        </Col>
      </Row>
    );
  };

  return (
    <Row justify={"center"}>
      <Col xs={24} sm={24} md={8} lg={6} xl={6} xxl={6}>
        <FlipCard
          visibleSide={side}
          frontContent={
            <Card
              style={{ marginTop: "5%", width: 400 }}
              styles={{ body: { padding: 36, paddingBottom: 0 } }}
            >
              <Row justify={"center"}>
                <Col>
                  <Image
                    src={IronHoldLogo.src}
                    alt="ironhold-logo"
                    width={300}
                    height={99}
                  />

                  <LoginForm />
                </Col>
              </Row>

              <Footer>
                <div style={{ padding: "9px 11px" }}>
                  © {getYear()} Reqo, Inc.
                </div>
                <div style={{ padding: "3px 11px" }}>
                  <Button
                    style={{ color: "#fff" }}
                    type="link"
                    onClick={() => {
                      setSide("back");
                    }}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Footer>
            </Card>
          }
          backContent={
            <Card
              style={{ marginTop: "5%", width: 400 }}
              styles={{ body: { padding: 36, paddingBottom: 0 } }}
            >
              <Row justify={"center"}>
                <Col>
                  <Image
                    src={IronHoldLogo.src}
                    alt="ironhold-logo"
                    width={300}
                    height={99}
                  />

                  <ForgetPassForm />
                </Col>
              </Row>

              <Footer>
                <Button
                  style={{ color: "#fff" }}
                  type="link"
                  onClick={() => {
                    setSide("front");
                  }}
                >
                  {"< Back to login"}
                </Button>
              </Footer>
            </Card>
          }
        />
      </Col>
    </Row>
  );
}
