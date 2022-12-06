import React from "react";
import { Form, Button, message } from "antd";
import "./styles.css";

import { fetchApi, updateApi } from "api";
import HeaderForm from "./component/HeaderForm";
import BodyForm from "./component/BodyForm";
import FooterForm from "./component/FooterForm";
import Loading from "component/Loading";

const CMS = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const [loadingGetConfig, setLoadingGetConfig] = React.useState(false);
  const handleSaveConfig = async (values) => {
    // values.id = 1;
    setLoading(true);
    await updateApi(
      "https://638df3824190defdb751f026.mockapi.io/config/1",
      "PUT",
      JSON.stringify(values),
      (res) => {
        if (res) {
          setLoading(false);
          message.success("Lưu config thàng công");
        }
      },
      (err) => {
        console.log(err);
        setLoading(false);
      }
    );
  };
  React.useEffect(() => {
    (async () => {
      setLoadingGetConfig(true);
      await fetchApi(
        "https://638df3824190defdb751f026.mockapi.io/config/1",
        "GET",
        (res) => {
          if (res) {
            setLoadingGetConfig(false);
            form.setFieldsValue(res);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    })();
  }, [form]);
  return (
    <>
      {!loadingGetConfig ? (
        <div className="cms-wrapper">
          <Form
            onFinish={handleSaveConfig}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            form={form}
          >
            <div className="cms-wrapper--title">CMS</div>
            <HeaderForm />
            <BodyForm />
            <FooterForm />
          </Form>
          <Button
            onClick={() => form.submit()}
            style={{ marginBottom: 50, marginTop: 20 }}
            type="primary"
            loading={loading}
          >
            Save
          </Button>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CMS;
