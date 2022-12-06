import React from "react";
import { Form, Input, Space, Button } from "antd";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import TagInput from "./component/TagInput";
import "./styles.css";

import { fetchApi, updateApi } from "api";

const CMS = () => {
  const [form] = Form.useForm();
  const handleSaveConfig = async (values) => {
    console.log(values)
    // values.id = 1;
    await updateApi(
      "https://638df3824190defdb751f026.mockapi.io/config/1",
      "PUT",
      JSON.stringify(values),
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err);
      }
    );
  };
  React.useEffect(() => {
    (async () => {
      await fetchApi(
        "https://638df3824190defdb751f026.mockapi.io/config/1",
        "GET",
        (res) => {
          console.log(res);
          if (res) {
            form.setFieldsValue(res);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    })();
  });
  return (
    <div className="cms-wrapper">
      <Form
        onFinish={handleSaveConfig}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        form={form}
      >
        <div>THIS IS CMS</div>
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
              required: true,
              message: "Header Statistic is required",
            },
          ]}
          name="headerStatistic"
        >
          {(fields, { add, remove }, { errors }) => {
            return (
              <Space direction="vertical">
                {fields.map((data, index) => {
                  return (
                    <Space size={10} align="center">
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
            );
          }}
        </Form.List>
        <div className="cms-wrapper--heading">Body</div>
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
          <Input placeholder="Mô tả cho body" />
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
        <Form.List name="footerListCard">
          {(fields, { add, remove }, { errors }) => {
            return (
              <Space direction="vertical">
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
            );
          }}
        </Form.List>
      </Form>
      <Button
        onClick={() => form.submit()}
        style={{ marginBottom: 50, marginTop: 20 }}
        type="primary"
      >
        Save
      </Button>
    </div>
  );
};

export default CMS;
