import React from "react";
import { Form, Input, Space, Button, Upload, message } from "antd";
import { AiOutlineClose, AiOutlineUpload } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../styles.css";

const beforeUpload = (file) => {
  const isPNG = file.type === "image/png" || file.type === "image/jpeg";
  if (!isPNG) {
    message.error(`${file.name} is not a image file`);
  }
  return isPNG || Upload.LIST_IGNORE;
};

const CustomImg = (props) => {
  return props.value ? (
    <LazyLoadImage className="img-preview" src={props.value} alt="" />
  ) : null;
};

const FooterForm = (props) => {
  const { footerListCardWatch, form } = props;
  const [loadingUpload, setLoadingUpload] = React.useState({
    id: "",
    isLoad: false,
  });
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
                    <Space size={20} align="center">
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
                      <Form.Item
                        // labelCol={{ span: 0 }}
                        // wrapperCol={{ span: 0 }}
                        label="Images"
                      >
                        <Upload
                          beforeUpload={beforeUpload}
                          maxCount={1}
                          action="https://api.imgbb.com/1/upload"
                          // listType="picture-card"
                          data={(file) => {
                            return {
                              key: process.env.REACT_APP_API_KEY,
                              image: file,
                            };
                          }}
                          onChange={(info) => {
                            if (info.file.status === "uploading") {
                              setLoadingUpload({ id: index, isLoad: true });
                            }
                            if (info.file.status === "done") {
                              setLoadingUpload({ id: index, isLoad: false });
                              form.setFieldsValue({
                                footerListCard: footerListCardWatch.map(
                                  (item, id) => {
                                    return {
                                      ...item,
                                      imageUrl:
                                        id === index
                                          ? info.file.response.data.display_url
                                          : item.imageUrl,
                                    };
                                  }
                                ),
                              });
                              message.success(
                                `${info.file.name} file uploaded successfully`
                              );
                            } else if (info.file.status === "error") {
                              setLoadingUpload({ id: index, isLoad: false });
                              message.error(
                                `${info.file.name} file upload failed`
                              );
                            }
                          }}
                        >
                          <Button
                            id={index}
                            key={index}
                            loading={
                              index === loadingUpload.id && loadingUpload.isLoad
                            }
                            icon={<AiOutlineUpload />}
                          >
                            Click to Upload
                          </Button>
                        </Upload>
                      </Form.Item>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Image is required",
                          },
                        ]}
                        name={[data.name, "imageUrl"]}
                      >
                        <CustomImg />
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
