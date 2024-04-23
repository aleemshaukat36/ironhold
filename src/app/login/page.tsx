import { Card, Col, Flex, Row } from "antd";
import Image from "next/image";

import IronHoldLogo from "@/assets/img/ironhold-logo.jpeg";
import LoginForm from "@/forms/LoginForm";

export default function page() {
  return (
    <Row justify={"center"}>
      <Col xs={24} sm={24} md={8} lg={6} xl={6} xxl={6}>
        <Card style={{ marginTop: "5%", width: 400 }}>
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
        </Card>
      </Col>
    </Row>
  );
}
