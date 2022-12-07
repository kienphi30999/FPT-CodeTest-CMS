import React from "react";
import { Form, Input } from "antd";
import "../../styles.css";

const BodyForm = () => {
  return (
    <div className="cms-wrapper--section">
      <div className="cms-wrapper--heading cms-heading--background">Body</div>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Body Title is required",
          },
        ]}
        label="Body Title"
        name="bodyTitle"
      >
        <Input placeholder="Tựa đề cho body" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Body Description is required",
          },
        ]}
        label="Body Description"
        name="bodyDescription"
      >
        <Input.TextArea placeholder="Mô tả cho body" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Left Body Button Text is required",
          },
        ]}
        label="Left Body Button Text"
        name="leftBodyBtnText"
      >
        <Input placeholder="Đoạn text cho button bên trái ở body" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Right Body Button Text is required",
          },
        ]}
        label="Right Body Button Text"
        name="rightBodyBtnText"
      >
        <Input placeholder="Đoạn text cho button bên phải ở body" />
      </Form.Item>
    </div>
  );
};

export default BodyForm;
