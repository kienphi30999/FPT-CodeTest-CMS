import React from "react";
import { Form, Input, Space, Button } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import "../../styles.css";

const FooterForm = () => {
  return (
    <>
      <div className="cms-wrapper--heading">Footer</div>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Footer Title is required",
          },
        ]}
        label="Footer Title"
        name="footerTitle"
      >
        <Input placeholder="Tựa đề cho footer" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Footer Description is required",
          },
        ]}
        label="Footer Description"
        name="footerDescription"
      >
        <Input placeholder="Mô tả cho footer" />
      </Form.Item>
      <div style={{ marginBottom: 20 }}>Footer List Card</div>
      <Form.List
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 1) {
                return Promise.reject(new Error("At least 1 statistics"));
              } else {
                return Promise.resolve();
              }
            },
          },
        ]}
        name="footerListCard"
      >
        {(fields, { add, remove }, { errors }) => {
          return (
            <>
              <Space direction="vertical">
                <Form.ErrorList errors={errors} />
                {fields.map((data, index) => {
                  return (
                    <Space size={10} align="center">
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Type is required",
                          },
                        ]}
                        label="Type"
                        name={[data.name, "type"]}
                      >
                        <Input placeholder="Phân loại" />
                      </Form.Item>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Title is required",
                          },
                        ]}
                        label="Title"
                        name={[data.name, "title"]}
                      >
                        <Input placeholder="Tựa đề" />
                      </Form.Item>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Description is required",
                          },
                        ]}
                        label="Description"
                        name={[data.name, "description"]}
                      >
                        <Input placeholder="Mô tả" />
                      </Form.Item>
                      <div className="header-stat--close_btn">
                        <AiOutlineClose onClick={() => remove(index)} />
                      </div>
                    </Space>
                  );
                })}
                <Button type="primary" onClick={() => add()}>
                  Thêm
                </Button>
              </Space>
            </>
          );
        }}
      </Form.List>
    </>
  );
};

export default FooterForm;
