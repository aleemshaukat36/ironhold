"use client"
import { Card, Col, Flex, Row } from "antd";
import Image from "next/image";

import IronHoldLogo from "@/assets/img/ironhold-logo.jpeg";
import LoginForm from "@/forms/LoginForm";
import ForgetPassForm from "@/forms/ForgetPasswordForm";
import { useState } from "react";

export default function page() {
  const [page, setPage] = useState(1)

  const getYear = () => {
    return new Date().getFullYear();
  }

  const getFooter = () => {
    return (
      <Card style={{ marginTop: "-2px", width: 400, backgroundColor: '#58585b', color: '#fff' }}>
        {page == 1 && <Row justify={"center"}>
          <Flex justify="space-between" style={{ padding: '9px 0 11px', margin: '-24px', width: '100%' }}>
            <div className="login-footer ng-binding">© {getYear()} Reqo, Inc.</div>
            <div className="login-footer login-footer-right pull-right">
              <div style={{ cursor: 'pointer' }} onClick={() => { setPage(2) }}>
                Forgot password?
              </div>
            </div>
          </Flex>
        </Row>}
        {page == 2 && <Row justify={"center"}>
          <Flex justify="space-between" style={{ padding: '9px 0 11px', margin: '-24px', width: '100%' }}>
            <div style={{ cursor: 'pointer' }} onClick={() => { setPage(1) }}>
              {'< Back to login'}
            </div>
          </Flex>
        </Row>}
      </Card>
    )
  }

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

              {page == 1 ? <LoginForm setPage={setPage} /> :
                <ForgetPassForm />}
            </Col>
          </Row>
        </Card>
        {getFooter()}
      </Col>
    </Row>
  );
}
