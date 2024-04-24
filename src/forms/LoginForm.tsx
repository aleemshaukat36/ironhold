"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import { CLIENT_KEY } from "@/config/config";
import useAuthApi from "@/api/useAuthApi";

type FieldType = {
  username?: string;
  password?: string;
  clientKey?: string;
  remember?: string;
};

export default function LoginForm() {
  const { login } = useAuthApi(CLIENT_KEY);
  const [loading, setLoading] = useState(false);
  const onFinish: FormProps<FieldType>["onFinish"] = async ({
    username,
    password,
  }) => {
    try {
      const usr = username || "";
      const pass = password || "";

      setLoading(true);
      const { data } = await login(usr, pass);

      console.log({ data });
    } catch (ex) {
      console.log({ ex });
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

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
        Login
      </Title>

      <Form
        name="login-form"
        initialValues={{
          username: "ehinton",
          password: "UPw0rk",
          remember: true,
          clientKey: CLIENT_KEY,
        }}
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
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          style={{ marginBottom: 11 }}
        >
          <Input.Password placeholder="password" />
        </Form.Item>

        <Form.Item<FieldType>
          name="clientKey"
          rules={[{ required: true, message: "Please input your client key!" }]}
          style={{ marginBottom: 11 }}
        >
          <Input disabled />
        </Form.Item>

        <Flex
          justify="space-between"
          style={{ marginTop: 48, marginBottom: 60 }}
        >
          <Form.Item<FieldType> name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              style={{ width: 110 }}
            >
              Login
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </>
  );
}
