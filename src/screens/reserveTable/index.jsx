import React from "react";
import Navbar from "../../components/Navbar";
import { Button, Form, Input, Modal } from "antd";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const ReserveTable = () => {
    const navigate = useNavigate();

    const _onSubmit = (values) => {
        console.log("Values ", values)
        Modal.success({
            content: "You order is successfully submitted. We will contact with you in a short",
            onOk: () => {
                navigate("/")
            }
        })
    }
   return (
    <main>
      <Navbar />
      <section className="reserve-table-wrapper">
        <Form className="reserve-form" onFinish={_onSubmit} >
          <h1>Reserve Table Form</h1>

          <h3>Personal Details</h3>
          <div className="personal">
            <Form.Item
              label="Full Name"
              name={'name'}
              labelCol={{ span: 24 }}
              style={{ width: "43%" }}
              rules={[{required: true, message: "Full name is required"}]}
            >
              <Input type="text" placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name={"email"}
              labelCol={{ span: 24 }}
              style={{ width: "43%" }}
              rules={[{type: 'email', required: true, message: "Valid email is required"}]}
            >
              <Input type="email" placeholder="jow@company.com" />
            </Form.Item>
            <Form.Item
              label="Mobile Number"
              name={'number'}
              labelCol={{ span: 24 }}
              style={{ width: "43%" }}
              rules={[{ required: true, message: "Mobile number is required"}]}
            >
              <Input type="numer" placeholder="(+92) Mobile Number" />
            </Form.Item>
            <Form.Item
              label="Request"
              name={'request'}
              labelCol={{ span: 24 }}
              style={{ width: "43%" }}
              rules={[{required: false}]}
            >
              <Input type="text" placeholder="Special Request (Optional)" />
            </Form.Item>
          </div>
          <h3>Booking Details</h3>
          <div className="personal">
            <Form.Item
              label="Occassion"
              name={'occassion'}
              labelCol={{ span: 24 }}
              style={{ width: "50%" }}
              rules={[{required: true, message: "Occassion is required"}]}
            >
              <Input type="text" placeholder="Occassion" />
            </Form.Item>
            <Form.Item
              label="Date"
              name={'date'}
              labelCol={{ span: 24 }}
              style={{ width: "35%" }}
              rules={[{type: 'date', required: true, message: "Date is required"}]}
            >
              <Input type="date" />
            </Form.Item>
            <Form.Item
              label="No. of Guests"
              name={'guests'}
              labelCol={{ span: 24 }}
              style={{ width: "50%" }}
              rules={[{required: true, message: "No. of guests is required"}]}
            >
              <Input type="number" placeholder="No. of Guests" />
            </Form.Item>
            <Form.Item
              label="Time"
              name={'time'}
              labelCol={{ span: 24 }}
              style={{ width: "35%" }}
              rules={[{required: true, message: "Time is required"}]}
            >
              <Input type="time" />
            </Form.Item>
          </div>
          <div className="btn-wrapper">
            <Button type="primary" style={{ width: '50%', height: 50 }} htmlType="submit" >Reserve Table</Button>
          </div>
        </Form>
      </section>
    </main>
  );
};

export default ReserveTable;
