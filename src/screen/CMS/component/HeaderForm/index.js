import React from "react";
import { Form, Input, Space, Button } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import TagInput from "../../component/TagInput";
import "../../styles.css";

const HeaderForm = () => {
  return (
    <>
      <div className="cms-wrapper--heading">Header</div>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Header Name is required",
          },
        ]}
        label="Header Name"
        name="headerName"
      >
        <Input placeholder="Tên header" id="Header Name" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Header Menu is required",
          },
        ]}
        label="Header Menu"
        name="headerMenu"
      >
        <TagInput id="Header Menu" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Header Title is required",
          },
        ]}
        label="Header Title"
        name="headerTitle"
      >
        <Input placeholder="Tựa đề cho header" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Header Description is required",
          },
        ]}
        label="Header Description"
        name="headerDescription"
      >
        <Input.TextArea placeholder="Mô tả cho header" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Header Button Text is required",
          },
        ]}
        label="Header Button Text"
        name="headerBtnText"
      >
        <Input placeholder="Đoạn text cho button ở header" />
      </Form.Item>
      <div style={{ marginBottom: 20 }}>Header Statistic</div>
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
        name="headerStatistic"
      >
        {(fields, { add, remove }, { errors }) => {
          return (
            <>
              <Space direction="vertical">
                <Form.ErrorList errors={errors} />
                {fields.map((data, index) => {
                  return (
                    <Space size={20} align="center">
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Stat number is required",
                          },
                        ]}
                        label="Stat number"
                        name={[data.name, "stat"]}
                      >
                        <Input placeholder="Số lượng thống kê" />
                      </Form.Item>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Unit is required",
                          },
                        ]}
                        label="Unit"
                        name={[data.name, "unit"]}
                      >
                        <Input placeholder="Đơn vị" />
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

export default HeaderForm;
