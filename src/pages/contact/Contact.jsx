import React from "react";
import { Divider, Form, Input, Select, Button } from "antd";
const { TextArea } = Input;
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";

const Contact = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <div className='relative py-30 bg-[url("/src/assets/house.jpg")] bg-no-repeat bg-cover bg-center flex justify-center items-center'>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[75rem]
       mx-auto px-6 text-center">
        <h1 className="font-extrabold text-white text-4xl sm:text-5xl mb-10">
          Let’s Get In Touch
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex justify-center items-center flex-col text-white">
            <div className="border border-white flex justify-center items-center p-3 mb-4">
              <BsTelephone size={20} className="text-white" />
            </div>
            <p>+234 0709234567</p>
            <p>+234 0909234562</p>
          </div>
          <div className="flex justify-center items-center flex-col text-white">
            <div className="border border-white flex justify-center items-center p-3 mb-4">
              <CiMail size={20} className="text-white" />
            </div>
            <p>inquiry@ilefund.com</p>
            <p>help@ilefund.com</p>
          </div>
          <div className="flex justify-center items-center flex-col text-white">
            <div className="border border-white flex justify-center items-center p-3 mb-4">
              <CiLocationOn size={20} className="text-white" />
            </div>
            <p>221b Vexas StreetArea 1, Abuja</p>
          </div>
        </div>

        <Divider className="bg-white/30 my-10" />

        <h1 className="font-extrabold text-white text-3xl sm:text-4xl">
          Or fill out the form below
        </h1>
        <Form
          layout="vertical"
          requiredMark={false} // ✅ removes red *
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Form.Item
              label={
                <span className="text-white font-bold">Inquiry Purposes</span>
              }
              name="inquiry"
              rules={[
                {
                  required: true,
                  message: "Please select an inquiry purpose!",
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Select purpose"
                optionFilterProp="label"
                onChange={onChange}
                onSearch={onSearch}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "tom", label: "Tom" },
                ]}
                className="custom-select" // ✅ remove rounded
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white font-bold">Full Name</span>}
              name="fullname"
              rules={[
                { required: true, message: "Please enter your full name!" },
              ]}
            >
              <Input
                placeholder="Enter full name"
                className="!rounded-none" // ✅ remove rounded
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white font-bold">Phone Number</span>}
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number!" },
              ]}
            >
              <Input
                placeholder="Enter phone number"
                className="!rounded-none" // ✅ remove rounded
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-white font-bold">Email</span>}
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input
                placeholder="Enter email"
                className="!rounded-none" // ✅ remove rounded
              />
            </Form.Item>
          </div>

          <Form.Item
            label={<span className="text-white font-bold">Message</span>}
            name="message"
            rules={[{ required: true, message: "Please enter your message!" }]}
          >
            <TextArea
              rows={4}
              className="resize-none !rounded-none" // ✅ remove rounded
              placeholder="Type your message..."
            />
          </Form.Item>

          <Form.Item>
            <Button
              className="!bg-blue-600 !text-white py-3 !rounded-full w-40 hover:bg-blue-700 transition !border-0"
              htmlType="submit"
            >
              Submit <MdOutlineArrowRightAlt />
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
