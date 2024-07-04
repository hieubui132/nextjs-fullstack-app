"use client";
import classes from "./styles.module.scss";
import { Form, Input, Select, Button } from "antd";

export default function SignUpForm() {
  const [form] = Form.useForm();

  return (
    <div className="container">
      <div className={classes.form_container}>
        <Form form={form}>
          <h3 className={classes.title}>đăng ký</h3>
          <div className="mt-3">
            <div className={classes.form_item}>
              <div className={classes.label}>
                Họ và tên <span className="required">*</span>
              </div>
              <Form.Item>
                <Input size="large" placeholder="Nguyễn Văn A" />
              </Form.Item>
            </div>
            <div className={classes.form_item}>
              <div className={classes.label}>Số điện thoại</div>
              <Form.Item>
                <Input size="large" placeholder="0123456789" />
              </Form.Item>
            </div>
            <div className={classes.form_item}>
              <div className={classes.label}>Email</div>
              <Form.Item>
                <Input size="large" placeholder="abc@gmail.com" />
              </Form.Item>
            </div>
            <div className={classes.form_item}>
              <div className={classes.label}>
                Danh mục môn học <span className="required">*</span>
              </div>
              <Form.Item>
                <Select
                  size="large"
                  className="w-100"
                  placeholder="Chọn danh mục môn học"
                />
              </Form.Item>
            </div>
            <div className={classes.form_item}>
              <div className={classes.label}>
                Danh sách môn học <span className="required">*</span>
              </div>
              <Form.Item>
                <Select
                  size="large"
                  className="w-100"
                  placeholder="Chọn môn học"
                />
              </Form.Item>
            </div>
            <Form.Item>
              <button className={classes.btn_signup} type="submit">
                đăng ký ngay
              </button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
