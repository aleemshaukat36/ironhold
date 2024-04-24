"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Flex, Form, Input, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { CLIENT_KEY } from "@/config/config";

type FieldType = {
  username?: string;
  password?: string;
  account?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function ForgetPassForm() {
  return (
    <>
      <Title
        level={4}
        style={{
          marginBottom: 5,
          marginTop: 48,
          borderBottom: "1px solid #58585b",
        }}
      >
        Retrieve Password
      </Title>
      <Typography style={{ margin: "11px 0 5px", marginBottom: "10px" }}>
        Please enter your username and client key. Instructions on how to reset
        your password will be sent on email.
      </Typography>

      <Form
        name="login-form"
        initialValues={{ remember: true, account: CLIENT_KEY }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          style={{ marginBottom: 11 }}
        >
          <Input placeholder="email" />
        </Form.Item>

        <Form.Item<FieldType>
          name="account"
          rules={[{ required: true, message: "Please input your account!" }]}
          style={{ marginBottom: 11 }}
        >
          <Input disabled />
        </Form.Item>

        <Flex
          justify="space-between"
          style={{ marginTop: 48, marginBottom: 60 }}
        >
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: 110 }}>
              Submit
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </>
  );
}
